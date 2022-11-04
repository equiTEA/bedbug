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

export const PropertyManagementCompany = list({
  hooks: baseHooks,
  fields: {
    /** Auditing fields */

    createdAt: timestamp({
      validation: { isRequired: true },
      defaultValue: { kind: 'now' },
      ...hideUIForDefaults,
    }),
    createdBy: relationship({
      ref: 'User.createdPropertyManagementCompanies',
      many: false,
      ...hideUIForDefaults,
    }),
    updatedAt: timestamp({
      validation: { isRequired: true },
      defaultValue: { kind: 'now' },
      ...hideUIForDefaults,
    }),
    updatedBy: relationship({
      ref: 'User.updatedPropertyManagementCompanies',
      many: false,
      ...hideUIForDefaults,
    }),
    isDeleted: checkbox({ defaultValue: false }),
    deletedBy: relationship({
      ref: 'User.deletedPropertyManagementCompanies',
      many: false,
      ...hideUIForDefaults,
    }),

    /** Scalars */

    name: text(),
    isVerified: checkbox({ defaultValue: false }),

    /** Relations */

    ratings: relationship({
      ref: 'Rating.propertyManagementCompanyAtDateOfRating',
      many: true,
    }),

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
              propertyManagementCompanyAtDateOfRating: {
                id: (item as any).id,
              },
            },
          })

          if (!aggregate._avg?.sentiment) return null

          const average = new Big(aggregate._avg.sentiment)
          return average.round(1, Big.roundHalfEven).toNumber()
        },
      }),
    }),
  },
})
