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
    graphql: {
      apolloConfig: {
        cache: 'bounded',
        introspection:
          process.env.NEXT_PUBLIC_DEPLOYMENT_TARGET !== 'production',
      },
    },
    ui: {
      isAccessAllowed: (context) => {
        return context.session?.data.role === Roles.ADMIN
      },
    },
    server: {
      cors: {
        origin: process.env.NEXT_PUBLIC_CORS_ORIGIN as string,
        credentials: true,
        allowedHeaders: [
          'Content-Type',
          'Authorization',
          'Access-Control-Allow-Origin',
          'Access-Control-Allow-Headers',
          'Access-Control-Allow-Methods',
        ],
      },
    },
  }),
)
