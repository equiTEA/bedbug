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

const domainValue =
  process.env.NODE_ENV === 'production'
    ? // Get the domain by removing the protocol and the trailing slash path
      (env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string)
        .split(
          `http${
            env.NEXT_PUBLIC_GRAPHQL_ENDPOINT.startsWith('https://') ? 's' : ''
          }://`,
        )[1]
        .split('/')[0]
    : 'localhost'

console.log({
  domainValue,
  sameSiteValue: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  secureValue: process.env.NODE_ENV === 'production',
})

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  domain: process.env.NODE_ENV === 'production' ? 'bedbug.app' : 'localhost',
})

export { withAuth, session }
