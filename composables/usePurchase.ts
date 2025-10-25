import type { CreateOrderRequest, CreateOrderResponse } from '~/types/products'

export const usePurchase = () => {
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const createOrder = async (orderData: CreateOrderRequest): Promise<CreateOrderResponse | null> => {
    loading.value = true
    error.value = null

    try {
      // TODO: Заменить на реальный API запрос к Wata API
      // const config = useRuntimeConfig()
      // const response = await $fetch<CreateOrderResponse>(`${config.public.apiBase}/vouchers`, {
      //   method: 'POST',
      //   body: orderData,
      //   headers: {
      //     'Authorization': `Bearer ${config.public.wataToken}`,
      //     'Content-Type': 'application/json'
      //   }
      // })

      // Мокап ответа
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Эмуляция успешного создания заказа
      const mockResponse: CreateOrderResponse = {
        orderId: orderData.orderId,
        amount: orderData.amount,
        price: orderData.amount * 0.95, // Эмуляция скидки
        codeId: orderData.voucherId,
        count: orderData.count,
        email: orderData.email,
        paymentLink: `https://payment.platapalata.com/pay/${orderData.orderId}`, // Мокап ссылки
        successRedirectUrl: orderData.successRedirectUrl,
        failRedirectUrl: orderData.failRedirectUrl
      }

      return mockResponse
    }
    catch (err) {
      error.value = err as Error
      console.error('Failed to create order:', err)
      return null
    }
    finally {
      loading.value = false
    }
  }

  const redirectToPayment = (paymentLink: string) => {
    // Редирект на платёжную страницу
    window.location.href = paymentLink
  }

  return {
    loading: readonly(loading),
    error: readonly(error),
    createOrder,
    redirectToPayment
  }
}

