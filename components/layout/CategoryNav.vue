<template>
  <nav class="category-nav">
    <div class="container">
      <ul>
        <li>
          <NuxtLink to="/games" :class="{ active: route.path.includes('/games') }">
            Игры
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/services" :class="{ active: route.path.includes('/services') }">
            Сервисы
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/telegram-stars" :class="{ active: route.path.includes('/telegram-stars') }">
            Telegram Stars
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" :class="{ active: route.path.includes('/blog') }">
            Блог
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

/* Category Nav - sticky при скролле */
.category-nav {
  border-bottom: 1px solid $color-bg-accent;
  background: $color-bg-dark;
  box-shadow: $shadow-sm;
  position: sticky;
  top: 73px;
  z-index: 40;
}

ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 0;
  margin: 0;
}

a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  color: $color-text-light;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s;
  white-space: nowrap;
  font-weight: 500;
  background: transparent;

  &:hover {
    background: $color-bg-accent;
    color: $color-accent-blue;
  }

  &.active {
    background: $color-accent-blue;
    color: $color-bg-primary;
    font-weight: 600;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .category-nav {
    top: 120px; // Увеличенная высота из-за wrap в header
  }

  ul {
    gap: 1rem;
  }

  a {
    padding: 0.75rem 1rem;
  }
}
</style>
