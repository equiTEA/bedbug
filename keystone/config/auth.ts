import { env } from '../env'
import { createAuth } from '@keystone-6/auth'
import { statelessSessions } from '@keystone-6/core/session'
import { Roles } from '../types/data/User'

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  sessionData: 'username banned role',
  secretField: 'password',
  initFirstItem: {
    fields: ['username', 'email', 'password'],
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
})

export { withAuth, session }
