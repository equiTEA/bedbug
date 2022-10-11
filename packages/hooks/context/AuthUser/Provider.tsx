import React, { createContext, ReactNode, FC } from 'react'

import type { User } from '@bedbug/types'

export type AuthUserContextValue = {
  user: User
}

export const AuthUserContext = createContext<AuthUserContextValue | undefined>(
  undefined,
)

export type AuthUserProviderProps = {
  children: ReactNode
  user: User
}

export const AuthUserContextProvider: FC<AuthUserProviderProps> = ({
  user,
  children,
}: AuthUserProviderProps) => {
  return (
    <AuthUserContext.Provider value={{ user }}>
      {children}
    </AuthUserContext.Provider>
  )
}
