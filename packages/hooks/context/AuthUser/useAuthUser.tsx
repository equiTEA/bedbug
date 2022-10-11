import { useContext } from 'react'
import { AuthUserContext } from './Provider'

export const useAuthUser = () => {
  const context = useContext(AuthUserContext)

  if (!context) {
    throw new Error('useAuthUser must be used within a AuthUserContextProvider')
  }

  return context
}
