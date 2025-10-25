import type { Product } from '~/types/products'

export const mockProducts: Product[] = [
  // ========================================
  // ИГРЫ
  // ========================================
  {
    platform: 'wata',
    platform_product_id: 1,
    slug: 'genshin-impact',
    name: 'Genshin Impact',
    category: 'games',
    type: 'voucher',
    description: 'Пополнение Genesis Crystals для Genshin Impact. Мгновенная доставка кристаллов на ваш аккаунт.',
    imageUrl: '/images/games/genshin-impact.jpg',
    isOfficial: true,
    popular: true,
    sortOrder: 1,
    denominations: [
      { id: 1, name: '500₽', currency: 'RUB', price: 500, country: null, available: true, count: 100 },
      { id: 2, name: '1000₽', currency: 'RUB', price: 1000, country: null, available: true, count: 100 },
      { id: 3, name: '2000₽', currency: 'RUB', price: 2000, country: null, available: true, count: 50 },
      { id: 4, name: '5000₽', currency: 'RUB', price: 5000, country: null, available: true, count: 20 }
    ],
    fields: [
      { name: 'uid', label: 'UID игрока', type: 'text', placeholder: '123456789', required: true },
      { 
        name: 'server', 
        label: 'Сервер', 
        type: 'select', 
        required: true,
        options: [
          { label: 'Europe', value: 'eu' },
          { label: 'America', value: 'na' },
          { label: 'Asia', value: 'asia' },
          { label: 'TW/HK/MO', value: 'tw' }
        ]
      }
    ],
    servers: {
      eu: 'Europe',
      na: 'America',
      asia: 'Asia',
      tw: 'TW/HK/MO'
    }
  },
  {
    platform: 'wata',
    platform_product_id: 2,
    slug: 'honkai-star-rail',
    name: 'Honkai: Star Rail',
    category: 'games',
    type: 'voucher',
    description: 'Покупка Oneiric Shards для Honkai: Star Rail. Официальные коды, моментальная активация.',
    imageUrl: '/images/games/honkai-star-rail.jpg',
    isOfficial: true,
    popular: true,
    sortOrder: 2,
    denominations: [
      { id: 5, name: '500₽', currency: 'RUB', price: 500, country: null, available: true, count: 100 },
      { id: 6, name: '1000₽', currency: 'RUB', price: 1000, country: null, available: true, count: 100 },
      { id: 7, name: '2000₽', currency: 'RUB', price: 2000, country: null, available: true, count: 50 },
      { id: 8, name: '3000₽', currency: 'RUB', price: 3000, country: null, available: true, count: 30 }
    ],
    fields: [
      { name: 'uid', label: 'UID игрока', type: 'text', placeholder: '123456789', required: true },
      { 
        name: 'server', 
        label: 'Сервер', 
        type: 'select', 
        required: true,
        options: [
          { label: 'Europe', value: 'eu' },
          { label: 'America', value: 'na' },
          { label: 'Asia', value: 'asia' }
        ]
      }
    ],
    servers: {
      eu: 'Europe',
      na: 'America',
      asia: 'Asia'
    }
  },
  {
    platform: 'wata',
    platform_product_id: 3,
    slug: 'league-of-legends',
    name: 'League of Legends',
    category: 'games',
    type: 'voucher',
    description: 'Пополнение Riot Points (RP) для League of Legends. Покупайте скины, чемпионов и другой контент.',
    imageUrl: '/images/games/league-of-legends.jpg',
    isOfficial: true,
    popular: true,
    sortOrder: 3,
    denominations: [
      { id: 9, name: '500₽', currency: 'RUB', price: 500, country: null, available: true, count: 100 },
      { id: 10, name: '1000₽', currency: 'RUB', price: 1000, country: null, available: true, count: 100 },
      { id: 11, name: '2000₽', currency: 'RUB', price: 2000, country: null, available: true, count: 80 },
      { id: 12, name: '5000₽', currency: 'RUB', price: 5000, country: null, available: true, count: 40 }
    ],
    fields: [
      { name: 'username', label: 'Имя игрока', type: 'text', placeholder: 'YourUsername', required: true },
      { 
        name: 'region', 
        label: 'Регион', 
        type: 'select', 
        required: true,
        options: [
          { label: 'EUW', value: 'euw' },
          { label: 'EUNE', value: 'eune' },
          { label: 'NA', value: 'na' },
          { label: 'RU', value: 'ru' }
        ]
      }
    ],
    servers: null
  },
  {
    platform: 'wata',
    platform_product_id: 4,
    slug: 'mobile-legends',
    name: 'Mobile Legends',
    category: 'games',
    type: 'voucher',
    description: 'Пополнение Diamonds для Mobile Legends: Bang Bang. Быстрая доставка алмазов на ваш аккаунт.',
    imageUrl: '/images/games/mobile-legends.jpg',
    isOfficial: true,
    popular: true,
    sortOrder: 4,
    denominations: [
      { id: 13, name: '500₽', currency: 'RUB', price: 500, country: null, available: true, count: 150 },
      { id: 14, name: '1000₽', currency: 'RUB', price: 1000, country: null, available: true, count: 150 },
      { id: 15, name: '1500₽', currency: 'RUB', price: 1500, country: null, available: true, count: 100 },
      { id: 16, name: '3000₽', currency: 'RUB', price: 3000, country: null, available: true, count: 50 }
    ],
    fields: [
      { name: 'user_id', label: 'User ID', type: 'text', placeholder: '123456789', required: true },
      { name: 'zone_id', label: 'Zone ID', type: 'text', placeholder: '1234', required: true }
    ],
    servers: null
  },
  {
    platform: 'wata',
    platform_product_id: 5,
    slug: 'pubg-mobile',
    name: 'PUBG Mobile',
    category: 'games',
    type: 'voucher',
    description: 'Покупка Unknown Cash (UC) для PUBG Mobile. Получайте UC мгновенно для покупки королевских пропусков и скинов.',
    imageUrl: '/images/games/pubg-mobile.jpg',
    isOfficial: true,
    popular: true,
    sortOrder: 5,
    denominations: [
      { id: 17, name: '500₽', currency: 'RUB', price: 500, country: null, available: true, count: 120 },
      { id: 18, name: '1000₽', currency: 'RUB', price: 1000, country: null, available: true, count: 120 },
      { id: 19, name: '2000₽', currency: 'RUB', price: 2000, country: null, available: true, count: 80 },
      { id: 20, name: '5000₽', currency: 'RUB', price: 5000, country: null, available: true, count: 30 }
    ],
    fields: [
      { name: 'player_id', label: 'Player ID', type: 'text', placeholder: '123456789', required: true }
    ],
    servers: null
  },
  {
    platform: 'wata',
    platform_product_id: 6,
    slug: 'valorant',
    name: 'Valorant',
    category: 'games',
    type: 'voucher',
    description: 'Пополнение Valorant Points (VP) для покупки скинов оружия, агентов и боевых пропусков.',
    imageUrl: '/images/games/valorant.jpg',
    isOfficial: true,
    popular: true,
    sortOrder: 6,
    denominations: [
      { id: 21, name: '500₽', currency: 'RUB', price: 500, country: null, available: true, count: 100 },
      { id: 22, name: '1000₽', currency: 'RUB', price: 1000, country: null, available: true, count: 100 },
      { id: 23, name: '2000₽', currency: 'RUB', price: 2000, country: null, available: true, count: 70 },
      { id: 24, name: '5000₽', currency: 'RUB', price: 5000, country: null, available: true, count: 40 }
    ],
    fields: [
      { name: 'riot_id', label: 'Riot ID', type: 'text', placeholder: 'Username#TAG', required: true },
      { 
        name: 'region', 
        label: 'Регион', 
        type: 'select', 
        required: true,
        options: [
          { label: 'Europe', value: 'eu' },
          { label: 'North America', value: 'na' },
          { label: 'Asia Pacific', value: 'ap' }
        ]
      }
    ],
    servers: null
  },

  // ========================================
  // СЕРВИСЫ (ваучеры с номиналами)
  // ========================================
  {
    platform: 'wata',
    platform_product_id: 7,
    slug: 'netflix',
    name: 'Netflix',
    category: 'services',
    type: 'voucher',
    description: 'Подарочные карты Netflix для оплаты подписки. Смотрите любимые фильмы и сериалы без рекламы.',
    imageUrl: '/images/services/netflix.jpg',
    isOfficial: true,
    popular: true,
    sortOrder: 7,
    denominations: [
      { id: 25, name: '1000₽', currency: 'RUB', price: 1000, country: 'RU', available: true, count: 50 },
      { id: 26, name: '2000₽', currency: 'RUB', price: 2000, country: 'RU', available: true, count: 50 },
      { id: 27, name: '3000₽', currency: 'RUB', price: 3000, country: 'RU', available: true, count: 30 },
      { id: 28, name: '5000₽', currency: 'RUB', price: 5000, country: 'RU', available: true, count: 20 }
    ],
    fields: [
      { name: 'email', label: 'Email аккаунта Netflix', type: 'email', placeholder: 'your@email.com', required: true }
    ],
    servers: null
  },
  {
    platform: 'wata',
    platform_product_id: 8,
    slug: 'playstation-store',
    name: 'PlayStation Store',
    category: 'services',
    type: 'voucher',
    description: 'Карты пополнения PlayStation Network для покупки игр, дополнений и подписок PS Plus.',
    imageUrl: '/images/services/playstation.jpg',
    isOfficial: true,
    popular: true,
    sortOrder: 8,
    denominations: [
      { id: 29, name: '1000₽', currency: 'RUB', price: 1000, country: 'RU', available: true, count: 80 },
      { id: 30, name: '2000₽', currency: 'RUB', price: 2000, country: 'RU', available: true, count: 80 },
      { id: 31, name: '3000₽', currency: 'RUB', price: 3000, country: 'RU', available: true, count: 50 },
      { id: 32, name: '5000₽', currency: 'RUB', price: 5000, country: 'RU', available: true, count: 40 }
    ],
    fields: [
      { name: 'psn_id', label: 'PlayStation Network ID', type: 'text', placeholder: 'YourPSNID', required: true }
    ],
    servers: null
  },
  {
    platform: 'wata',
    platform_product_id: 9,
    slug: 'spotify',
    name: 'Spotify Premium',
    category: 'services',
    type: 'voucher',
    description: 'Подарочные карты Spotify для оплаты Premium подписки. Музыка без рекламы и офлайн прослушивание.',
    imageUrl: '/images/services/spotify.jpg',
    isOfficial: true,
    popular: true,
    sortOrder: 9,
    denominations: [
      { id: 33, name: '500₽', currency: 'RUB', price: 500, country: 'RU', available: true, count: 100 },
      { id: 34, name: '1000₽', currency: 'RUB', price: 1000, country: 'RU', available: true, count: 100 },
      { id: 35, name: '2000₽', currency: 'RUB', price: 2000, country: 'RU', available: true, count: 60 },
      { id: 36, name: '3000₽', currency: 'RUB', price: 3000, country: 'RU', available: true, count: 30 }
    ],
    fields: [
      { name: 'email', label: 'Email аккаунта Spotify', type: 'email', placeholder: 'your@email.com', required: true }
    ],
    servers: null
  },
  {
    platform: 'wata',
    platform_product_id: 10,
    slug: 'xbox-game-pass',
    name: 'Xbox Game Pass',
    category: 'services',
    type: 'voucher',
    description: 'Карты оплаты Xbox для подписки Game Pass и покупок в Microsoft Store.',
    imageUrl: '/images/services/xbox.jpg',
    isOfficial: true,
    popular: true,
    sortOrder: 10,
    denominations: [
      { id: 37, name: '1000₽', currency: 'RUB', price: 1000, country: 'RU', available: true, count: 70 },
      { id: 38, name: '2000₽', currency: 'RUB', price: 2000, country: 'RU', available: true, count: 70 },
      { id: 39, name: '3000₽', currency: 'RUB', price: 3000, country: 'RU', available: true, count: 40 },
      { id: 40, name: '5000₽', currency: 'RUB', price: 5000, country: 'RU', available: true, count: 30 }
    ],
    fields: [
      { name: 'gamertag', label: 'Xbox Gamertag', type: 'text', placeholder: 'YourGamertag', required: true }
    ],
    servers: null
  },
  {
    platform: 'wata',
    platform_product_id: 11,
    slug: 'steam-wallet',
    name: 'Steam Wallet',
    category: 'services',
    type: 'steam_topup',
    description: 'Пополнение кошелька Steam на любую сумму. Покупайте игры, DLC и внутриигровые предметы.',
    imageUrl: '/images/services/steam.jpg',
    isOfficial: true,
    popular: true,
    sortOrder: 1,
    denominations: [
      { id: 41, name: '100₽', currency: 'RUB', price: 100, country: 'RU', available: true, count: 1000 },
      { id: 42, name: '500₽', currency: 'RUB', price: 500, country: 'RU', available: true, count: 1000 },
      { id: 43, name: '1000₽', currency: 'RUB', price: 1000, country: 'RU', available: true, count: 1000 },
      { id: 44, name: '2000₽', currency: 'RUB', price: 2000, country: 'RU', available: true, count: 500 },
      { id: 45, name: '5000₽', currency: 'RUB', price: 5000, country: 'RU', available: true, count: 200 }
    ],
    fields: [
      { name: 'steam_account', label: 'Steam аккаунт (ссылка или ID)', type: 'text', placeholder: 'https://steamcommunity.com/id/yourname', required: true }
    ],
    servers: null
  },

  // ========================================
  // TELEGRAM STARS
  // ========================================
  {
    platform: 'telegram',
    platform_product_id: 12,
    slug: 'telegram-stars',
    name: 'Telegram Stars',
    category: 'telegram',
    type: 'voucher',
    description: 'Покупайте звёзды Telegram для доступа к премиум-контенту, поддержки авторов и использования эксклюзивных функций мессенджера.',
    imageUrl: '/images/common/telegram-stars.svg',
    isOfficial: true,
    popular: false,
    sortOrder: 12,
    denominations: [
      { id: 46, name: '100 Stars', currency: 'RUB', price: 100, country: null, available: true, count: 500 },
      { id: 47, name: '500 Stars', currency: 'RUB', price: 500, country: null, available: true, count: 500 },
      { id: 48, name: '1000 Stars', currency: 'RUB', price: 1000, country: null, available: true, count: 300 },
      { id: 49, name: '2500 Stars', currency: 'RUB', price: 2500, country: null, available: true, count: 200 },
      { id: 50, name: '5000 Stars', currency: 'RUB', price: 5000, country: null, available: true, count: 100 }
    ],
    fields: [
      { name: 'telegram_username', label: 'Telegram Username', type: 'text', placeholder: '@username', required: true }
    ],
    servers: null
  }
]

// Вспомогательные функции для работы с моками
export const getProductBySlug = (slug: string): Product | undefined => {
  return mockProducts.find(p => p.slug === slug)
}

export const getProductById = (id: number): Product | undefined => {
  return mockProducts.find(p => p.platform_product_id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return mockProducts
    .filter(p => p.category === category)
    .sort((a, b) => (a.sortOrder || 999) - (b.sortOrder || 999))
}

export const getPopularProducts = (): Product[] => {
  return mockProducts.filter(p => p.popular).sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
}

