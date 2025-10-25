<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Инициализация store при старте приложения
const productsStore = useProductsStore()

onMounted(() => {
  productsStore.fetchProducts()
})
</script>

