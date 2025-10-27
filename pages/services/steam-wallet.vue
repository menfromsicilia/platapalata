<template>
  <div class="steam-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <Breadcrumbs :items="breadcrumbItems" />
    </div>

    <!-- Product Layout -->
    <div class="product-layout">
      <!-- Hero Block -->
      <ProductHero 
        title="Steam Wallet - Пополнение кошелька"
        description="Пополнение кошелька Steam на любую сумму. Покупайте игры, DLC и внутриигровые предметы."
        :image-url="product?.imageUrl"
        image-style="background: linear-gradient(135deg, #1b2838 0%, #2a475e 100%);"
        :is-official="true"
      />

      <!-- Steam Account -->
      <div class="form-section">
        <h2 class="section-title">Ваш аккаунт Steam</h2>
        <input 
          v-model="formData.steamAccount"
          type="text" 
          class="form-input"
          :class="{ 'error': accountError }"
          placeholder="Ваш аккаунт Steam"
          @blur="validateAccount"
        >
        <p v-if="accountError" class="form-error">{{ accountError }}</p>
        <p class="form-hint">Введите ссылку на ваш профиль Steam</p>
      </div>

      <!-- Amount Input -->
      <div class="form-section">
        <h2 class="section-title">Сумма пополнения</h2>
        <div class="amount-input-wrapper">
          <input 
            v-model="customAmount"
            type="number" 
            class="amount-input"
            :class="{ 'error': amountError }"
            placeholder="Введите сумму"
            min="100"
            max="15000"
            @blur="validateAmount"
          >
          <span class="currency">₽</span>
        </div>
        <p v-if="amountError" class="form-error">{{ amountError }}</p>
        <p class="form-hint">Минимум 100₽, максимум 15000₽</p>
      </div>

      <!-- Email Form (отдельный блок) -->
      <!-- Email Section -->
      <EmailSection 
        v-model="formData.email"
        :error="emailError"
        @validate="validateEmail"
      />

      <!-- Order Form -->
      <OrderForm 
        :denomination-price="finalAmount"
        :can-purchase="canPurchase"
        @purchase="handlePurchase"
      />

      <!-- FAQ Section -->
      <ProductFAQ :custom-faqs="steamFaqs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatPrice } from '~/utils/formatters'

const steamFaqs = [
  {
    question: 'Как быстро происходит пополнение?',
    answer: 'Steam кошелёк пополняется моментально после успешной оплаты. В редких случаях может потребоваться до 15 минут.'
  },
  {
    question: 'Какие данные нужны для пополнения?',
    answer: 'Нужна только ссылка на ваш профиль Steam или Steam ID. Никаких паролей или другой конфиденциальной информации.'
  },
  {
    question: 'Можно ли вернуть деньги?',
    answer: 'После успешного пополнения возврат средств невозможен согласно правилам продажи цифровых товаров.'
  }
]

const formData = reactive({
  steamAccount: '',
  email: ''
})

const customAmount = ref<number | null>(null)
const accountError = ref('')
const amountError = ref('')
const emailError = ref('')

const finalAmount = computed(() => customAmount.value || 0)

// Breadcrumbs
const breadcrumbItems = [
  { label: 'Главная', path: '/' },
  { label: 'Сервисы', path: '/services' },
  { label: 'Steam Wallet', path: '' }
]

// Validation composable
const { validateRequired, validateAmount: validateAmountHelper, validateEmail: validateEmailHelper } = useProductFormValidation()

// Validation
const validateAccount = () => {
  const result = validateRequired(formData.steamAccount, 'Steam аккаунт')
  accountError.value = result.error
  return result.isValid
}

const validateAmount = () => {
  const result = validateAmountHelper(customAmount.value, 100, 15000)
  amountError.value = result.error
  return result.isValid
}

const validateEmail = () => {
  const result = validateEmailHelper(formData.email)
  emailError.value = result.error
  return result.isValid
}

const canPurchase = computed(() => {
  return !!formData.steamAccount && 
         !!customAmount.value && 
         customAmount.value >= 100 &&
         customAmount.value <= 15000 &&
         !!formData.email && 
         !accountError.value && 
         !amountError.value &&
         !emailError.value
})

const handlePurchase = async (paymentMethod: string) => {
  if (!validateAccount() || !validateAmount() || !validateEmail()) {
    return
  }
  
  console.log('Purchase Steam Wallet:', {
    steamAccount: formData.steamAccount,
    amount: customAmount.value,
    email: formData.email,
    paymentMethod
  })
  
  // TODO: Redirect to payment
}

// Watch fields
watch(() => formData.steamAccount, () => {
  if (accountError.value && formData.steamAccount) {
    validateAccount()
  }
})

watch(() => customAmount.value, () => {
  if (amountError.value && customAmount.value) {
    validateAmount()
  }
})

watch(() => formData.email, () => {
  if (emailError.value && formData.email) {
    validateEmail()
  }
})

// Получаем продукт для отображения
const { data: product } = await useProductBySlug('steam-wallet')

// SEO with Open Graph
if (product.value) {
  useProductSeo(product.value)
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

.steam-page {
  background: $color-bg-primary;
  min-height: 100vh;
}

.product-layout {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 3rem;
  padding: 2rem 0;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

:deep(.order-form) {
  grid-column: 2;
  grid-row: 1 / 6;
}

.hero-block {
  display: flex;
  gap: 2rem;
  align-items: center;
  background: $color-bg-secondary;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid $color-bg-accent;
}

.hero-image {
  flex-shrink: 0;
  width: 160px;
  height: 160px;
  border-radius: 8px;
  overflow: hidden;
}

.hero-content {
  flex: 1;
}

.product-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  line-height: 1.2;
  color: $color-text-light;
}

.official-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(102, 192, 244, 0.15);
  color: $color-accent-blue;
  padding: 0.375rem 0.875rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
  border: 1px solid rgba(102, 192, 244, 0.3);

  svg {
    width: 16px;
    height: 16px;
  }
}

.product-description {
  color: $color-gray;
  font-size: 0.9375rem;
  line-height: 1.6;
}

.section-subtitle {
  font-size: 0.9375rem;
  color: $color-gray;
  margin-bottom: 1rem;
}

.form-section {
  background: $color-bg-secondary;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid $color-bg-accent;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: $color-text-light;
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

.amount-input-wrapper {
  position: relative;
}

.amount-input {
  width: 100%;
  padding: 0.875rem 3rem 0.875rem 1rem;
  border: 2px solid $color-bg-accent;
  border-radius: 4px;
  font-size: 1.25rem;
  font-weight: 600;
  background: $color-bg-primary;
  color: $color-text-light;
  transition: all 0.2s;

  &::placeholder {
    color: $color-gray;
    font-weight: 400;
    font-size: 1rem;
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

  /* Remove number input arrows */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  &[type=number] {
    -moz-appearance: textfield;
  }
}

.currency {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.25rem;
  font-weight: 600;
  color: $color-gray;
  pointer-events: none;
}


.form-hint {
  margin-top: 0.75rem;
  font-size: 0.8125rem;
  color: $color-gray;
  line-height: 1.5;
}

.form-error {
  margin-top: 0.5rem;
  font-size: 0.8125rem;
  color: #ff6b6b;
}

.faq-section {
  margin-bottom: 2rem;
}

.faq-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: left;
  color: $color-text-light;
}

details {
  background: $color-bg-secondary;
  border: 1px solid $color-bg-accent;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s;

  &[open] {
    box-shadow: $shadow-sm;
  }

  &[open] summary {
    background: $color-bg-accent;
    color: $color-accent-blue;
    border-bottom: 1px solid $color-bg-accent;
  }

  &[open] summary::after {
    transform: translateY(-50%) rotate(180deg);
  }
}

summary {
  padding: 1.25rem 3rem 1.25rem 1.5rem;
  cursor: pointer;
  font-weight: 600;
  color: $color-text-light;
  user-select: none;
  transition: all 0.2s;
  position: relative;
  list-style: none;

  &::after {
    content: '▼';
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.3s;
    color: $color-accent-blue;
    font-size: 0.75rem;
  }

  &::-webkit-details-marker {
    display: none;
  }

  &:hover {
    color: $color-accent-blue;
    background: $color-bg-accent;
  }
}

.faq-answer {
  padding: 1.25rem 1.5rem;
  color: $color-text-light;
  line-height: 1.8;
  opacity: 0.9;
}

/* Responsive */
@media (max-width: 992px) {
  .product-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-block {
    grid-row: 1;
  }

  .form-section:nth-of-type(1) {
    grid-row: 2; // Steam account
  }

  .form-section:nth-of-type(2) {
    grid-row: 3; // Amount
  }

  :deep(.order-form) {
    grid-column: 1;
    grid-row: 5; // Order form после email
  }
}

@media (max-width: 768px) {
  .quick-amounts {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

