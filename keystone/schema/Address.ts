import {
  text,
  virtual,
  checkbox,
  timestamp,
  relationship,
} from '@keystone-6/core/fields'
import { Roles } from '../types/data/User'
import { baseHooks } from '../hooks/base'
import { list, graphql } from '@keystone-6/core'
import { hideUIForDefaults } from '../helpers/schemaHelpers'

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

    full: text(),

    line1: text({ validation: { isRequired: true } }),
    line2: text(),
    line3: text(),
    city: text({ validation: { isRequired: true } }),
    state: text({ validation: { isRequired: true } }),
    zip: text({ validation: { isRequired: true } }),

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
                id: (item as any).id, // TODO: extract types into consumable library
              },
            },
          })

          return aggregate._avg.sentiment
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
                id: (item as any).id, // TODO: extract types into consumable library
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
                id: (item as any).id, // TODO: extract types into consumable library
              },
            },
            orderBy: {
              createdAt: 'desc',
            },
          })

          if (!mostRecentRating) return null

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

          return { ...landlord, avgRating: avgRating._avg.sentiment }
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
                id: (item as any).id, // TODO: extract types into consumable library
              },
            },
            orderBy: {
              createdAt: 'desc',
            },
          })

          if (!mostRecentRating) return null

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

          return {
            ...propertyManagementCompany,
            avgRating: avgRating._avg.sentiment,
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
                id: (item as any).id, // TODO: extract types into consumable library
              },
            },
            orderBy: {
              createdAt: 'desc',
            },
          })

          if (!mostRecentRating) return null

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

          return { ...doingBusinessAs, avgRating: avgRating._avg.sentiment }
        },
      }),
    }),
  },
})
