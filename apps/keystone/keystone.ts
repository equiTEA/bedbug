import { lists } from './config/lists'
import { db } from './config/db'
import { Roles } from '@bedbug/types'
import { config } from '@keystone-6/core'
import { withAuth, session } from './config/auth'
import { extendGraphqlSchema } from './config/graphQLSchemaExtension'

export default config(
  withAuth({
    db,
    lists,
    session,
    extendGraphqlSchema,
    ui: {
      isAccessAllowed: (context) => {
        return context.session?.data.role === Roles.ADMIN
      },
    },
  }),
)
