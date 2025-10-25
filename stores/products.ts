import { defineStore } from 'pinia'
import type { Product, ProductCategory } from '~/types/products'
import { mockProducts, getProductBySlug, getProductById, getProductsByCategory, getPopularProducts } from '~/data/mock-products'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: mockProducts as Product[],
    loading: false,
    error: null as Error | null,
    selectedCategory: null as ProductCategory | null,
    searchQuery: ''
  }),

  getters: {
    // Все продукты
    allProducts: (state): Product[] => state.products,

    // Популярные продукты
    popularProducts(): Product[] {
      return getPopularProducts()
    },

    // Продукты по категориям
    gameProducts(): Product[] {
      return getProductsByCategory('games')
    },

    serviceProducts(): Product[] {
      return getProductsByCategory('services')
    },

    telegramProducts(): Product[] {
      return getProductsByCategory('telegram')
    },

    // Фильтрованные продукты
    filteredProducts(): Product[] {
      let filtered = this.products

      // Фильтр по категории
      if (this.selectedCategory) {
        filtered = filtered.filter((p) => p.category === this.selectedCategory)
      }

      // Фильтр по поиску
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(
          (p) =>
            p.name.toLowerCase().includes(query) ||
            p.description?.toLowerCase().includes(query)
        )
      }

      return filtered
    }
  },

  actions: {
    // Загрузка продуктов (пока с мокапом, потом заменим на API)
    async fetchProducts() {
      if (this.products.length > 0) {
        return // Уже загружены
      }

      this.loading = true
      this.error = null

      try {
        // TODO: Заменить на реальный API запрос
        // const config = useRuntimeConfig()
        // const data = await $fetch<ProductsResponse>(`${config.public.apiBase}/products/`)
        
        // Эмуляция загрузки
        await new Promise(resolve => setTimeout(resolve, 100))
        this.products = mockProducts
      }
      catch (err) {
        this.error = err as Error
        console.error('Failed to fetch products:', err)
      }
      finally {
        this.loading = false
      }
    },

    // Загрузка конкретного продукта
    async fetchProduct(id: number) {
      this.loading = true
      this.error = null

      try {
        // TODO: Заменить на реальный API запрос
        // const config = useRuntimeConfig()
        // const data = await $fetch<Product>(`${config.public.apiBase}/products/${id}`)
        
        const product = getProductById(id)
        if (!product) {
          throw new Error('Product not found')
        }
        return product
      }
      catch (err) {
        this.error = err as Error
        console.error('Failed to fetch product:', err)
        throw err
      }
      finally {
        this.loading = false
      }
    },

    // Установить категорию
    setCategory(category: ProductCategory | null) {
      this.selectedCategory = category
    },

    // Установить поисковой запрос
    setSearchQuery(query: string) {
      this.searchQuery = query
    },

    // Очистить фильтры
    clearFilters() {
      this.selectedCategory = null
      this.searchQuery = ''
    },

    // Получить продукт по slug
    getBySlug(slug: string): Product | undefined {
      return getProductBySlug(slug)
    },

    // Получить продукт по ID
    getById(id: number): Product | undefined {
      return getProductById(id)
    },

    // Получить продукты по категории
    getProductsByCategory(category: string): Product[] {
      return getProductsByCategory(category)
    }
  }
})

