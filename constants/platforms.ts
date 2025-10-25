import type { Platform } from '~/types/products'

export const PLATFORMS = {
  wata: {
    value: 'wata' as Platform,
    label: 'Wata',
    apiBase: 'https://dg-api.wata.pro/api'
  },
  telegram: {
    value: 'telegram' as Platform,
    label: 'Telegram',
    apiBase: 'https://platapalata-60d041e2b781.herokuapp.com'
  }
} as const

export const getPlatformInfo = (platform: Platform) => {
  return PLATFORMS[platform]
}

