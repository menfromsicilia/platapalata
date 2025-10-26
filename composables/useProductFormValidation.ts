export const useProductFormValidation = () => {
  /**
   * Валидация email
   */
  const validateEmail = (email: string): { isValid: boolean; error: string } => {
    if (!email) {
      return { isValid: false, error: 'Email обязателен' }
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { isValid: false, error: 'Введите корректный email' }
    }
    
    return { isValid: true, error: '' }
  }

  /**
   * Валидация Telegram username
   */
  const validateUsername = (username: string): { isValid: boolean; error: string } => {
    if (!username) {
      return { isValid: false, error: 'Telegram никнейм обязателен' }
    }
    
    if (username.length < 5) {
      return { isValid: false, error: 'Никнейм должен быть не менее 5 символов' }
    }
    
    // Проверка что никнейм содержит только латинские буквы, цифры и подчеркивания
    const usernameRegex = /^[a-zA-Z0-9_]+$/
    if (!usernameRegex.test(username)) {
      return { isValid: false, error: 'Никнейм может содержать только латинские буквы, цифры и подчеркивания' }
    }
    
    return { isValid: true, error: '' }
  }

  /**
   * Валидация обязательного поля
   */
  const validateRequired = (value: string, fieldName: string): { isValid: boolean; error: string } => {
    if (!value) {
      return { isValid: false, error: `${fieldName} обязателен` }
    }
    
    return { isValid: true, error: '' }
  }

  /**
   * Валидация суммы с минимальным и максимальным значением
   */
  const validateAmount = (
    amount: number | null, 
    min: number, 
    max: number
  ): { isValid: boolean; error: string } => {
    if (!amount) {
      return { isValid: false, error: 'Введите сумму пополнения' }
    }
    
    if (amount < min) {
      return { isValid: false, error: `Минимальная сумма ${min}₽` }
    }
    
    if (amount > max) {
      return { isValid: false, error: `Максимальная сумма ${max}₽` }
    }
    
    return { isValid: true, error: '' }
  }

  return {
    validateEmail,
    validateUsername,
    validateRequired,
    validateAmount
  }
}

