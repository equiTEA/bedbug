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
      healthCheck: true,
      cors: {
        origin: [
          'http://localhost:3001', // Development environment
          'https://staging.bedbug.app', // Staging environment
          'https://bedbug.app', // Production environment

          'https://bedbug-staging-next-x7qinylila-uc.a.run.app', // TODO: remove when DNS is set up
        ],
        credentials: true,
      },
    },
  }),
)
