import {
  json,
  float,
  select,
  checkbox,
  timestamp,
  relationship,
} from '@keystone-6/core/fields'
import { list } from '@keystone-6/core'
import { baseHooks } from '../hooks/base'
import { RatingSentiments } from '@bedbug/types'
import { hideUIForDefaults } from '../helpers/schemaHelpers'

export const Rating = list({
  access: {
    operation: {
      query: ({ session, context, listKey, operation }) => {
        if (session && session.data.banned) return false // TODO: IP ban
        return true
      },
      create: ({ session, context, listKey, operation }) => {
        if (!session?.data) return false // TODO: IP Ban
        if (session.data.banned) return false

        return true
      },
      update: ({ session, context, listKey, operation }) => {
        if (!session?.data) return false // TODO: IP Ban
        if (session.data.banned) return false

        return true
      },
      delete: ({ session, context, listKey, operation }) => {
        if (!session?.data) return false // TODO: IP Ban
        if (session.data.banned) return false

        return true
      },
    },
  },
  hooks: baseHooks,
  fields: {
    /** Auditing fields */

    createdAt: timestamp({
      validation: { isRequired: true },
      defaultValue: { kind: 'now' },
      ...hideUIForDefaults,
    }),
    createdBy: relationship({
      ref: 'User.ratings',
      many: false,
      ...hideUIForDefaults,
    }),
    updatedAt: timestamp({
      validation: { isRequired: true },
      defaultValue: { kind: 'now' },
      ...hideUIForDefaults,
    }),
    updatedBy: relationship({
      ref: 'User.updatedRatings',
      many: false,
      ...hideUIForDefaults,
    }),
    isDeleted: checkbox({ defaultValue: false }),
    deletedBy: relationship({
      ref: 'User.deletedRatings',
      many: false,
      ...hideUIForDefaults,
    }),

    /** Relations */

    address: relationship({ ref: 'Address.ratings', many: false }),
    landlordAtDateOfRating: relationship({
      ref: 'Landlord.ratings',
      many: false,
    }),
    doingBusinessAsAtDateOfRating: relationship({
      ref: 'Business.ratings',
      many: false,
    }),
    propertyManagementCompanyAtDateOfRating: relationship({
      ref: 'PropertyManagementCompany.ratings',
      many: false,
    }),

    /** Scalars */

    sentiment: select({
      type: 'integer',
      isFilterable: true,
      isOrderable: true,
      options: [
        {
          label: 'Extremely Positive',
          value: RatingSentiments.EXTREMELY_POSITIVE,
        },
        { label: 'Positive', value: RatingSentiments.POSITIVE },
        { label: 'Neutral', value: RatingSentiments.NEUTRAL },
        { label: 'Negative', value: RatingSentiments.NEGATIVE },
        {
          label: 'Extremely Negative',
          value: RatingSentiments.EXTREMELY_NEGATIVE,
        },
      ],
    }),

    body: json(),
    rentPrice: float({ validation: { isRequired: true } }),
    tenancyStartDate: timestamp(),
    tenancyEndDate: timestamp(),
  },
})
