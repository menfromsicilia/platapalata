// Валидация email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Валидация Steam аккаунта
export const isValidSteamAccount = (account: string): boolean => {
  // Может быть URL или Steam ID
  const steamUrlRegex = /^https?:\/\/(steamcommunity\.com\/(id|profiles)\/[a-zA-Z0-9_-]+|[0-9]{17})$/
  const steamIdRegex = /^[0-9]{17}$/
  
  return steamUrlRegex.test(account) || steamIdRegex.test(account)
}

// Валидация Telegram username
export const isValidTelegramUsername = (username: string): boolean => {
  // Должен начинаться с @ и содержать только буквы, цифры и подчеркивания
  const telegramRegex = /^@[a-zA-Z0-9_]{5,32}$/
  return telegramRegex.test(username)
}

// Валидация номера (для игровых ID)
export const isValidNumericId = (id: string): boolean => {
  return /^[0-9]+$/.test(id) && id.length > 0
}

// Валидация суммы
export const isValidAmount = (amount: number, min: number = 100, max: number = 50000): boolean => {
  return amount >= min && amount <= max
}

// Общая валидация формы
export const validateFormField = (value: string, fieldType: string): { valid: boolean; error?: string } => {
  if (!value || value.trim() === '') {
    return { valid: false, error: 'Поле обязательно для заполнения' }
  }

  switch (fieldType) {
    case 'email':
      if (!isValidEmail(value)) {
        return { valid: false, error: 'Некорректный email адрес' }
      }
      break
    case 'number':
      if (!isValidNumericId(value)) {
        return { valid: false, error: 'Должен содержать только цифры' }
      }
      break
    default:
      if (value.length < 3) {
        return { valid: false, error: 'Минимум 3 символа' }
      }
  }

  return { valid: true }
}

