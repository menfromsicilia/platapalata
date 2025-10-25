<template>
  <div class="home-page">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Popular Products Carousel -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Популярные товары</h2>
          <NuxtLink to="/catalog" class="section-link">
            Смотреть все
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
        </div>
        <ProductCarousel v-if="popularProducts" :products="popularProducts" />
      </div>
    </section>

    <!-- Category Navigation -->
    <CategoryNav />

    <!-- Games Preview -->
    <section class="section" id="games">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Игры</h2>
          <NuxtLink to="/games" class="section-link">
            Смотреть все
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
        </div>
        <div class="product-grid">
          <ProductCard
            v-for="(product, index) in gamesPreview"
            :key="product.slug"
            :product="product"
            :show-description="false"
            :loading="index < 3 ? 'eager' : 'lazy'"
          />
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="section" id="services">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Сервисы</h2>
          <NuxtLink to="/services" class="section-link">
            Смотреть все
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
        </div>
        <div class="product-grid">
          <ProductCard
            v-for="(product, index) in servicesPreview"
            :key="product.slug"
            :product="product"
            :show-description="false"
            :loading="index < 3 ? 'eager' : 'lazy'"
          />
        </div>
      </div>
    </section>

    <!-- Telegram Stars Banner -->
    <TelegramBanner />

    <!-- Blog Preview -->
    <section class="section" id="blog">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Блог</h2>
          <NuxtLink to="/blog" class="section-link">
            Все статьи
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
        </div>
        <div class="product-grid">
          <BlogCard
            v-for="post in blogPosts"
            :key="post._path"
            :post="{
              slug: post._path?.split('/').pop() || '',
              title: post.title,
              excerpt: post.description,
              date: post.date,
              image: post.image
            }"
          />
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <FAQSection />
  </div>
</template>

<script setup lang="ts">
const productsStore = useProductsStore()

// Популярные продукты
const popularProducts = computed(() => productsStore.popularProducts)

// Превью игр (первые 5)
const gamesPreview = computed(() => {
  return productsStore.gameProducts.slice(0, 5)
})

// Превью сервисов (первые 4)
const servicesPreview = computed(() => {
  return productsStore.serviceProducts.slice(0, 4)
})

// Параллельная загрузка данных для оптимизации
const [{ data: blogPosts }] = await Promise.all([
  useAsyncData('blog-preview', () =>
    queryContent('/blog')
      .sort({ date: -1 })
      .limit(3)
      .find()
  ),
  productsStore.fetchProducts()
])

// SEO
useHead({
  title: 'PlataПалата - Быстрое пополнение игровых аккаунтов',
  meta: [
    {
      name: 'description',
      content: 'Мгновенное пополнение Steam, Epic Games, PlayStation, Xbox и других популярных платформ. Безопасно, быстро и с гарантией возврата.'
    }
  ]
})
</script>

<style lang="scss" scoped>
.home-page {
  // Стили страницы
}
</style>
