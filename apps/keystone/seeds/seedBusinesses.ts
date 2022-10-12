import { faker } from '@faker-js/faker'

import type { SeedProps } from './types/SeedProps'
import type { Business } from '@bedbug/types'

export const seedBusinesses = async ({
  keystoneContext,
  seedCount,
}: SeedProps): Promise<Record<string, any>[]> => {
  process.stdout.write('Seeding businesses...\n')

  const businessesCount = await keystoneContext.query.Business.count()

  if (businessesCount !== 0) {
    process.stdout.write('Businesses exist, skipping\n')
    return []
  }

  const businesses: Business[] = []
  for (let i = 0; i < seedCount; i++) {
    businesses.push({
      name: `${faker.company.name()} ${
        faker.company.suffixes()[
          Math.floor(Math.random() * faker.company.suffixes().length)
        ]
      }`,
      isVerified: Math.floor(Math.random() * 2) ? true : false,
    })
  }

  const createdBusinesses = await keystoneContext.query.Business.createMany({
    data: businesses,
  })

  process.stdout.write(`Seeded ${seedCount} businesses\n`)

  return createdBusinesses
}
