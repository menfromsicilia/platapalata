<template>
  <div class="carousel-wrapper" ref="carouselWrapper">
    <ClientOnly>
      <div class="carousel-container">
        <button 
          class="carousel-arrow prev" 
          @click="scrollPrev"
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <div class="carousel-scroll" ref="scrollContainer">
          <div class="carousel-track">
            <div 
              v-for="(product, index) in products" 
              :key="product.slug" 
              class="carousel-item"
            >
              <ProductCard 
                :product="product" 
                :show-description="false"
                :loading="index < 4 ? 'eager' : 'lazy'"
              />
            </div>
          </div>
        </div>

        <button 
          class="carousel-arrow next" 
          @click="scrollNext"
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
      
      <template #fallback>
        <div class="carousel-fallback">
          <div v-for="product in products.slice(0, 4)" :key="product.slug" class="fallback-item">
            <ProductCard :product="product" :show-description="false" />
          </div>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/products'

interface Props {
  products: Product[]
}

defineProps<Props>()

const scrollContainer = ref<HTMLElement | null>(null)
const carouselWrapper = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const scrollPrev = () => {
  if (scrollContainer.value) {
    const scrollAmount = scrollContainer.value.offsetWidth
    const currentScroll = scrollContainer.value.scrollLeft
    
    // Если в начале, прокручиваем в конец
    if (currentScroll <= 10) {
      const maxScroll = scrollContainer.value.scrollWidth - scrollContainer.value.offsetWidth
      scrollContainer.value.scrollTo({
        left: maxScroll,
        behavior: 'smooth'
      })
    } else {
      scrollContainer.value.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      })
    }
  }
}

const scrollNext = () => {
  if (scrollContainer.value) {
    const scrollAmount = scrollContainer.value.offsetWidth
    const currentScroll = scrollContainer.value.scrollLeft
    const maxScroll = scrollContainer.value.scrollWidth - scrollContainer.value.offsetWidth
    
    // Если достигли конца, прокручиваем в начало
    if (currentScroll >= maxScroll - 10) {
      scrollContainer.value.scrollTo({
        left: 0,
        behavior: 'smooth'
      })
    } else {
      scrollContainer.value.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }
}

// Auto-scroll functionality
let autoScrollInterval: ReturnType<typeof setInterval> | null = null

const startAutoScroll = () => {
  if (autoScrollInterval) return
  autoScrollInterval = setInterval(() => {
    if (scrollContainer.value) {
      const currentScroll = scrollContainer.value.scrollLeft
      const maxScroll = scrollContainer.value.scrollWidth - scrollContainer.value.offsetWidth
      
      // Если достигли конца, возвращаемся в начало
      if (currentScroll >= maxScroll - 10) {
        scrollContainer.value.scrollTo({
          left: 0,
          behavior: 'smooth'
        })
      } else {
        scrollContainer.value.scrollBy({
          left: scrollContainer.value.offsetWidth * 0.5,
          behavior: 'smooth'
        })
      }
    }
  }, 5000)
}

const stopAutoScroll = () => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
    autoScrollInterval = null
  }
}

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('mouseenter', stopAutoScroll)
    scrollContainer.value.addEventListener('mouseleave', startAutoScroll)
    scrollContainer.value.addEventListener('touchstart', stopAutoScroll)
    scrollContainer.value.addEventListener('touchend', startAutoScroll)
  }

  // Intersection Observer - запускаем auto-scroll только когда карусель видна
  if (carouselWrapper.value && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.value = entry.isIntersecting
          if (entry.isIntersecting) {
            startAutoScroll()
          } else {
            stopAutoScroll()
          }
        })
      },
      {
        threshold: 0.1, // Запускаем когда 10% карусели видно
        rootMargin: '50px' // Начинаем чуть раньше
      }
    )
    observer.observe(carouselWrapper.value)

    // Cleanup observer
    onUnmounted(() => {
      observer.disconnect()
    })
  } else {
    // Fallback для старых браузеров
    startAutoScroll()
  }
})

onUnmounted(() => {
  stopAutoScroll()
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('mouseenter', stopAutoScroll)
    scrollContainer.value.removeEventListener('mouseleave', startAutoScroll)
    scrollContainer.value.removeEventListener('touchstart', stopAutoScroll)
    scrollContainer.value.removeEventListener('touchend', startAutoScroll)
  }
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

.carousel-wrapper {
  position: relative;
  padding: 1rem 0;
}

.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.carousel-scroll {
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.carousel-track {
  display: flex;
  gap: 24px;
  padding: 0.5rem 0;
}

.carousel-item {
  flex-shrink: 0;
  width: 280px;
  scroll-snap-align: start;
}

.carousel-arrow {
  position: relative;
  width: 48px;
  height: 48px;
  background: $color-bg-accent;
  border: 1px solid $color-bg-accent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;
  box-shadow: $shadow-md;
  flex-shrink: 0;

  &:hover {
    background: $color-accent-blue;
    border-color: $color-accent-blue;
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(102, 192, 244, 0.5);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: $color-text-light;
  }

  &:hover svg {
    fill: $color-bg-primary;
  }
}

.carousel-fallback {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 1rem 0;
}

.fallback-item {
  width: 100%;
}

@media (max-width: 768px) {
  .carousel-arrow {
    width: 40px;
    height: 40px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }

  .carousel-item {
    width: 240px;
  }
}
</style>
