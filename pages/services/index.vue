<template>
  <div class="catalog-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs">
        <NuxtLink to="/">Главная</NuxtLink>
        <span>→</span>
        <span>Сервисы</span>
      </nav>

      <h1 class="page-title">Сервисы</h1>
      
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
    </div>
  </div>
</template>

<script setup lang="ts">
const productsStore = useProductsStore()

const filteredProducts = computed(() => {
  return productsStore.getProductsByCategory('services')
})

// SEO
useHead({
  title: 'Сервисы - PlataПалата',
  meta: [
    {
      name: 'description',
      content: 'Подписки и сервисы для стриминга, игр и развлечений'
    }
  ]
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

.catalog-page {
  min-height: 100vh;
  background: $color-bg-primary;
  padding: 2rem 0;
}

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
