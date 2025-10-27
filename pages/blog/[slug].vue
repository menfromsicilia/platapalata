<template>
  <div class="blog-post-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <Breadcrumbs :items="breadcrumbItems" />

      <article v-if="post" class="blog-post">
        <header class="blog-post-header">
          <h1 class="blog-post-title">{{ post.title }}</h1>
          <div class="blog-post-meta">
            <span class="blog-post-date">{{ formatBlogDate(post.date) }}</span>
          </div>
          <div v-if="post.tags && post.tags.length" class="blog-post-tags">
            <Tag v-for="tag in post.tags" :key="tag" :value="tag" severity="info" />
          </div>
        </header>

        <div v-if="post.image" class="blog-post-image">
          <img :src="post.image" :alt="post.title">
        </div>

        <div class="blog-post-content">
          <ContentRenderer :value="post" />
        </div>

        <footer class="blog-post-footer">
          <NuxtLink to="/blog" class="back-link">
            <i class="pi pi-arrow-left" />
            Вернуться к статьям
          </NuxtLink>
        </footer>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tag from 'primevue/tag'
import { formatBlogDate } from '~/utils/formatters'

const route = useRoute()
const slug = route.params.slug as string

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryContent(`/blog/${slug}`).findOne()
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    message: 'Post not found'
  })
}

// Breadcrumbs
const breadcrumbItems = computed(() => [
  { label: 'Главная', path: '/' },
  { label: 'Блог', path: '/blog' },
  { label: post.value?.title || '', path: '' }
])

// SEO with Open Graph
const config = useRuntimeConfig()
const fullUrl = `${config.public.siteUrl}${route.path}`

useSeoMeta({
  title: `${post.value?.title} - Блог PlataПалата`,
  description: post.value?.description || '',
  ogTitle: post.value?.title || '',
  ogDescription: post.value?.description || '',
  ogImage: post.value?.image ? `${config.public.siteUrl}${post.value.image}` : `${config.public.siteUrl}/images/blog/top-games.jpg`,
  ogUrl: fullUrl,
  ogType: 'article',
  twitterCard: 'summary_large_image',
  articlePublishedTime: post.value?.date || ''
})

useHead({
  link: [{ rel: 'canonical', href: fullUrl }]
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;
@use '~/assets/scss/abstracts/mixins' as *;

.blog-post-page {
  padding: 0;

  @include desktop {
    padding: 0;
  }
}

/* Breadcrumbs */
.blog-post {
  max-width: 800px;
  margin: 0 auto;
}

.blog-post-header {
  margin-bottom: $spacing-xl;
}

.blog-post-title {
  font-size: 2rem;
  font-weight: $font-weight-extrabold;
  color: $color-text-light;
  line-height: 1.2;
  margin-bottom: $spacing-md;

  @include desktop {
    font-size: 3rem;
  }
}

.blog-post-meta {
  display: flex;
  gap: $spacing-lg;
  color: $color-gray;
  font-size: 0.9375rem;
  margin-bottom: $spacing-md;
}

.blog-post-tags {
  display: flex;
  gap: $spacing-sm;
  flex-wrap: wrap;
}

.blog-post-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: $radius-md;
  overflow: hidden;
  margin-bottom: $spacing-xl;
  background: $color-bg-accent;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.blog-post-content {
  color: $color-text-light;
  font-size: 1.0625rem;
  line-height: 1.8;

  :deep(h2) {
    margin-top: $spacing-2xl;
    margin-bottom: $spacing-md;
  }

  :deep(h3) {
    margin-top: $spacing-xl;
    margin-bottom: $spacing-sm;
  }

  :deep(p) {
    margin-bottom: $spacing-lg;
  }

  :deep(ul),
  :deep(ol) {
    margin-bottom: $spacing-lg;
    padding-left: $spacing-xl;
  }

  :deep(li) {
    margin-bottom: $spacing-sm;
  }

  :deep(a) {
    color: $color-accent-blue;
    text-decoration: underline;

    &:hover {
      color: $color-accent-blue-secondary;
    }
  }

  :deep(code) {
    background: $color-bg-accent;
    padding: 2px 6px;
    border-radius: $radius-sm;
    font-size: 0.9em;
  }

  :deep(pre) {
    background: $color-bg-accent;
    padding: $spacing-md;
    border-radius: $radius-sm;
    overflow-x: auto;
    margin-bottom: $spacing-lg;
  }
}

.blog-post-footer {
  margin-top: $spacing-3xl;
  padding-top: $spacing-xl;
  border-top: 1px solid $color-bg-accent;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: $spacing-sm;
  color: $color-accent-blue;
  text-decoration: none;
  font-weight: $font-weight-medium;
  transition: color $transition-fast;

  &:hover {
    color: $color-accent-blue-secondary;
  }
}
</style>

