// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Режим рендеринга
  ssr: true,

  compatibilityDate: '2024-11-01',

  // Модули
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    '@nuxtjs/seo',
    '@primevue/nuxt-module'
  ],

  // Автоимпорт компонентов из подпапок
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  // TypeScript
  typescript: {
    strict: true,
    typeCheck: false // Отключено для быстрого старта, включите после установки vue-tsc
  },

  // Nuxt Content настройки
  content: {
    highlight: {
      theme: 'github-dark',
      preload: ['typescript', 'javascript', 'vue']
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    }
  },

  // PrimeVue настройки
  primevue: {
    options: {
      ripple: true,
      inputStyle: 'filled',
      theme: 'none' // Используем custom CSS вместо встроенной темы
    }
  },

  // CSS
  css: [
    'primeicons/primeicons.css',
    '@/assets/scss/primevue-theme.scss',
    '@/assets/scss/main.scss'
  ],

  // Vite настройки для SCSS
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/abstracts/_variables.scss" as *; @use "@/assets/scss/abstracts/_mixins.scss" as *;'
        }
      }
    }
  },

  // SEO настройки
  site: {
    url: 'https://platapalata.com',
    name: 'PlataПалата',
    description: 'Маркетплейс цифровых товаров - игровые ваучеры, пополнения счетов, подарочные карты',
    defaultLocale: 'ru'
  },

  // Дефолтные мета-теги
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'PlataПалата - Цифровые товары и пополнения',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        {
          name: 'description',
          content: 'Покупайте игровые ваучеры и пополняйте счета популярных сервисов. Моментальная доставка, лучшие цены, поддержка 24/7'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Runtime config для API
  runtimeConfig: {
    public: {
      apiBase: 'https://platapalata-60d041e2b781.herokuapp.com',
      siteUrl: 'https://platapalata.com'
    }
  },

  // Оптимизация
  experimental: {
    payloadExtraction: false
  },

  // Route Rules для кэширования
  routeRules: {
    '/': { swr: 3600 },
    '/games/**': { swr: 3600 },
    '/services/**': { swr: 3600 },
    '/blog/**': { swr: 86400 }
  },

  // Nitro настройки для Netlify
  nitro: {
    preset: 'netlify'
  },

  devtools: { enabled: true }
})

