import UnauthenticatedLayout from '../../../components/layouts/Unauthenticated'

import type { ReactElement } from 'react'
import { AuthUserContextProvider } from '@bedbug/hooks'

export const getLayout = (page: ReactElement) => (
  <AuthUserContextProvider user={page.props.user}>
    <UnauthenticatedLayout {...page.props}>{page}</UnauthenticatedLayout>
  </AuthUserContextProvider>
)
