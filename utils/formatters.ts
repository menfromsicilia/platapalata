// Форматирование цены
export const formatPrice = (price: number, currency: string = 'RUB'): string => {
  if (currency === 'RUB') {
    return `${price.toLocaleString('ru-RU')}₽`
  }
  return `${price.toLocaleString('ru-RU')} ${currency}`
}

// Форматирование даты
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Форматирование даты для блога (короткий формат)
export const formatBlogDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

// Обрезка текста
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

// Форматирование номера заказа
export const formatOrderId = (): string => {
  const timestamp = Date.now()
  const random = Math.floor(Math.random() * 1000)
  return `${timestamp}${random}`
}

