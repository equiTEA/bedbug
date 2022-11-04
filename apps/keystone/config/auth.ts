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
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  domain: (() => {
    switch (true) {
      case process.env.NODE_ENV === 'production': {
        return 'bedbug.app'
      }
      case process.env.NEXT_PUBLIC_ETC_HOSTS === 'true': {
        return 'bedbug.com'
      }
      default: {
        return 'localhost'
      }
    }
  })(),
})

export { withAuth, session }
