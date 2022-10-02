import type { NextPageContext } from 'next'
import { getCurrentUser } from './getCurrentUser'

/**
 * Useful for routes that you don't want to display to authenticated users, such
 * as the /signin, /signup, /forgot-password, etc.
 */
export const redirectWhenUserIsAuthenticated = async (ctx: NextPageContext) => {
  const user = await getCurrentUser(ctx)

  if (user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      user,
    },
  }
}
