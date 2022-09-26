import { lists } from './config/lists'
import { db } from './config/db'
import { Roles } from './types/data/User'
import { config } from '@keystone-6/core'
import { withAuth, session } from './config/auth'

export default config(
  withAuth({
    db,
    lists,
    session,
    ui: {
      isAccessAllowed: (context) => {
        return context.session?.data.role === Roles.ADMIN
      },
    },
  }),
)
