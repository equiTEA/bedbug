import Big from 'big.js'
import {
  text,
  float,
  virtual,
  checkbox,
  timestamp,
  relationship,
} from '@keystone-6/core/fields'
import { Roles } from '@bedbug/types'
import { baseHooks } from '../hooks/base'
import { list, graphql } from '@keystone-6/core'
import { hideUIForDefaults } from '../helpers/schemaHelpers'

import type { Address as AddressType } from '@bedbug/types'

export const Address = list({
  hooks: baseHooks,

  fields: {
    /** Auditing fields */

    createdAt: timestamp({
      validation: { isRequired: true },
      defaultValue: { kind: 'now' },
      ...hideUIForDefaults,
    }),
    createdBy: relationship({
      ref: 'User.createdAddresses',
      many: false,
      ...hideUIForDefaults,
    }),
    updatedAt: timestamp({
      validation: { isRequired: true },
      defaultValue: { kind: 'now' },
      ...hideUIForDefaults,
    }),
    updatedBy: relationship({
      ref: 'User.updatedAddresses',
      many: false,
      ...hideUIForDefaults,
    }),
    isDeleted: checkbox({ defaultValue: false }),
    deletedBy: relationship({
      ref: 'User.deletedAddresses',
      many: false,
      ...hideUIForDefaults,
    }),

    /** Relations */

    ratings: relationship({ ref: 'Rating.address', many: true }),

    /** Scalars */
    isVerified: checkbox({
      defaultValue: false,
      access: {
        read: ({ context }) =>
          [Roles.ADMIN, Roles.MODERATOR].includes(context.session?.data.role),
        create: ({ context }) =>
          [Roles.ADMIN, Roles.MODERATOR].includes(context.session?.data.role),
        update: ({ context }) =>
          [Roles.ADMIN, Roles.MODERATOR].includes(context.session?.data.role),
      },
      ui: {
        listView: {
          fieldMode: 'read' as const,
        },
      },
    }),

    lat: float({ defaultValue: 0.0, validation: { isRequired: true } }),
    lng: float({ defaultValue: 0.0, validation: { isRequired: true } }),
    full: text({ isIndexed: 'unique' }),
    line1: text({ validation: { isRequired: true } }),
    line2: text({ validation: { isRequired: false } }),
    line3: text({ validation: { isRequired: false } }),
    city: text({ validation: { isRequired: true } }),
    state: text({ validation: { isRequired: true } }),
    zip: text({ validation: { isRequired: true } }),
    countryCode: text({
      validation: { isRequired: true },
      defaultValue: 'USA',
    }),

    /** Virtuals */

    avgRating: virtual({
      field: graphql.field({
        type: graphql.Float,
        resolve: async (item, __, context) => {
          const aggregate = await context.prisma.rating.aggregate({
            _avg: {
              sentiment: true,
            },
            where: {
              address: {
                id: (item as AddressType).id,
              },
            },
          })

          if (!aggregate._avg.sentiment) return null

          const average = new Big(aggregate._avg.sentiment)
          return average.round(1, Big.roundHalfEven).toNumber()
        },
      }),
    }),

    ratingCount: virtual({
      field: graphql.field({
        type: graphql.Int,
        resolve: async (item, _, context) => {
          const aggregate = await context.prisma.rating.aggregate({
            _count: {
              id: true,
            },
            where: {
              address: {
                id: (item as AddressType).id,
              },
            },
          })

          return aggregate._count.id
        },
      }),
    }),

    mostRecentLandlord: virtual({
      field: graphql.field({
        type: graphql.JSON,
        resolve: async (item, __, context) => {
          const mostRecentRating = await context.prisma.rating.findFirst({
            where: {
              address: {
                id: (item as AddressType).id,
              },
            },
            orderBy: {
              createdAt: 'desc',
            },
          })

          if (!mostRecentRating || !mostRecentRating.landlordAtDateOfRatingId)
            return null

          const landlord = await context.prisma.landlord.findFirst({
            where: {
              id: mostRecentRating.landlordAtDateOfRatingId,
            },
          })

          if (!landlord) return null

          const avgRating = await context.prisma.rating.aggregate({
            _avg: {
              sentiment: true,
            },
            where: {
              landlordAtDateOfRating: {
                is: {
                  id: landlord.id,
                },
              },
            },
          })

          const average = new Big(avgRating._avg.sentiment)
          return {
            ...landlord,
            avgRating: average.round(1, Big.roundHalfEven).toNumber(),
          }
        },
      }),
    }),

    mostRecentPropertyManagementCompany: virtual({
      field: graphql.field({
        type: graphql.JSON,
        resolve: async (item, __, context) => {
          const mostRecentRating = await context.prisma.rating.findFirst({
            where: {
              address: {
                id: (item as AddressType).id,
              },
            },
            orderBy: {
              createdAt: 'desc',
            },
          })

          if (
            !mostRecentRating ||
            !mostRecentRating.propertyManagementCompanyAtDateOfRatingId
          )
            return null

          const propertyManagementCompany =
            await context.prisma.propertyManagementCompany.findFirst({
              where: {
                id: mostRecentRating.propertyManagementCompanyAtDateOfRatingId,
              },
            })

          if (!propertyManagementCompany) return null

          const avgRating = await context.prisma.rating.aggregate({
            _avg: {
              sentiment: true,
            },
            where: {
              propertyManagementCompanyAtDateOfRating: {
                is: {
                  id: propertyManagementCompany.id,
                },
              },
            },
          })

          const average = new Big(avgRating._avg.sentiment)
          return {
            ...propertyManagementCompany,
            avgRating: average.round(1, Big.roundHalfEven).toNumber(),
          }
        },
      }),
    }),

    mostRecentDoingBusinessAs: virtual({
      field: graphql.field({
        type: graphql.JSON,
        resolve: async (item, __, context) => {
          const mostRecentRating = await context.prisma.rating.findFirst({
            where: {
              address: {
                id: (item as AddressType).id,
              },
            },
            orderBy: {
              createdAt: 'desc',
            },
          })

          if (
            !mostRecentRating ||
            !mostRecentRating.doingBusinessAsAtDateOfRatingId
          )
            return null

          const doingBusinessAs = await context.prisma.business.findFirst({
            where: {
              id: mostRecentRating.doingBusinessAsAtDateOfRatingId,
            },
          })

          if (!doingBusinessAs) return null

          const avgRating = await context.prisma.rating.aggregate({
            _avg: {
              sentiment: true,
            },
            where: {
              doingBusinessAsAtDateOfRating: {
                is: {
                  id: doingBusinessAs.id,
                },
              },
            },
          })

          const average = new Big(avgRating._avg.sentiment)
          return {
            ...doingBusinessAs,
            avgRating: average.round(1, Big.roundHalfEven).toNumber(),
          }
        },
      }),
    }),

    mostRecentRentPrice: virtual({
      field: graphql.field({
        type: graphql.Float,
        resolve: async (item, __, context) => {
          const mostRecentRating = await context.prisma.rating.findFirst({
            where: {
              address: {
                id: (item as AddressType).id,
              },
            },
            orderBy: {
              createdAt: 'desc',
            },
          })

          if (!mostRecentRating) return null

          return mostRecentRating.rentPrice
        },
      }),
    }),
  },
})
