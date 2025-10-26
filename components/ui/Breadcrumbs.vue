<template>
  <nav class="breadcrumbs">
    <NuxtLink 
      v-for="(item, index) in items" 
      :key="index"
      :to="item.path"
      :class="{ 'current': index === items.length - 1 }"
    >
      {{ item.label }}
      <span v-if="index < items.length - 1" class="separator">→</span>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  path: string
}

interface Props {
  items: BreadcrumbItem[]
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/variables' as *;

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
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: $color-accent-blue-secondary;
    }

    &.current {
      color: $color-text-light;
      font-weight: 500;
      pointer-events: none;
    }
  }

  .separator {
    color: $color-gray;
  }
}
</style>

