import type { ProductCategory } from '~/types/products'

export const CATEGORIES = {
  games: {
    value: 'games' as ProductCategory,
    label: 'Игры',
    icon: 'pi pi-discord',
    description: 'Игровые ваучеры и пополнения'
  },
  services: {
    value: 'services' as ProductCategory,
    label: 'Сервисы',
    icon: 'pi pi-cog',
    description: 'Подписки и сервисы'
  },
  telegram: {
    value: 'telegram' as ProductCategory,
    label: 'Telegram Stars',
    icon: 'pi pi-telegram',
    description: 'Звёзды Telegram'
  }
} as const

export const getCategoryInfo = (category: ProductCategory) => {
  return CATEGORIES[category]
}

