<template>
  <div class="hero-block">
    <div class="hero-image" :style="heroImageStyle">
      <span v-if="emoji" class="hero-emoji">{{ emoji }}</span>
      <img v-else-if="imageUrl" :src="imageUrl" :alt="title">
    </div>
    <div class="hero-content">
      <h1 class="product-title">{{ title }}</h1>
      <div v-if="isOfficial" class="official-badge">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <span>Официальный партнёр</span>
      </div>
      <p class="product-description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  imageUrl?: string
  emoji?: string
  isOfficial?: boolean
  imageStyle?: string
  emojiBackground?: string
}

const props = defineProps<Props>()

const heroImageStyle = computed(() => {
  if (props.imageStyle) {
    return props.imageStyle
  }
  if (props.emojiBackground) {
    return `background: ${props.emojiBackground}`
  }
  return ''
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

/* Hero Block */
.hero-block {
  display: flex;
  gap: 2rem;
  align-items: center;
  background: $color-bg-secondary;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 1rem;
  border: 1px solid $color-bg-accent;
}

.hero-image {
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.hero-emoji {
  font-size: 4rem;
  line-height: 1;
}

.hero-content {
  flex: 1;
}

.product-title {
  font-size: 2rem;
  font-weight: 700;
  color: $color-text-light;
  margin-bottom: 0.75rem;
  line-height: 1.2;
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
  font-size: 1rem;
  color: $color-gray;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 992px) {
  .hero-block {
    flex-direction: column;
    text-align: center;
  }

  .hero-image {
    width: 100px;
    height: 100px;
  }

  .hero-emoji {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .hero-block {
    padding: 1.5rem;
  }

  .product-title {
    font-size: 1.5rem;
  }
}
</style>

