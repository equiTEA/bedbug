import { mergeSchemas } from '@graphql-tools/schema'
import { Query, Mutation, typedefs } from '../graphql'

import type { ExtendGraphqlSchema } from '@keystone-6/core/types'

export const extendGraphqlSchema: ExtendGraphqlSchema = (keystoneSchema) =>
  mergeSchemas({
    schemas: [keystoneSchema],
    typeDefs: /* GraphQL */ `
      type Query {
        forwardGeocode(address: String!): [ForwardGeocodeResult!]!
      }

      ${typedefs}
    `,
    resolvers: {
      Query,
      Mutation,
    },
  })
