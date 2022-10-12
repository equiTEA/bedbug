import Box from '@mui/material/Box'
import { getCurrentUser } from '../ssr/getCurrentUser'
import AddressSearch from '../assemblies/AddressSearch'
import AuthenticatedLayout from '../components/layouts/Authenticated'
import UnauthenticatedLayout from '../components/layouts/Unauthenticated'
import { sharedAnimatedContainerStyles } from '../styles/shared/animatedContainerStyles'

import type { ReactElement } from 'react'
import type { User } from '@bedbug/types'
import type { NextPageContext } from 'next'
import type { NextPageWithLayout } from './_app.page'
import { AuthUserContextProvider } from '@bedbug/hooks'

type Props = {
  /** The currently logged-in user  */
  user: User
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  const user = await getCurrentUser(ctx)
  return { props: { user } }
}

const Home: NextPageWithLayout<Props> = ({ user }) => (
  <AuthUserContextProvider user={user}>
    <Box
      sx={(theme) => {
        return sharedAnimatedContainerStyles({ theme })
      }}
    >
      <AddressSearch />
    </Box>
  </AuthUserContextProvider>
)

Home.getLayout = (page: ReactElement) => (
  <>
    {page.props.user ? (
      <AuthenticatedLayout user={page.props.user}>{page}</AuthenticatedLayout>
    ) : (
      <UnauthenticatedLayout>{page}</UnauthenticatedLayout>
    )}
  </>
)

export default Home
