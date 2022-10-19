import { lists } from './config/lists'
import { db } from './config/db'
import { Roles } from '@bedbug/types'
import { config } from '@keystone-6/core'
import { withAuth, session } from './config/auth'
import { extendGraphqlSchema } from './config/graphQLSchemaExtension'

console.log('CORS_ORIGIN: ', process.env.NEXT_PUBLIC_CORS_ORIGIN)

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
        methods: ['POST', 'OPTIONS'],
        allowedHeaders: [
          'Content-Type',
          'Authorization',
          'Access-Control-Allow-Origin',
          'Access-Control-Allow-Headers',
          'Access-Control-Allow-Methods',
        ],
      },
      extendExpressApp: (app) => {
        app.options('/api/graphql', (req, res) => {
          if (req.headers.origin === process.env.NEXT_PUBLIC_CORS_ORIGIN) {
            res.set('Access-Control-Allow-Origin', req.headers.origin)
            return res.status(200).send()
          }

          return res.status(403).send()
        })
      },
    },
  }),
)
