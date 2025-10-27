import type { Product } from '~/types/products'

interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogTitle: string
  ogDescription: string
  ogImage: string
}

// Генерация SEO данных для продукта
export const generateProductSEO = (product: Product): SEOData => {
  const minPrice = Math.min(...product.denominations.map(d => d.price))

  // Title: "Roblox Gift Card - от 100₽"
  const title = `${product.name} - от ${minPrice}₽`

  // Description с обогащением
  const categoryText = product.category === 'games' ? 'игровой ваучер' : 'подписка на сервис'
  const platformText = product.platform === 'wata' ? 'Wata' : 'Telegram'

  const description = product.description
    ? `${product.description} Купить ${product.name} от ${minPrice}₽. ${
        categoryText.charAt(0).toUpperCase() + categoryText.slice(1)
      } на платформе ${platformText}. Быстрая доставка, официальные коды.`
    : `Купить ${product.name} от ${minPrice}₽. ${
        categoryText.charAt(0).toUpperCase() + categoryText.slice(1)
      } на платформе ${platformText}. Быстрая доставка, официальные коды, моментальная активация.`

  // Keywords
  const keywords = [product.name, `купить ${product.name}`, categoryText, product.type, platformText]

  if (product.isOfficial) keywords.push('официальный')

  return {
    title,
    description: description.slice(0, 160),
    keywords,
    ogTitle: title,
    ogDescription: description.slice(0, 200),
    ogImage: product.imageUrl || '/images/common/telegram-stars.svg'
  }
}

// Composable для использования SEO продукта
export const useProductSeo = (product: Product) => {
  const config = useRuntimeConfig()
  const route = useRoute()
  const seoData = generateProductSEO(product)
  const fullUrl = `${config.public.siteUrl}${route.path}`

  useSeoMeta({
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords.join(', '),
    ogTitle: seoData.ogTitle,
    ogDescription: seoData.ogDescription,
    ogImage: seoData.ogImage ? `${config.public.siteUrl}${seoData.ogImage}` : `${config.public.siteUrl}/logo.png`,
    ogUrl: fullUrl,
    ogType: 'product',
    twitterCard: 'summary_large_image',
    twitterTitle: seoData.ogTitle,
    twitterDescription: seoData.ogDescription,
    twitterImage: seoData.ogImage ? `${config.public.siteUrl}${seoData.ogImage}` : `${config.public.siteUrl}/logo.png`
  })

  // Product Schema (JSON-LD)
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.description,
          image: product.imageUrl,
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'RUB',
            lowPrice: Math.min(...product.denominations.map(d => d.price)),
            highPrice: Math.max(...product.denominations.map(d => d.price)),
            availability: product.denominations.some(d => d.available)
              ? 'https://schema.org/InStock'
              : 'https://schema.org/OutOfStock'
          }
        })
      }
    ],
    link: [{ rel: 'canonical', href: fullUrl }]
  })
}

// SEO для категорий
export const generateCategorySEO = (category: 'games' | 'services' | 'telegram'): SEOData => {
  const categoryData: Record<string, SEOData> = {
    games: {
      title: 'Игровые ваучеры и подарочные карты',
      description:
        'Купить игровые ваучеры для популярных игр. Genshin Impact, Valorant, League of Legends и другие. Быстрая доставка, официальные коды.',
      keywords: ['игровые ваучеры', 'game cards', 'подарочные карты для игр', 'купить ваучер'],
      ogTitle: 'Игры - PlataПалата',
      ogDescription: 'Каталог игровых ваучеров',
      ogImage: '/logo.png'
    },
    services: {
      title: 'Подписки и сервисы',
      description:
        'Купить подписки на популярные сервисы. Netflix, Spotify, PlayStation, Xbox и другие. Выгодные цены, моментальная активация.',
      keywords: ['подписки', 'сервисы', 'премиум подписки', 'купить подписку'],
      ogTitle: 'Сервисы - PlataПалата',
      ogDescription: 'Каталог подписок и сервисов',
      ogImage: '/logo.png'
    },
    telegram: {
      title: 'Telegram Stars - Купить звёзды Telegram',
      description:
        'Купить Telegram Stars для доступа к премиум-контенту и поддержки авторов. Быстрая доставка, выгодные цены.',
      keywords: ['telegram stars', 'звёзды telegram', 'купить telegram stars'],
      ogTitle: 'Telegram Stars - PlataПалата',
      ogDescription: 'Купить звёзды Telegram',
      ogImage: '/logo.png'
    }
  }

  return categoryData[category]
}

// Composable для категорий
export const useCategorySeo = (category: 'games' | 'services' | 'telegram') => {
  const config = useRuntimeConfig()
  const route = useRoute()
  const seoData = generateCategorySEO(category)
  const fullUrl = `${config.public.siteUrl}${route.path}`

  useSeoMeta({
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords.join(', '),
    ogTitle: seoData.ogTitle,
    ogDescription: seoData.ogDescription,
    ogImage: `${config.public.siteUrl}${seoData.ogImage}`,
    ogUrl: fullUrl,
    ogType: 'website',
    twitterCard: 'summary_large_image'
  })

  // Breadcrumb Schema
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Главная',
              item: config.public.siteUrl
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: seoData.ogTitle,
              item: fullUrl
            }
          ]
        })
      }
    ],
    link: [{ rel: 'canonical', href: fullUrl }]
  })
}

