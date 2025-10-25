<template>
  <div class="steam-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs">
        <NuxtLink to="/">Главная</NuxtLink>
        <span>→</span>
        <NuxtLink to="/services">Сервисы</NuxtLink>
        <span>→</span>
        <span>Steam Wallet</span>
      </nav>
    </div>

    <!-- Product Layout -->
    <div class="product-layout">
      <!-- Hero Block -->
      <div class="hero-block">
        <div class="hero-image" style="background: linear-gradient(135deg, #1b2838 0%, #2a475e 100%);">
          <img v-if="product?.imageUrl" :src="product.imageUrl" :alt="product.name" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="hero-content">
          <h1 class="product-title">Steam Wallet - Пополнение кошелька</h1>
          <div class="official-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span>Официальный партнёр</span>
          </div>
          <p class="product-description">
            Пополнение кошелька Steam на любую сумму. Покупайте игры, DLC и внутриигровые предметы.
          </p>
        </div>
      </div>

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
      <div class="form-section purchase-section">
        <h2 class="section-title">Оформление покупки</h2>
        <p class="section-subtitle">Получить ваучер и инструкцию</p>
        <input 
          v-model="formData.email"
          type="email" 
          class="form-input"
          :class="{ 'error': emailError }"
          placeholder="Введите вашу личную почту"
          @blur="validateEmail"
        >
        <p v-if="emailError" class="form-error">{{ emailError }}</p>
        <p class="form-hint">Ваучер и инструкцию по активации пришлем после оплаты на указанный адрес электронной почты.</p>
      </div>

      <!-- FAQ Section -->
      <div class="faq-section purchase-section">
        <h2 class="faq-title">Часто задаваемые вопросы</h2>
        
        <details>
          <summary>Как быстро происходит пополнение?</summary>
          <div class="faq-answer">
            Steam кошелёк пополняется моментально после успешной оплаты. В редких случаях может потребоваться до 15 минут.
          </div>
        </details>

        <details>
          <summary>Какие данные нужны для пополнения?</summary>
          <div class="faq-answer">
            Нужна только ссылка на ваш профиль Steam или Steam ID. Никаких паролей или другой конфиденциальной информации.
          </div>
        </details>

        <details>
          <summary>Можно ли вернуть деньги?</summary>
          <div class="faq-answer">
            После успешного пополнения возврат средств невозможен согласно правилам продажи цифровых товаров.
          </div>
        </details>
      </div>

      <!-- Order Form -->
      <OrderForm 
        :denomination-price="finalAmount"
        :can-purchase="canPurchase"
        @purchase="handlePurchase"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatPrice } from '~/utils/formatters'

const formData = reactive({
  steamAccount: '',
  email: ''
})

const customAmount = ref<number | null>(null)
const accountError = ref('')
const amountError = ref('')
const emailError = ref('')

const finalAmount = computed(() => customAmount.value || 0)

// Validation
const validateAccount = () => {
  if (!formData.steamAccount) {
    accountError.value = 'Steam аккаунт обязателен'
    return false
  }
  
  accountError.value = ''
  return true
}

const validateAmount = () => {
  if (!customAmount.value) {
    amountError.value = 'Введите сумму пополнения'
    return false
  }
  
  if (customAmount.value < 100) {
    amountError.value = 'Минимальная сумма 100₽'
    return false
  }
  
  if (customAmount.value > 15000) {
    amountError.value = 'Максимальная сумма 15000₽'
    return false
  }
  
  amountError.value = ''
  return true
}

const validateEmail = () => {
  if (!formData.email) {
    emailError.value = 'Email обязателен'
    return false
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    emailError.value = 'Введите корректный email'
    return false
  }
  
  emailError.value = ''
  return true
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

// SEO
useHead({
  title: 'Steam Wallet - Пополнение кошелька Steam - PlataПалата',
  meta: [
    {
      name: 'description',
      content: 'Пополнение кошелька Steam на любую сумму от 100₽ до 15000₽. Моментальное зачисление, официальный партнёр.'
    }
  ]
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

.steam-page {
  background: $color-bg-primary;
  min-height: 100vh;
}

/* Используем все те же стили что и в [slug].vue */
.breadcrumbs {
  padding: 1.5rem 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: $color-gray;

  a {
    color: $color-accent-blue;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: $color-accent-blue-secondary;
    }
  }

  span {
    color: $color-text-light;
    font-weight: 500;
  }
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
  width: 120px;
  height: 120px;
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
    flex-direction: column;
    text-align: center;
  }

  :deep(.order-form) {
    grid-column: 1;
    grid-row: auto; // Сброс grid-row для правильного порядка
  }

  .hero-image {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 768px) {
  .quick-amounts {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

