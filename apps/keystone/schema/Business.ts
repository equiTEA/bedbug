import Big from 'big.js'
import {
  text,
  virtual,
  checkbox,
  timestamp,
  relationship,
} from '@keystone-6/core/fields'
import { baseHooks } from '../hooks/base'
import { list, graphql } from '@keystone-6/core'
import { hideUIForDefaults } from '../helpers/schemaHelpers'

import type { Business as BusinessType } from '@bedbug/types'

export const Business = list({
  hooks: baseHooks,
  fields: {
    /** Auditing fields */

    createdAt: timestamp({
      validation: { isRequired: true },
      defaultValue: { kind: 'now' },
      ...hideUIForDefaults,
    }),
    createdBy: relationship({
      ref: 'User.createdBusinesses',
      many: false,
      ...hideUIForDefaults,
    }),
    updatedAt: timestamp({
      validation: { isRequired: true },
      defaultValue: { kind: 'now' },
      ...hideUIForDefaults,
    }),
    updatedBy: relationship({
      ref: 'User.updatedBusinesses',
      many: false,
      ...hideUIForDefaults,
    }),
    isDeleted: checkbox({ defaultValue: false }),
    deletedBy: relationship({
      ref: 'User.deletedBusinesses',
      many: false,
      ...hideUIForDefaults,
    }),

    /** Relations */
    landlords: relationship({ ref: 'Landlord.doingBusinessAs', many: true }),
    ratings: relationship({
      ref: 'Rating.doingBusinessAsAtDateOfRating',
      many: true,
    }),

    /** Scalars */

    name: text({ validation: { isRequired: true } }),
    isVerified: checkbox({ defaultValue: false }),

    /** Virtuals */

    avgRating: virtual({
      field: graphql.field({
        type: graphql.Float,
        resolve: async (item, _, context) => {
          const aggregate = await context.prisma.rating.aggregate({
            _avg: {
              sentiment: true,
            },
            where: {
              landlord: {
                some: {
                  doingBusinessAs: {
                    some: {
                      id: (item as BusinessType).id,
                    },
                  },
                },
              },
            },
          })

          const average = new Big(aggregate._avg.sentiment)
          return average
            .round(aggregate._avg.sentiment, Big.roundHalfEven)
            .toNumber()
        },
      }),
    }),
  },
})
