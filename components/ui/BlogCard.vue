<template>
  <NuxtLink :to="`/blog/${post.slug}`" class="blog-card">
    <div class="blog-card-image" :style="getImageStyle"></div>
    <div class="blog-card-content">
      <h3 class="blog-card-title">{{ post.title }}</h3>
      <p class="blog-card-excerpt">{{ post.excerpt }}</p>
      <div class="blog-card-meta">{{ formattedDate }}</div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  post: {
    slug: string
    title: string
    excerpt: string
    date: string
    image?: string
  }
}

const props = defineProps<Props>()

const formattedDate = computed(() => {
  const date = new Date(props.post.date)
  return date.toLocaleDateString('ru-RU', { 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  })
})

const getImageStyle = computed(() => {
  if (props.post.image) {
    return { backgroundImage: `url(${props.post.image})` }
  }
  
  // Дефолтные градиенты для разных постов
  const gradients = [
    'linear-gradient(135deg, #66c0f4 0%, #5c9dc9 100%)',
    'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
    'linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 90%)'
  ]
  
  const index = props.post.slug.length % gradients.length
  return { background: gradients[index] }
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

/* Blog Cards - точная копия из оригинала */
.blog-card {
  display: block;
  background: $color-bg-secondary;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  border: 1px solid $color-bg-accent;
  text-decoration: none;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-lg;
  }
}

.blog-card-image {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, $color-accent-blue 0%, $color-accent-blue-secondary 100%);
  background-size: cover;
  background-position: center;
}

.blog-card-content {
  padding: 1.5rem;
}

.blog-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: $color-text-light;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.blog-card-excerpt {
  font-size: 0.9375rem;
  color: $color-gray;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.blog-card-meta {
  font-size: 0.875rem;
  color: $color-gray;
}
</style>
