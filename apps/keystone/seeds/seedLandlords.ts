import { faker } from '@faker-js/faker'

import type { Landlord } from '@bedbug/types'
import { SeedProps } from './types/SeedProps'

export const seedLandlords = async ({
  keystoneContext,
  seedCount,
}: SeedProps): Promise<Record<string, any>[]> => {
  process.stdout.write('Seeding landlords...\n')

  const landlordsCount = await keystoneContext.query.Landlord.count()

  if (landlordsCount !== 0) {
    process.stdout.write('Landlords exist, skipping\n')
    return []
  }

  const landlords: Landlord[] = []
  for (let i = 0; i < seedCount; i++) {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()

    const isVerified = Math.floor(Math.random() * 2) ? true : false

    landlords.push({
      name: `${firstName} ${lastName}`,
      isVerified,
    })
  }

  const createdLandlords = await keystoneContext.query.Landlord.createMany({
    data: landlords,
  })

  process.stdout.write(`Seeded ${seedCount} landlords\n`)

  return createdLandlords
}
