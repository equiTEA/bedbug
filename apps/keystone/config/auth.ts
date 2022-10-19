import { Roles } from '@bedbug/types'
import { env } from '../helpers/verifyEnv'
import { createAuth } from '@keystone-6/auth'
import { statelessSessions } from '@keystone-6/core/session'

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  sessionData: 'username banned role',
  secretField: 'password',
  initFirstItem: {
    fields: ['username', 'email', 'password', 'role', 'banned'],
    skipKeystoneWelcome: true,
    itemData: {
      role: Roles.ADMIN,
    },
  },
})

let sessionSecret = env.COOKIE_SECRET
let sessionMaxAge = 60 * 60 * 24 * 30 // 30 days

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  domain:
    process.env.NODE_ENV === 'production'
      ? // Get the domain by removing the protocol and the trailing slash path
        (env.NEXT_PUBLIC_CORS_ORIGIN as string)
          .split('https://')[1]
          .split('/')[0]
      : 'localhost',
})

export { withAuth, session }
