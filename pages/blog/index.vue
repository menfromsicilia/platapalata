<template>
  <div class="blog-page">
    <div class="container">
      <div class="blog-header">
        <h1 class="blog-title">Блог</h1>
        <p class="blog-description">
          Полезные статьи о пополнении счетов, играх и сервисах
        </p>
      </div>

      <div v-if="posts && posts.length > 0" class="blog-grid">
        <BlogCard v-for="post in posts" :key="post._path" :post="post" />
      </div>

      <div v-else class="empty-state">
        <i class="pi pi-book empty-icon" />
        <p>Статьи скоро появятся</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryContent('/blog')
    .sort({ date: -1 })
    .find()
)

// SEO
useHead({
  title: 'Блог - PlataПалата',
  meta: [
    {
      name: 'description',
      content: 'Полезные статьи о пополнении игровых счетов, покупке ваучеров и подписок на популярные сервисы'
    }
  ]
})
</script>

<style lang="scss" scoped>
.blog-page {
  padding: $spacing-xl 0;

  @include desktop {
    padding: $spacing-2xl 0;
  }
}

.blog-header {
  text-align: center;
  margin-bottom: $spacing-2xl;

  @include desktop {
    margin-bottom: $spacing-3xl;
  }
}

.blog-title {
  font-size: 2rem;
  font-weight: $font-weight-bold;
  color: $color-text-light;
  margin-bottom: $spacing-md;

  @include desktop {
    font-size: 3rem;
  }
}

.blog-description {
  font-size: 1rem;
  color: $color-gray;

  @include desktop {
    font-size: 1.125rem;
  }
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: $spacing-3xl 0;
  color: $color-gray;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: $spacing-lg;
  opacity: 0.5;
}
</style>

