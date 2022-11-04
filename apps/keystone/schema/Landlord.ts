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
import Big from 'big.js'

import type { Landlord as LandlordType } from '@bedbug/types'

export const Landlord = list({
  hooks: baseHooks,
  fields: {
    /** Auditing fields */

    createdAt: timestamp({
      validation: { isRequired: true },
      defaultValue: { kind: 'now' },
      ...hideUIForDefaults,
    }),
    createdBy: relationship({
      ref: 'User.createdLandlords',
      many: false,
      ...hideUIForDefaults,
    }),
    updatedAt: timestamp({
      validation: { isRequired: true },
      defaultValue: { kind: 'now' },
      ...hideUIForDefaults,
    }),
    updatedBy: relationship({
      ref: 'User.updatedLandlords',
      many: false,
      ...hideUIForDefaults,
    }),
    isDeleted: checkbox({ defaultValue: false }),
    deletedBy: relationship({
      ref: 'User.deletedLandlords',
      many: false,
      ...hideUIForDefaults,
    }),

    /** Scalars  */

    name: text(),
    isVerified: checkbox({ defaultValue: false }),

    /** Relations */

    doingBusinessAs: relationship({
      ref: 'Business.landlords',
      many: true,
    }),
    ratings: relationship({ ref: 'Rating.landlordAtDateOfRating', many: true }),

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
              landlordAtDateOfRatingId: {
                equals: (item as LandlordType).id,
              },
            },
          })

          if (!aggregate._avg?.sentiment) return null

          const average = Big(aggregate._avg.sentiment)
          return average.round(1, Big.roundHalfEven).toNumber()
        },
      }),
    }),
  },
})
