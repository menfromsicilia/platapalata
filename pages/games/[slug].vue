<template>
  <div class="product-page-wrapper">
    <div class="container">
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs">
        <NuxtLink to="/">Главная</NuxtLink>
        <span>→</span>
        <NuxtLink to="/games">Игры</NuxtLink>
        <span>→</span>
        <span>{{ product?.name }}</span>
      </nav>
    </div>

    <!-- Product Layout -->
    <div class="product-layout">
      <!-- Hero Block -->
      <div class="hero-block">
        <div class="hero-image">
          <img v-if="product?.imageUrl" :src="product.imageUrl" :alt="product.name">
        </div>
        <div class="hero-content">
          <h1 class="product-title">{{ product?.name }}</h1>
          <div v-if="product?.isOfficial" class="official-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span>Официальный партнёр</span>
          </div>
          <p class="product-description">
            {{ product?.description }}
          </p>
        </div>
      </div>

      <!-- Region/Server Selection (если есть) -->
      <div v-if="product?.fields?.find(f => f.type === 'select')" class="form-section region-section">
        <h2 class="section-title">{{ serverField?.label || 'Выберите сервер' }}</h2>
        <CustomSelect 
          v-model="formData.server"
          :options="serverField?.options || []"
        />
      </div>

      <!-- Denomination Selection -->
      <div class="form-section denomination-section">
        <h2 class="section-title">Выберите номинал</h2>
        <div class="denomination-grid">
          <button 
            v-for="denom in product?.denominations" 
            :key="denom.id"
            class="denom-btn"
            :class="{ selected: selectedDenomination?.id === denom.id }"
            :disabled="!denom.available"
            @click="selectDenomination(denom)"
          >
            {{ denom.name }}
          </button>
        </div>
      </div>

      <!-- Purchase Form -->
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
      <div class="faq-section">
        <h2 class="faq-title">Часто задаваемые вопросы</h2>
        
        <details>
          <summary>Как быстро происходит пополнение?</summary>
          <div class="faq-answer">
            Обычно пополнение происходит моментально после успешной оплаты. В редких случаях может потребоваться до 15 минут для обработки заказа.
          </div>
        </details>

        <details>
          <summary>Безопасно ли пополнять аккаунт через ваш сервис?</summary>
          <div class="faq-answer">
            Да, мы работаем только с официальными поставщиками и используем защищённые каналы передачи данных. Ваши данные надёжно защищены, а все транзакции проходят через проверенные платёжные системы.
          </div>
        </details>

        <details>
          <summary>Можно ли вернуть деньги?</summary>
          <div class="faq-answer">
            После успешного пополнения возврат средств невозможен согласно правилам продажи цифровых товаров. Если возникла ошибка при оформлении заказа - свяжитесь с нашей поддержкой, и мы поможем решить проблему.
          </div>
        </details>

        <details>
          <summary>Какие способы оплаты доступны?</summary>
          <div class="faq-answer">
            Мы принимаем банковские карты Visa, MasterCard и МИР, платежи через Систему быстрых платежей (СБП), электронные кошельки и криптовалюту. Выберите удобный способ при оформлении заказа.
          </div>
        </details>

        <details>
          <summary>Нужна ли регистрация на сайте?</summary>
          <div class="faq-answer">
            Нет, для покупки регистрация не требуется. Достаточно указать email для получения чека и деталей заказа. Все ваши покупки будут отправлены на указанный адрес электронной почты.
          </div>
        </details>

        <details>
          <summary>Что делать, если пополнение не пришло?</summary>
          <div class="faq-answer">
            Если через 15 минут после оплаты пополнение не поступило, проверьте правильность указанных данных аккаунта. Если всё верно - свяжитесь с нашей службой поддержки через Telegram, указав номер заказа.
          </div>
        </details>

        <details>
          <summary>Работаете ли вы круглосуточно?</summary>
          <div class="faq-answer">
            Да, наш сервис работает 24/7. Вы можете оформить заказ в любое время. Служба поддержки отвечает ежедневно с 9:00 до 23:00 МСК, но автоматическое пополнение доступно всегда.
          </div>
        </details>
      </div>

      <!-- Order Form (Sticky on desktop) -->
      <OrderForm 
        v-if="selectedDenomination"
        :denomination-price="selectedDenomination.price"
        :can-purchase="canPurchase"
        @purchase="handlePurchase"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Denomination } from '~/types/products'

const route = useRoute()
const slug = route.params.slug as string

// Получаем продукт по slug
const { data: product } = await useProductBySlug(slug)

if (!product.value) {
  throw createError({
    statusCode: 404,
    message: 'Product not found'
  })
}

// Form data
const formData = reactive({
  server: '',
  email: ''
})

const selectedDenomination = ref<Denomination | null>(
  product.value?.denominations?.[0] || null
)

const emailError = ref('')

// Server field
const serverField = computed(() => 
  product.value?.fields?.find(f => f.type === 'select')
)

// Email validation
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

// Watch email changes
watch(() => formData.email, () => {
  if (emailError.value && formData.email) {
    validateEmail()
  }
})

// Can purchase
const canPurchase = computed(() => {
  return !!selectedDenomination.value && !!formData.email && !emailError.value
})

// Methods
const selectDenomination = (denom: Denomination) => {
  selectedDenomination.value = denom
}

const handlePurchase = async (paymentMethod: string) => {
  // Validate email before purchase
  if (!validateEmail()) {
    return
  }
  
  console.log('Purchase:', {
    product: product.value?.slug,
    denomination: selectedDenomination.value,
    email: formData.email,
    server: formData.server,
    paymentMethod
  })
  
  // TODO: Redirect to payment
}

// SEO
useHead({
  title: `${product.value?.name} - PlataПалата`,
  meta: [
    {
      name: 'description',
      content: product.value?.description || `Купить ${product.value?.name}`
    }
  ]
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

.product-page-wrapper {
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

/* Desktop grid positioning */
.hero-block {
  grid-column: 1;
  grid-row: 1;
}

.region-section {
  grid-column: 1;
  grid-row: 2;
}

.denomination-section {
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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

.section-subtitle {
  color: $color-gray;
  font-size: 0.9375rem;
  margin-bottom: 1rem;
}

.form-select {
  width: 100%;
  padding: 0.875rem 1rem;
  padding-right: 2.5rem;
  border: 2px solid $color-bg-accent;
  border-radius: 4px;
  font-size: 1rem;
  background: $color-bg-primary;
  color: $color-text-light;
  cursor: pointer;
  transition: all 0.2s;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2366c0f4' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 20px;

  &:hover {
    border-color: $color-accent-blue;
  }

  &:focus {
    outline: none;
    border-color: $color-accent-blue;
    box-shadow: 0 0 0 3px rgba(102, 192, 244, 0.2);
  }
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

.form-input.error {
  border-color: #ff6b6b;
  
  &:focus {
    box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.2);
  }
}

/* Denomination Grid */
.denomination-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0.75rem;
}

.denom-btn {
  padding: 1rem;
  border: 2px solid $color-bg-accent;
  border-radius: 4px;
  background: $color-bg-primary;
  color: $color-text-light;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    border-color: $color-accent-blue;
    background: $color-bg-accent;
  }

  &.selected {
    background: $color-accent-blue;
    color: $color-bg-primary;
    border-color: $color-accent-blue;
    box-shadow: 0 0 15px rgba(102, 192, 244, 0.3);

    &:hover {
      background: $color-accent-blue-secondary;
      color: $color-text-light;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
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

  .region-section {
    grid-row: 2;
  }

  .denomination-section {
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

  .denomination-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .denom-btn {
    padding: 0.875rem 0.5rem;
    font-size: 0.875rem;
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
