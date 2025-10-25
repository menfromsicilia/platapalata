import type { Product } from '~/types/products'
import { mockProducts } from '~/data/mock-products'

// Получение всех продуктов
export const useProducts = () => {
  const productsStore = useProductsStore()

  return useAsyncData(
    'products',
    async () => {
      // TODO: Заменить на реальный API запрос когда будет готов бэкенд
      // const config = useRuntimeConfig()
      // return await $fetch<Product[]>(`${config.public.apiBase}/products/`)
      
      // Пока используем мокап данные
      await new Promise(resolve => setTimeout(resolve, 100)) // Эмуляция загрузки
      return mockProducts
    },
    {
      // Кэширование на клиенте
      getCachedData: (key) => {
        const data = useNuxtData(key).data.value
        return data || productsStore.allProducts
      }
    }
  )
}

// Получение популярных продуктов
export const usePopularProducts = () => {
  return useAsyncData(
    'popular-products',
    async () => {
      const { getPopularProducts } = await import('~/data/mock-products')
      await new Promise(resolve => setTimeout(resolve, 100))
      return getPopularProducts()
    },
    {
      getCachedData: (key) => {
        return useNuxtData(key).data.value
      }
    }
  )
}

