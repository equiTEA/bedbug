import {
  text,
  select,
  virtual,
  password,
  checkbox,
  relationship,
} from '@keystone-6/core/fields'
import { Roles } from '@bedbug/types'
import { env } from '../helpers/verifyEnv'
import { graphql, list } from '@keystone-6/core'
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

    hCaptchaToken: virtual({
      field: graphql.field({
        type: graphql.String,
        resolve: async (item, _, context) => null,
      }),
    }),
  },

  access: {
    operation: {
      create: ({ listKey }) => {
        if (listKey === 'hCaptchaToken') return true
        return true
      },
    },
    item: {
      create: async ({ inputData }) => {
        try {
          const captchaResult = await fetch(`https://hcaptcha.com/siteverify`, {
            method: 'POST',
            body: `response=${encodeURIComponent(
              inputData.hCaptchaToken,
            )}&secret=${encodeURIComponent(env.HCAPTCHA_SECRET)}`,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
          })

          const deserialized = await captchaResult.json()
          if (!deserialized.success) return false
          return true
        } catch (error) {
          console.error({ error })
          return false
        }
      },
    },
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

      const { hCaptchaToken, ...rest } = resolvedData
      return { ...rest, role: role ?? Roles.TENANT }
    },
    beforeOperation: async ({ inputData }) => {
      if (inputData?.hCaptchaToken) {
        delete inputData.hCaptchaToken
      }
    },
  },
})
