import { useContext } from 'react'
import { RateAddressContext } from './Provider'

export const useRateAddress = () => {
  const context = useContext(RateAddressContext)

  if (!context) {
    throw new Error(
      'useRateAddress must be used within a RateAddressContextProvider',
    )
  }

  return context
}
