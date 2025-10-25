import type { SteamCostRequest, SteamCostResponse } from '~/types/products'

export const useSteamCalculator = () => {
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const calculateCost = async (netAmount: number, account: string): Promise<SteamCostResponse | null> => {
    loading.value = true
    error.value = null

    try {
      // TODO: Заменить на реальный API запрос
      // const config = useRuntimeConfig()
      // return await $fetch<SteamCostResponse>(`${config.public.apiBase}/cost/steam`, {
      //   query: {
      //     net_amount: netAmount,
      //     account
      //   }
      // })

      // Мокап данные (расчёт с комиссией 5%)
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const commission = Math.round(netAmount * 0.05)
      const totalAmount = netAmount + commission

      return {
        netAmount,
        totalAmount,
        commission,
        account
      }
    }
    catch (err) {
      error.value = err as Error
      console.error('Failed to calculate Steam cost:', err)
      return null
    }
    finally {
      loading.value = false
    }
  }

  return {
    loading: readonly(loading),
    error: readonly(error),
    calculateCost
  }
}

