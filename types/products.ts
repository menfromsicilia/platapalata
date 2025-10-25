// Платформа
export type Platform = 'wata' | 'telegram'

// Категория продукта
export type ProductCategory = 'games' | 'services' | 'telegram'

// Тип поля формы
export type FormFieldType = 'text' | 'select' | 'email' | 'number'

// Поле формы
export interface FormField {
  name: string
  label: string
  type: FormFieldType
  placeholder?: string
  required?: boolean
  options?: Array<{ label: string; value: string }>
}

// Номинал (деноминация)
export interface Denomination {
  id: number
  name: string
  currency: string
  price: number
  country: string | null
  available: boolean
  count: number | null
}

// Продукт
export interface Product {
  platform: Platform
  platform_product_id: number | null
  slug: string
  name: string
  category: ProductCategory
  type: string
  description: string | null
  imageUrl: string | null
  isOfficial: boolean | null
  popular: boolean | null
  sortOrder: number | null
  denominations: Denomination[]
  fields: FormField[]
  servers: Record<string, string> | null
}

// Ответ со всеми продуктами
export type ProductsResponse = Record<string, Product>

// Ошибка валидации
export interface ValidationError {
  detail: Array<{
    loc: (string | number)[]
    msg: string
    type: string
  }>
}

// Запрос на создание заказа
export interface CreateOrderRequest {
  voucherId: number
  amount: number
  count: number
  orderId: string
  email: string
  description: string
  successRedirectUrl?: string
  failRedirectUrl?: string
  fields?: Record<string, string>
}

// Ответ на создание заказа
export interface CreateOrderResponse {
  orderId: string
  amount: number
  price: number
  codeId: number
  count: number
  email: string
  paymentLink: string
  successRedirectUrl?: string
  failRedirectUrl?: string
}

// Статус заказа
export type OrderStatus = 'Pending' | 'Success' | 'Fail'

// Информация о заказе
export interface OrderInfo {
  orderId: string
  amount: number
  status: OrderStatus
  codeId: number
  count: number
  vouchers: string[]
  description: string | null
  creationTime: string
  successRedirectUrl?: string
  failRedirectUrl?: string
}

// Steam расчёт стоимости
export interface SteamCostRequest {
  net_amount: number
  account: string
}

export interface SteamCostResponse {
  netAmount: number
  totalAmount: number
  commission: number
  account: string
}

