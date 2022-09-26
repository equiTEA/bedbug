import type { NextPageContext } from 'next'
import { getCurrentUser } from './getCurrentUser'

/**
 * Useful for routes that you don't want to display to unauthenticated users
 */
export const redirectWhenUserIsUnauthenticated = async (
  ctx: NextPageContext,
) => {
  const user = await getCurrentUser(ctx)

  if (!user) {
    return {
      redirect: {
        destination: '/signin',
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
