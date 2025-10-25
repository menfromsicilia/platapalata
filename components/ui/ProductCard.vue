<template>
  <NuxtLink :to="productLink" class="product-card">
    <div class="product-card-image">
      <img 
        v-if="product.imageUrl" 
        :src="product.imageUrl" 
        :alt="product.name"
        :loading="loading"
        class="product-image"
      >
    </div>
    <div class="product-card-content">
      <h3 class="product-card-title">{{ product.name }}</h3>
      <p v-if="showDescription && product.description" class="product-card-description">
        {{ truncateText(product.description, 80) }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Product } from '~/types/products'
import { truncateText } from '~/utils/formatters'

interface Props {
  product: Product
  showDescription?: boolean
  loading?: 'eager' | 'lazy'
}

const props = withDefaults(defineProps<Props>(), {
  showDescription: true,
  loading: 'lazy'
})

const productLink = computed(() => {
  // Для Telegram Stars используем просто /telegram-stars без дублирования slug
  if (props.product.category === 'telegram') {
    return '/telegram-stars'
  }
  return `/${props.product.category}/${props.product.slug}`
})

// Градиенты для карточек (можно настроить для каждого продукта)
const getGradient = computed(() => {
  if (props.product.imageUrl) {
    return `center / cover no-repeat url(${props.product.imageUrl}), linear-gradient(135deg, #2a475e 0%, #1b2838 100%)`
  }
  
  // Дефолтные градиенты по категориям
  const gradients: Record<string, string> = {
    'steam': 'linear-gradient(135deg, #1b2838 0%, #2a475e 100%)',
    'playstation': 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)',
    'xbox': 'linear-gradient(135deg, #0F9B0F 0%, #00D084 100%)',
    'spotify': 'linear-gradient(135deg, #1DB954 0%, #1ed760 100%)',
    'netflix': 'linear-gradient(135deg, #E50914 0%, #B20710 100%)',
    'genshin-impact': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'valorant': 'linear-gradient(135deg, #FF4655 0%, #BD3944 100%)',
    'mobile-legends': 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)',
    'pubg-mobile': 'linear-gradient(135deg, #A8E6CF 0%, #3DDC84 100%)',
    'league-of-legends': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'honkai-star-rail': 'linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 90%)',
    'telegram': 'linear-gradient(135deg, #66c0f4 0%, #5c9dc9 100%)'
  }
  
  return gradients[props.product.slug] || 'linear-gradient(135deg, #66c0f4 0%, #5c9dc9 100%)'
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

/* Product Card - точная копия из оригинала */
.product-card {
  display: block;
  flex: 0 0 280px;
  border-radius: 8px;
  overflow: hidden;
  background: $color-bg-secondary;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: $shadow-sm;
  text-decoration: none;

  &:hover {
    transform: translateY(-8px);
    box-shadow: $shadow-lg;
    background: $color-bg-accent;

    .product-image {
      transform: scale(1.05);
    }
  }
}

.product-card-image {
  width: 100%;
  height: 220px;
  background: linear-gradient(135deg, $color-bg-accent 0%, $color-bg-dark 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.product-card-content {
  padding: 0.25rem 1rem;
  min-height: 2.25rem;
  display: flex;
  align-items: center;
}

.product-card-title {
  font-size: 1rem;
  font-weight: 600;
  color: $color-text-light;
  line-height: 1.3;
  margin: 0;
}

.product-card-description {
  font-size: 0.875rem;
  color: $color-gray;
  line-height: 1.5;
  margin-top: 0.5rem;
}

/* Hide description in carousel cards */
:global(.carousel .product-card-description) {
  display: none;
}

/* Mobile horizontal layout */
@media (max-width: 768px) {
  .product-card {
    display: flex;
    flex-direction: row;
    flex: 1 1 100%; // Занимает всю ширину на мобильном
  }

  .product-card-image {
    width: 100px;
    height: 100px;
    flex-shrink: 0;
  }

  .product-card-content {
    flex: 1;
    padding: 0.75rem;
    min-height: auto;
    display: flex;
    flex-direction: column;
    align-items: center; // Центрируем содержимое
    justify-content: center;
    text-align: center; // Центрируем текст
  }

  .product-card-title {
    margin-bottom: 0.25rem;
  }

  .product-card-description {
    margin-top: 0.25rem;
    font-size: 0.8125rem;
  }
}
</style>
