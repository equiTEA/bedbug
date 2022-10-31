import {
  AuthUserContextProvider,
  RateAddressContextProvider,
} from '@bedbug/hooks'
import AuthenticatedLayout from '../../../../components/layouts/Authenticated'

import type { ReactElement } from 'react'

export const getLayout = (page: ReactElement) => (
  <AuthUserContextProvider user={page.props.user}>
    <RateAddressContextProvider
      addressId={page.props.address.id}
      editingRating={page.props.editingRating}
    >
      <AuthenticatedLayout {...page.props}>{page}</AuthenticatedLayout>
    </RateAddressContextProvider>
  </AuthUserContextProvider>
)
