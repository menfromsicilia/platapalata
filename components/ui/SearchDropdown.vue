<template>
  <div class="search-dropdown" ref="searchRef">
    <div class="search-wrapper">
      <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
      <input 
        v-model="searchQuery"
        type="text" 
        class="search-input" 
        placeholder="Поиск игр, сервисов..."
        @input="handleInput"
        @focus="showResults = true"
      >
      <button 
        v-if="searchQuery" 
        class="search-clear"
        @click="clearSearch"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>

    <transition name="dropdown">
      <div v-if="showResults && searchResults.length > 0" class="search-results">
        <NuxtLink
          v-for="product in searchResults"
          :key="product.slug"
          :to="getProductUrl(product)"
          class="search-result-item"
          @click="closeResults"
        >
          <div class="result-icon" :style="{ background: getGradient(product.slug) }">
            {{ getCategoryIcon(product.category) }}
          </div>
          <div class="result-info">
            <div class="result-name">{{ product.name }}</div>
            <div class="result-category">{{ getCategoryLabel(product.category) }}</div>
          </div>
        </NuxtLink>
      </div>
      <div v-else-if="showResults && searchQuery && searchResults.length === 0" class="search-results">
        <div class="no-results">
          Ничего не найдено
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/products'

const productsStore = useProductsStore()
const router = useRouter()
const searchRef = ref<HTMLElement | null>(null)

const searchQuery = ref('')
const showResults = ref(false)

const searchResults = computed(() => {
  if (!searchQuery.value || searchQuery.value.length < 2) {
    return []
  }

  const query = searchQuery.value.toLowerCase()
  const allProducts = productsStore.allProducts

  return allProducts
    .filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.description?.toLowerCase().includes(query)
    )
    .slice(0, 8) // Максимум 8 результатов
})

const handleInput = () => {
  showResults.value = true
}

const clearSearch = () => {
  searchQuery.value = ''
  showResults.value = false
}

const closeResults = () => {
  showResults.value = false
  searchQuery.value = ''
}

const getProductUrl = (product: Product) => {
  // Для Telegram Stars используем просто /telegram-stars без slug
  if (product.category === 'telegram') {
    return '/telegram-stars'
  }
  return `/${product.category}/${product.slug}`
}

const getCategoryIcon = (category: string) => {
  const icons: Record<string, string> = {
    games: '🎮',
    services: '⚙️',
    telegram: '⭐'
  }
  return icons[category] || '📦'
}

const getCategoryLabel = (category: string) => {
  const labels: Record<string, string> = {
    games: 'Игры',
    services: 'Сервисы',
    telegram: 'Telegram'
  }
  return labels[category] || 'Продукт'
}

const getGradient = (slug: string) => {
  const gradients: Record<string, string> = {
    'steam-wallet': 'linear-gradient(135deg, #1b2838 0%, #2a475e 100%)',
    'playstation': 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)',
    'xbox': 'linear-gradient(135deg, #0F9B0F 0%, #00D084 100%)',
    'spotify': 'linear-gradient(135deg, #1DB954 0%, #1ed760 100%)',
    'netflix': 'linear-gradient(135deg, #E50914 0%, #B20710 100%)',
    'genshin-impact': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'valorant': 'linear-gradient(135deg, #FF4655 0%, #BD3944 100%)',
    'mobile-legends': 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)',
    'pubg-mobile': 'linear-gradient(135deg, #A8E6CF 0%, #3DDC84 100%)',
    'league-of-legends': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'telegram-stars': 'linear-gradient(135deg, #229ED9 0%, #0088cc 100%)'
  }
  return gradients[slug] || 'linear-gradient(135deg, #66c0f4 0%, #5c9dc9 100%)'
}

// Закрытие при клике вне
const handleClickOutside = (event: MouseEvent) => {
  if (searchRef.value && !searchRef.value.contains(event.target as Node)) {
    showResults.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

.search-dropdown {
  position: relative;
  flex: 1;
  max-width: 600px;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    order: 3;
  }
}

.search-wrapper {
  position: relative;
}

.search-input {
  width: 100%;
  padding: 0.75rem 3rem 0.75rem 3rem;
  border: 2px solid $color-bg-accent;
  border-radius: 4px;
  font-size: 1rem;
  background: $color-bg-secondary;
  color: $color-text-light;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: $color-accent-blue;
    background: $color-bg-accent;
    box-shadow: 0 0 0 3px rgba(102, 192, 244, 0.2);
  }

  &::placeholder {
    color: $color-gray;
  }
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: $color-gray;
  width: 20px;
  height: 20px;
}

.search-clear {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: $color-gray;
  width: 20px;
  height: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  &:hover {
    color: $color-text-light;
  }

  svg {
    width: 100%;
    height: 100%;
  }
}

.search-results {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background: $color-bg-secondary;
  border: 2px solid $color-bg-accent;
  border-radius: 4px;
  box-shadow: $shadow-lg;
  z-index: 100;
  max-height: 400px;
  overflow-y: auto;
}

.search-result-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1rem;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  color: $color-text-light;
  border-bottom: 1px solid $color-bg-accent;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: $color-bg-accent;
  }
}

.result-icon {
  width: 40px;
  height: 40px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.result-info {
  flex: 1;
  min-width: 0;
}

.result-name {
  font-weight: 600;
  font-size: 0.9375rem;
  color: $color-text-light;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.result-category {
  font-size: 0.8125rem;
  color: $color-gray;
}

.no-results {
  padding: 2rem;
  text-align: center;
  color: $color-gray;
}

/* Transitions */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

