import UnauthenticatedLayout from '../../../../components/layouts/Unauthenticated'
import AuthenticatedLayout from '../../../../components/layouts/Authenticated/Authenticated'

import type { ReactElement } from 'react'
import { AuthUserContextProvider } from '@bedbug/hooks'

export const getLayout = (page: ReactElement) => (
  <AuthUserContextProvider user={page.props.user}>
    {page.props.user ? (
      <AuthenticatedLayout {...page.props}>{page}</AuthenticatedLayout>
    ) : (
      <UnauthenticatedLayout {...page.props}>{page}</UnauthenticatedLayout>
    )}
  </AuthUserContextProvider>
)
