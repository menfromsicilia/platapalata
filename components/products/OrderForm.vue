<template>
  <aside class="order-form">
    <h2 class="form-title">Оформление покупки</h2>

    <!-- Email section (опционально) -->
    <div v-if="showEmail" class="email-section">
      <label class="field-label">Email</label>
      <input 
        :model-value="email"
        @input="$emit('update:email', ($event.target as HTMLInputElement).value)"
        @blur="$emit('validate-email')"
        type="email" 
        class="form-input"
        :class="{ 'error': emailError }"
        placeholder="your@email.com"
      >
      <p v-if="emailError" class="form-error">{{ emailError }}</p>
      <p class="form-hint">Чек и подтверждение покупки отправим на указанный email после оплаты.</p>
    </div>

    <h3 class="form-subtitle">Выберите способ оплаты</h3>

    <div class="payment-methods-selector">
      <button 
        v-for="method in paymentMethods" 
        :key="method.value"
        class="payment-method-btn"
        :class="{ active: selectedPaymentMethod === method.value }"
        @click="selectedPaymentMethod = method.value"
      >
        <span>{{ method.label }}</span>
      </button>
    </div>

    <div class="order-summary">
      <div class="summary-row">
        <span>Стоимость номинала</span>
        <span>{{ formatPrice(denominationPrice) }}</span>
      </div>
      <div class="summary-row">
        <span>Комиссия сервиса</span>
        <span>{{ formatPrice(serviceFee) }}</span>
      </div>
      <div class="summary-row total">
        <span>Итого</span>
        <span>{{ formatPrice(totalPrice) }}</span>
      </div>
    </div>

    <div class="info-block">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="16" x2="12" y2="12" stroke="white" stroke-width="2"/>
        <circle cx="12" cy="8" r="1" fill="white"/>
      </svg>
      <p>Для успешной оплаты рекомендуем отключить VPN и перезагрузить страницу</p>
    </div>

    <button class="btn-buy" @click="handlePurchase" :disabled="!canPurchase">
      ОПЛАТИТЬ {{ formatPrice(totalPrice) }}
    </button>
    
    <p v-if="validationError" class="validation-error">{{ validationError }}</p>
  </aside>
</template>

<script setup lang="ts">
import { formatPrice } from '~/utils/formatters'

interface Props {
  denominationPrice: number
  serviceFee?: number
  canPurchase?: boolean
  showEmail?: boolean
  email?: string
  emailError?: string
}

const props = withDefaults(defineProps<Props>(), {
  serviceFee: 50,
  canPurchase: true
})

const emit = defineEmits<{
  purchase: [paymentMethod: string]
  'update:email': [value: string]
  'validate-email': []
}>()

const paymentMethods = [
  { label: 'СБП', value: 'sbp' },
  { label: 'КАРТА', value: 'card' }
]

const selectedPaymentMethod = ref('sbp')
const validationError = ref('')

const totalPrice = computed(() => props.denominationPrice + props.serviceFee)

const handlePurchase = () => {
  validationError.value = ''
  
  if (!props.canPurchase) {
    validationError.value = 'Заполните все обязательные поля'
    return
  }
  
  emit('purchase', selectedPaymentMethod.value)
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

/* Order Form - точная копия из HTML */
.order-form {
  position: sticky;
  top: 90px;
  background: $color-bg-secondary;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: $shadow-lg;
  border: 1px solid $color-bg-accent;
}

.form-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: $color-text-light;
}

.form-subtitle {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
  color: $color-text-light;
}

.email-section {
  margin-bottom: 1.5rem;
}

.field-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: $color-text-light;
  margin-bottom: 0.5rem;
}

.form-input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid $color-bg-accent;
  border-radius: 4px;
  font-size: 1rem;
  background: $color-bg-primary;
  color: $color-text-light;
  transition: all 0.2s;

  &::placeholder {
    color: $color-gray;
  }

  &:hover {
    border-color: $color-accent-blue;
  }

  &:focus {
    outline: none;
    border-color: $color-accent-blue;
    box-shadow: 0 0 0 3px rgba(102, 192, 244, 0.2);
  }

  &.error {
    border-color: #ff6b6b;
    
    &:focus {
      box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.2);
    }
  }
}

.form-error {
  margin-top: 0.5rem;
  font-size: 0.8125rem;
  color: #ff6b6b;
}

.form-hint {
  margin-top: 0.5rem;
  font-size: 0.8125rem;
  color: $color-gray;
  line-height: 1.5;
}

.payment-methods-selector {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.payment-method-btn {
  flex: 1;
  padding: 0.875rem;
  border: 2px solid $color-bg-accent;
  border-radius: 4px;
  background: $color-bg-primary;
  color: $color-text-light;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: $color-accent-blue;
    background: $color-bg-accent;
  }

  &.active {
    background: $color-accent-blue;
    color: $color-bg-primary;
    border-color: $color-accent-blue;
  }
}

.order-summary {
  background: $color-bg-primary;
  border-radius: 4px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  color: $color-gray;
  font-size: 0.9375rem;

  &:last-child {
    margin-bottom: 0;
  }

  &.total {
    padding-top: 0.75rem;
    border-top: 1px solid $color-bg-accent;
    font-size: 1.125rem;
    font-weight: 700;
    color: $color-text-light;
    margin-top: 0.5rem;
  }
}

.info-block {
  display: flex;
  gap: 0.75rem;
  background: rgba(102, 192, 244, 0.1);
  border: 1px solid rgba(102, 192, 244, 0.3);
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1.5rem;

  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    fill: $color-accent-blue;
  }

  p {
    font-size: 0.8125rem;
    color: $color-text-light;
    line-height: 1.5;
  }
}

.btn-buy {
  width: 100%;
  padding: 1rem;
  background: $color-accent-blue;
  color: $color-bg-primary;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: $shadow-sm;

  &:hover:not(:disabled) {
    background: $color-accent-blue-secondary;
    transform: translateY(-2px);
    box-shadow: $shadow-md;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.validation-error {
  color: #ff6b6b;
  font-size: 0.875rem;
  margin-top: 0.75rem;
  text-align: center;
}

/* Responsive */
@media (max-width: 992px) {
  .order-form {
    position: relative;
    top: 0;
  }
}

@media (max-width: 768px) {
  .payment-methods-selector {
    flex-direction: row;
    gap: 0.75rem;
  }

  .payment-method-btn {
    flex: 1;
    font-size: 0.8125rem;
  }

  .order-summary {
    padding: 1rem;
  }

  .summary-row {
    font-size: 0.875rem;
  }

  .summary-row.total {
    font-size: 1rem;
  }

  .info-block {
    padding: 0.875rem;

    p {
      font-size: 0.75rem;
    }
  }
}
</style>

