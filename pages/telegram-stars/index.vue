<template>
  <div class="telegram-stars-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs">
        <NuxtLink to="/">Главная</NuxtLink>
        <span>→</span>
        <span>Telegram Stars</span>
      </nav>
    </div>

    <!-- Product Layout -->
    <div class="product-layout">
      <!-- Hero Block -->
      <ProductHero 
        title="Telegram Stars"
        description="Покупайте звёзды Telegram для доступа к премиум-контенту, поддержки авторов и использования эксклюзивных функций мессенджера."
        emoji="⭐"
        :is-official="true"
      />

      <!-- Telegram Username -->
      <div class="form-section telegram-username-section">
        <h2 class="section-title">Telegram никнейм</h2>
        <div class="telegram-input-wrapper">
          <span class="telegram-prefix">@</span>
          <input 
            v-model="formData.username"
            type="text" 
            class="form-input"
            :class="{ 'error': usernameError }"
            placeholder="Telegram никнейм"
            @blur="validateUsername"
          >
          <div class="input-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>
        <p v-if="usernameError" class="form-error">{{ usernameError }}</p>
      </div>

      <!-- Packages Selection -->
      <div class="form-section packages-section">
        <h2 class="section-title">Выберите пакет звёзд</h2>
        <div class="packages-grid">
          <label 
            v-for="pkg in packages" 
            :key="pkg.id"
            class="package-option"
            :class="{ selected: selectedPackage?.id === pkg.id }"
            @click="selectPackage(pkg)"
          >
            <div class="package-radio"></div>
            <div class="package-content">
              <span class="star-icon">⭐</span>
              <div class="package-info">
                <div class="package-amount">{{ pkg.stars }} звёзд</div>
              </div>
              <div class="package-price">{{ pkg.price }}₽</div>
            </div>
          </label>
        </div>
      </div>

      <!-- Purchase Form -->
      <!-- Email Section -->
      <EmailSection 
        v-model="formData.email"
        :error="emailError"
        @validate="validateEmail"
      />

      <!-- FAQ Section -->
      <ProductFAQ :custom-faqs="telegramStarsFaqs" />

      <!-- Order Form (Sticky on desktop) -->
      <OrderForm 
        v-if="selectedPackage"
        :denomination-price="selectedPackage.price"
        :service-fee="serviceFee"
        :can-purchase="canPurchase"
        @purchase="handlePurchase"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const telegramStarsFaqs = [
  {
    question: 'Как быстро приходят звёзды?',
    answer: 'Звёзды Telegram зачисляются моментально после успешной оплаты. В редких случаях может потребоваться до 15 минут для обработки заказа.'
  },
  {
    question: 'Безопасно ли покупать через ваш сервис?',
    answer: 'Да, мы работаем только с официальными поставщиками и используем защищённые каналы передачи данных. Ваши данные надёжно защищены, а все транзакции проходят через проверенные платёжные системы.'
  },
  {
    question: 'Можно ли вернуть деньги?',
    answer: 'После успешного зачисления звёзд возврат средств невозможен согласно правилам продажи цифровых товаров. Если возникла ошибка при оформлении заказа - свяжитесь с нашей поддержкой, и мы поможем решить проблему.'
  },
  {
    question: 'Какие способы оплаты доступны?',
    answer: 'Мы принимаем банковские карты Visa, MasterCard и МИР, платежи через Систему быстрых платежей (СБП), электронные кошельки и криптовалюту. Выберите удобный способ при оформлении заказа.'
  },
  {
    question: 'Для чего нужны Telegram Stars?',
    answer: 'Telegram Stars используются для доступа к платному контенту в каналах и ботах, для покупки цифровых товаров, поддержки создателей контента и получения эксклюзивных функций в мессенджере.'
  }
]

const formData = reactive({
  username: '',
  email: ''
})

const usernameError = ref('')
const emailError = ref('')

// Validation composable
const { validateUsername: validateUsernameHelper, validateEmail: validateEmailHelper } = useProductFormValidation()

const packages = [
  { id: 1, stars: 50, price: 78 },
  { id: 2, stars: 100, price: 156 },
  { id: 3, stars: 200, price: 310 },
  { id: 4, stars: 500, price: 776 },
  { id: 5, stars: 1000, price: 1551 },
  { id: 6, stars: 2500, price: 3878 },
  { id: 7, stars: 5000, price: 7755 },
  { id: 8, stars: 10000, price: 15510 }
]

const selectedPackage = ref(packages[1]) // По умолчанию второй пакет выбран
const serviceFee = computed(() => 0) // У Telegram Stars нет комиссии

// Validation
const validateUsername = () => {
  const result = validateUsernameHelper(formData.username)
  usernameError.value = result.error
  return result.isValid
}

const validateEmail = () => {
  const result = validateEmailHelper(formData.email)
  emailError.value = result.error
  return result.isValid
}

// Watch fields для автоматической валидации
watch(() => formData.username, () => {
  if (usernameError.value && formData.username) {
    validateUsername()
  }
})

watch(() => formData.email, () => {
  if (emailError.value && formData.email) {
    validateEmail()
  }
})

const canPurchase = computed(() => {
  return !!selectedPackage.value && 
         !!formData.username && 
         !!formData.email && 
         !usernameError.value && 
         !emailError.value
})

// Methods
const selectPackage = (pkg: typeof packages[0]) => {
  selectedPackage.value = pkg
}

const handlePurchase = async (paymentMethod: string) => {
  // Validate before purchase
  if (!validateUsername() || !validateEmail()) {
    return
  }
  
  console.log('Purchase Telegram Stars:', {
    package: selectedPackage.value,
    username: formData.username,
    email: formData.email,
    paymentMethod
  })
  
  // TODO: Redirect to payment
}

// SEO
useHead({
  title: 'Telegram Stars - PlataПалата',
  meta: [
    {
      name: 'description',
      content: 'Купить Telegram Stars для доступа к премиум-контенту, поддержки авторов и использования эксклюзивных функций мессенджера. Моментальная доставка, выгодные цены.'
    }
  ]
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

.telegram-stars-page {
  background: $color-bg-primary;
  min-height: 100vh;
}

/* Breadcrumbs */
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

/* Product Layout */
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

.hero-block {
  grid-column: 1;
  grid-row: 1;
}

.telegram-username-section {
  grid-column: 1;
  grid-row: 2;
}

.packages-section {
  grid-column: 1;
  grid-row: 3;
}

.purchase-section {
  grid-column: 1;
  grid-row: 4;
}

.faq-section {
  grid-column: 1;
  grid-row: 5;
}

:deep(.order-form) {
  grid-column: 2;
  grid-row: 1 / 6;
}

/* Hero Block */
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
  background: linear-gradient(135deg, #229ED9 0%, #0088cc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
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

/* Form Sections */
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

/* Telegram Username Input */
.telegram-input-wrapper {
  position: relative;
}

.telegram-prefix {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: $color-gray;
  font-size: 1rem;
  pointer-events: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.form-input {
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 3rem;
  border: 2px solid $color-bg-accent;
  border-radius: 12px;
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

.email-input {
  padding-left: 1rem;
}

.input-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background: $color-bg-accent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 14px;
    height: 14px;
    fill: $color-gray;
  }
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

/* Packages Grid */
.packages-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.package-option {
  position: relative;
  padding: 1rem 1.25rem;
  border: 2px solid $color-bg-accent;
  border-radius: 12px;
  background: $color-bg-primary;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    border-color: $color-accent-blue;
    background: rgba(42, 71, 94, 0.3);
  }

  &.selected {
    background: rgba(102, 192, 244, 0.1);
    border-color: $color-accent-blue;
    box-shadow: 0 0 15px rgba(102, 192, 244, 0.2);

    .package-price {
      color: $color-text-light;
    }

    .package-radio {
      border-color: $color-accent-blue;
      background: $color-accent-blue;

      &::after {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        background: $color-bg-primary;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}

.package-radio {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border: 2px solid $color-bg-accent;
  border-radius: 50%;
  position: relative;
  transition: all 0.2s;
}

.package-option:hover .package-radio {
  border-color: $color-accent-blue;
}

.package-content {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.star-icon {
  font-size: 1.5rem;
}

.package-info {
  flex: 1;
}

.package-amount {
  font-size: 1rem;
  font-weight: 600;
  color: $color-text-light;
}

.package-price {
  font-size: 1.125rem;
  font-weight: 600;
  color: $color-gray;
}

/* FAQ Section */
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
  outline: none;

  &:focus {
    outline: none;
  }

  &[open] {
    border-color: $color-bg-accent;
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
  outline: none;
  -webkit-tap-highlight-color: transparent;

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
    flex-direction: column;
    text-align: center;
  }

  .telegram-username-section {
    grid-row: 2;
  }

  .packages-section {
    grid-row: 3;
  }

  .purchase-section {
    grid-row: 4;
  }

  :deep(.order-form) {
    grid-column: 1;
    grid-row: 5;
  }

  .faq-section {
    grid-row: 6;
  }

  .hero-image {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 768px) {
  .hero-block {
    padding: 1.5rem;
  }

  .form-section {
    padding: 1.5rem;
  }

  .product-title {
    font-size: 1.5rem;
  }

  .package-option {
    padding: 0.875rem 1rem;
  }

  .faq-title {
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  details {
    border-radius: 8px;
  }

  summary {
    padding: 1rem;
    font-size: 0.9375rem;
  }

  .faq-answer {
    padding: 0 1rem 1rem;
    font-size: 0.875rem;
  }
}
</style>
