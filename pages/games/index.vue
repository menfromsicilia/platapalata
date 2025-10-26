<template>
  <div class="catalog-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <Breadcrumbs :items="breadcrumbItems" />

      <h1 class="page-title">Игры</h1>
      
      <!-- Products Grid -->
      <div v-if="filteredProducts.length === 0" class="empty-state">
        <p>Продукты не найдены</p>
      </div>

      <div v-else class="products-grid">
        <ProductCard 
          v-for="product in filteredProducts" 
          :key="product.slug" 
          :product="product"
          :show-description="false"
        />
      </div>

      <!-- FAQ Section -->
      <div class="faq-wrapper">
        <ProductFAQ />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const productsStore = useProductsStore()

const filteredProducts = computed(() => {
  return productsStore.getProductsByCategory('games')
})

// Breadcrumbs
const breadcrumbItems = [
  { label: 'Главная', path: '/' },
  { label: 'Игры', path: '' }
]

// SEO with Open Graph
useCategorySeo('games')
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

.catalog-page {
  min-height: 100vh;
  background: $color-bg-primary;
  padding: 2rem 0;
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

.faq-wrapper {
  margin-top: 3rem;
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
