<template>
  <div class="catalog-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <Breadcrumbs :items="breadcrumbItems" />

      <h1 class="page-title">Все товары</h1>
      
      <!-- Products Grid -->
      <div v-if="allProducts.length === 0" class="empty-state">
        <p>Продукты не найдены</p>
      </div>

      <div v-else class="products-grid">
        <ProductCard 
          v-for="product in allProducts" 
          :key="product.slug" 
          :product="product"
          :show-description="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const productsStore = useProductsStore()

// Breadcrumbs
const breadcrumbItems = [
  { label: 'Главная', path: '/' },
  { label: 'Все товары', path: '' }
]

const allProducts = computed(() => {
  // Возвращаем все продукты (игры + сервисы + telegram)
  return productsStore.allProducts
})

// SEO with Open Graph
const config = useRuntimeConfig()
const route = useRoute()
const fullUrl = `${config.public.siteUrl}${route.path}`

useSeoMeta({
  title: 'Все товары - PlataПалата',
  description: 'Полный каталог игровых ваучеров, подписок и сервисов. Genshin Impact, Netflix, Spotify, Steam и другие. Быстрая доставка, выгодные цены.',
  keywords: 'каталог товаров, игровые ваучеры, подписки, сервисы, купить',
  ogTitle: 'Все товары - PlataПалата',
  ogDescription: 'Полный каталог игровых ваучеров, подписок и сервисов',
  ogImage: `${config.public.siteUrl}/logo.png`,
  ogUrl: fullUrl,
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [{ rel: 'canonical', href: fullUrl }]
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

.catalog-page {
  min-height: 100vh;
  background: $color-bg-primary;
  padding: 0;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: $color-text-light;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: $color-gray;
  font-size: 1.125rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
  }
}
</style>

