import { list, graphql } from '@keystone-6/core'
import {
  text,
  relationship,
  timestamp,
  checkbox,
  virtual,
} from '@keystone-6/core/fields'
import { hideUIForDefaults } from '../helpers/schemaHelpers'
import { baseHooks } from '../hooks/base'

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
              landlord: {
                some: {
                  id: (item as any).id,
                },
              },
            },
          })

          return aggregate._avg.sentiment
        },
      }),
    }),
  },
})
