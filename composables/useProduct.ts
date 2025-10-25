import type { Product } from '~/types/products'
import { getProductById, getProductBySlug } from '~/data/mock-products'

// Получение продукта по ID (для API запросов)
export const useProduct = (productId: number | Ref<number>) => {
  const id = toRef(productId)

  return useAsyncData(
    `product-${id.value}`,
    async () => {
      // TODO: Заменить на реальный API запрос
      // const config = useRuntimeConfig()
      // return await $fetch<Product>(`${config.public.apiBase}/products/${id.value}`)
      
      // Пока используем мокап данные
      await new Promise(resolve => setTimeout(resolve, 100))
      const product = getProductById(id.value)
      
      if (!product) {
        throw createError({
          statusCode: 404,
          message: 'Product not found'
        })
      }
      
      return product
    },
    {
      getCachedData: (key) => {
        return useNuxtData(key).data.value
      },
      watch: [id]
    }
  )
}

// Получение продукта по slug (для роутинга)
export const useProductBySlug = (slug: string | Ref<string>) => {
  const productSlug = toRef(slug)

  return useAsyncData(
    `product-slug-${productSlug.value}`,
    async () => {
      await new Promise(resolve => setTimeout(resolve, 100))
      const product = getProductBySlug(productSlug.value)
      
      if (!product) {
        throw createError({
          statusCode: 404,
          message: 'Product not found'
        })
      }
      
      return product
    },
    {
      getCachedData: (key) => {
        return useNuxtData(key).data.value
      },
      watch: [productSlug]
    }
  )
}

