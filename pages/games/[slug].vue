<template>
  <div class="product-page-wrapper">
    <div class="container">
      <!-- Breadcrumbs -->
      <Breadcrumbs :items="breadcrumbItems" />
    </div>

    <!-- Product Layout -->
    <div class="product-layout">
      <!-- Hero Block -->
      <ProductHero 
        v-if="product"
        :title="product.name"
        :description="product.description"
        :image-url="product.imageUrl"
        :is-official="product.isOfficial"
      />

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
      <EmailSection 
        v-model="formData.email"
        :error="emailError"
        @validate="validateEmail"
      />

      <!-- FAQ Section -->
      <ProductFAQ />

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

// Breadcrumbs
const breadcrumbItems = computed(() => [
  { label: 'Главная', path: '/' },
  { label: 'Игры', path: '/games' },
  { label: product.value?.name || '', path: '' }
])

// Validation composable
const { validateEmail: validateEmailHelper } = useProductFormValidation()

// Email validation
const validateEmail = () => {
  const result = validateEmailHelper(formData.email)
  emailError.value = result.error
  return result.isValid
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

// SEO with Open Graph
if (product.value) {
  useProductSeo(product.value)
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

.product-page-wrapper {
  background: $color-bg-primary;
  min-height: 100vh;
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
:deep(.hero-block) {
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

:deep(.email-section) {
  grid-column: 1;
  grid-row: 4;
}

:deep(.faq-wrapper) {
  grid-column: 1;
  grid-row: 5;
}

:deep(.order-form) {
  grid-column: 2;
  grid-row: 1 / 6;
}

/* Hero Block styles moved to ProductHero.vue component */

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

  &:hover:not(:disabled):not(.selected) {
    border-color: $color-accent-blue;
    background: $color-bg-accent;
  }

  &.selected {
    background: $color-accent-blue;
    color: $color-bg-primary;
    border-color: $color-accent-blue;
    box-shadow: 0 0 15px rgba(102, 192, 244, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

/* FAQ Section styles moved to ProductFAQ.vue component */

/* Responsive */
@media (max-width: 992px) {
  .product-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  :deep(.hero-block) {
    grid-row: 1;
  }

  .region-section {
    grid-row: 2;
  }

  .denomination-section {
    grid-row: 3;
  }

  :deep(.email-section) {
    grid-row: 4;
  }

  :deep(.order-form) {
    grid-column: 1;
    grid-row: 5;
  }

  :deep(.faq-wrapper) {
    grid-row: 6;
  }
}

@media (max-width: 768px) {
  .form-section {
    padding: 1.5rem;
  }

  .denomination-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .denom-btn {
    padding: 0.875rem 0.5rem;
    font-size: 0.875rem;
  }
}
</style>
