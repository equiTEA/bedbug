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
              landlordAtDateOfRating: {
                is: {
                  doingBusinessAs: {
                    some: {
                      id: (item as any).id, // TODO: Extract types into shared lib and assert type here
                    },
                  },
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
