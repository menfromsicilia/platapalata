<template>
  <Card class="purchase-form-card">
    <template #title>
      <h3>Оформление заказа</h3>
    </template>
    <template #content>
      <form @submit.prevent="handleSubmit" class="purchase-form">
        <!-- Выбор номинала -->
        <div class="form-group">
          <label for="denomination" class="form-label">Выберите номинал *</label>
          <Select
            id="denomination"
            v-model="selectedDenomination"
            :options="availableDenominations"
            option-label="name"
            placeholder="Выберите номинал"
            class="w-full"
            :invalid="submitted && !selectedDenomination"
          />
          <small v-if="submitted && !selectedDenomination" class="p-error">
            Выберите номинал
          </small>
        </div>

        <!-- Динамические поля из продукта -->
        <div v-for="field in product.fields" :key="field.name" class="form-group">
          <label :for="field.name" class="form-label">
            {{ field.label }} {{ field.required ? '*' : '' }}
          </label>

          <!-- Text/Email/Number -->
          <InputText
            v-if="['text', 'email', 'number'].includes(field.type)"
            :id="field.name"
            v-model="formData[field.name]"
            :type="field.type"
            :placeholder="field.placeholder"
            class="w-full"
            :invalid="submitted && field.required && !formData[field.name]"
          />

          <!-- Select -->
          <Select
            v-else-if="field.type === 'select'"
            :id="field.name"
            v-model="formData[field.name]"
            :options="field.options"
            option-label="label"
            option-value="value"
            :placeholder="`Выберите ${field.label.toLowerCase()}`"
            class="w-full"
            :invalid="submitted && field.required && !formData[field.name]"
          />

          <small v-if="submitted && field.required && !formData[field.name]" class="p-error">
            {{ field.label }} обязателен для заполнения
          </small>
        </div>

        <!-- Email для чека -->
        <div class="form-group">
          <label for="email" class="form-label">Email для чека *</label>
          <InputText
            id="email"
            v-model="email"
            type="email"
            placeholder="your@email.com"
            class="w-full"
            :invalid="submitted && !isValidEmail(email)"
          />
          <small v-if="submitted && !isValidEmail(email)" class="p-error">
            Введите корректный email
          </small>
        </div>

        <!-- Итоговая цена -->
        <div v-if="selectedDenomination" class="price-summary">
          <div class="price-row">
            <span>Итого к оплате:</span>
            <strong class="price-amount">{{ formatPrice(selectedDenomination.price) }}</strong>
          </div>
        </div>

        <!-- Кнопка отправки -->
        <Button
          type="submit"
          label="Купить"
          icon="pi pi-shopping-cart"
          :loading="loading"
          :disabled="!selectedDenomination"
          class="w-full"
          size="large"
        />

        <small class="form-note">
          После оплаты вы получите код активации на указанный email
        </small>
      </form>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import type { Product, Denomination } from '~/types/products'
import { formatPrice, formatOrderId } from '~/utils/formatters'
import { isValidEmail } from '~/utils/validators'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const { createOrder, redirectToPayment } = usePurchase()

const selectedDenomination = ref<Denomination | null>(null)
const formData = ref<Record<string, string>>({})
const email = ref('')
const submitted = ref(false)
const loading = ref(false)

// Доступные номиналы (только те что в наличии)
const availableDenominations = computed(() => {
  return props.product.denominations.filter(d => d.available)
})

const handleSubmit = async () => {
  submitted.value = true

  // Валидация
  if (!selectedDenomination.value || !isValidEmail(email.value)) {
    return
  }

  // Проверка обязательных полей
  const missingRequired = props.product.fields
    .filter(f => f.required)
    .some(f => !formData.value[f.name])

  if (missingRequired) {
    return
  }

  loading.value = true

  try {
    // Создание заказа
    const orderData = {
      voucherId: selectedDenomination.value.id,
      amount: selectedDenomination.value.price,
      count: 1,
      orderId: formatOrderId(),
      email: email.value,
      description: `${props.product.name} - ${selectedDenomination.value.name}`,
      fields: formData.value,
      successRedirectUrl: `${window.location.origin}/success`,
      failRedirectUrl: `${window.location.origin}/fail`
    }

    const response = await createOrder(orderData)

    if (response?.paymentLink) {
      // Редирект на платёжную страницу
      redirectToPayment(response.paymentLink)
    }
  }
  catch (error) {
    console.error('Purchase error:', error)
    // TODO: Показать тост с ошибкой
  }
  finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.purchase-form-card {
  position: sticky;
  top: calc(73px + $spacing-md);
}

.purchase-form {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
}

.form-label {
  font-weight: $font-weight-semibold;
  color: $color-text-light;
  font-size: 0.9375rem;
}

.form-note {
  text-align: center;
  color: $color-gray;
  font-size: 0.875rem;
  line-height: 1.5;
}

.price-summary {
  padding: $spacing-md;
  background: $color-bg-accent;
  border-radius: $radius-sm;
  border: 1px solid $color-bg-accent;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.125rem;
}

.price-amount {
  font-size: 1.5rem;
  font-weight: $font-weight-bold;
  color: $color-accent-blue;
}

.w-full {
  width: 100%;
}
</style>

