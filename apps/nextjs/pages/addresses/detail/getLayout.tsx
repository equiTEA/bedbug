import UnauthenticatedLayout from '../../../components/layouts/Unauthenticated'

import type { ReactElement } from 'react'

export const getLayout = (page: ReactElement) => (
  <>
    {page.props.user ? (
      <>TODO: Authenticated Map</>
    ) : (
      <UnauthenticatedLayout user={page.props.user} {...page.props}>
        {page}
      </UnauthenticatedLayout>
    )}
  </>
)
