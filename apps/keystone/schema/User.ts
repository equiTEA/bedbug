import { list } from '@keystone-6/core'
import {
  text,
  relationship,
  select,
  checkbox,
  password,
} from '@keystone-6/core/fields'
import { Roles } from '@bedbug/types'
import { disableHardDelete } from '../hooks/disableHardDelete'

export const User = list({
  fields: {
    username: text({ validation: { isRequired: true } }),
    email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    banned: checkbox({ defaultValue: false }),
    password: password({ validation: { isRequired: true } }),
    role: select({
      type: 'enum',
      isFilterable: true,
      options: [
        { label: 'Admin', value: Roles.ADMIN },
        { label: 'Moderator', value: Roles.MODERATOR },
        { label: 'Tenant', value: Roles.TENANT },
        { label: 'Landlord', value: Roles.LANDLORD },
        {
          label: 'Property Management Company',
          value: Roles.PROPERTY_MANAGEMENT_COMPANY,
        },
      ],
    }),

    /** Relations */

    ratings: relationship({ ref: 'Rating.createdBy', many: true }),
    updatedRatings: relationship({ ref: 'Rating.updatedBy', many: true }),
    deletedRatings: relationship({ ref: 'Rating.deletedBy', many: true }),

    createdAddresses: relationship({ ref: 'Address.createdBy', many: true }),
    updatedAddresses: relationship({ ref: 'Address.updatedBy', many: true }),
    deletedAddresses: relationship({ ref: 'Address.deletedBy', many: true }),

    createdLandlords: relationship({ ref: 'Landlord.createdBy', many: true }),
    updatedLandlords: relationship({ ref: 'Landlord.updatedBy', many: true }),
    deletedLandlords: relationship({ ref: 'Landlord.deletedBy', many: true }),

    createdBusinesses: relationship({ ref: 'Business.createdBy', many: true }),
    updatedBusinesses: relationship({ ref: 'Business.updatedBy', many: true }),
    deletedBusinesses: relationship({ ref: 'Business.deletedBy', many: true }),

    createdPropertyManagementCompanies: relationship({
      ref: 'PropertyManagementCompany.createdBy',
      many: true,
    }),
    updatedPropertyManagementCompanies: relationship({
      ref: 'PropertyManagementCompany.updatedBy',
      many: true,
    }),
    deletedPropertyManagementCompanies: relationship({
      ref: 'PropertyManagementCompany.deletedBy',
      many: true,
    }),
  },
  hooks: {
    ...disableHardDelete,
    resolveInput: async ({ resolvedData, context }) => {
      const { role } = resolvedData

      // Check if the request is createInitialUser
      if (role === Roles.ADMIN) {
        const noUsersExistYet = (await context.prisma.user.count()) === 0

        // Only resolve the request if no user exists yet
        if (noUsersExistYet) return { ...resolvedData }
        throw new Error('Not permitted to create an admin user')
      }

      return { ...resolvedData, role: role ?? Roles.TENANT }
    },
  },
})
