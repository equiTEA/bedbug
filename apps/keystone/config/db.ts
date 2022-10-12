import { env } from '@bedbug/utility'
import { DatabaseConfig, BaseKeystoneTypeInfo } from '@keystone-6/core/types'

import {
  seedAdminUser,
  seedAddresses,
  seedLandlords,
  seedBusinesses,
  seedUsers,
  seedPropertyManagementCompanies,
  seedRatings,
  seedAssociations,
} from '../seeds'

export const db: DatabaseConfig<BaseKeystoneTypeInfo> = {
  provider: 'postgresql',
  url: env.DATABASE_URL,
  useMigrations: true,
  onConnect: async (keystoneContext) => {
    process.stdout.write('Seeding database...\n')

    await seedAdminUser(keystoneContext)

    if (process.env.DEPLOYMENT_TARGET !== 'production') {
      const [
        users,
        landlords,
        businesses,
        addresses,
        ratings,
        propertyManagementCompanies,
      ] = await Promise.all([
        seedUsers({ keystoneContext, seedCount: env.SEED_COUNT }),
        seedLandlords({ keystoneContext, seedCount: env.SEED_COUNT }),
        seedBusinesses({ keystoneContext, seedCount: env.SEED_COUNT }),
        seedAddresses({ keystoneContext, seedCount: env.SEED_COUNT }),
        seedRatings({ keystoneContext, seedCount: env.SEED_COUNT }),
        seedPropertyManagementCompanies({
          keystoneContext,
          seedCount: env.SEED_COUNT,
        }),

        /* ...seeds */
      ])

      const shouldApplyAssociations =
        users.length > 0 &&
        landlords.length > 0 &&
        businesses.length > 0 &&
        addresses.length > 0 &&
        ratings.length > 0 &&
        propertyManagementCompanies.length > 0

      if (shouldApplyAssociations)
        await seedAssociations({ keystoneContext, seedCount: env.SEED_COUNT })
    }
  },
}
