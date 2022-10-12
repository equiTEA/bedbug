import { faker } from '@faker-js/faker'

import type { SeedProps } from './types/SeedProps'

export const seedAddresses = async ({
  keystoneContext,
  seedCount,
}: SeedProps): Promise<Record<string, any>[]> => {
  process.stdout.write('Seeding addresses...\n')

  const addressesCount = await keystoneContext.query.Address.count()

  if (addressesCount !== 0) {
    process.stdout.write('Addresses exist, skipping\n')
    return []
  }

  const addresses = []
  for (let i = 0; i < seedCount; i++) {
    const address = {
      line1: faker.address.streetAddress(),
      line2: Math.floor(Math.random() * 2)
        ? undefined
        : faker.address.secondaryAddress(),
      line3: undefined,
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zip: faker.address.zipCode(),
      countryCode: 'USA',

      isVerified: Math.floor(Math.random() * 2) ? true : false,
    }

    addresses.push({
      full: `${address.line1}${address.line2 ? ` ${address.line2}` : ''}, ${
        address.city
      }, ${address.state} ${address.zip}, ${address.countryCode}`,
      line1: address.line1,
      line2: address.line2,
      line3: address.line3,
      city: address.city,
      state: address.state,
      zip: address.zip,

      isVerified: address.isVerified,
    })
  }

  const createdAddresses = await keystoneContext.query.Address.createMany({
    data: addresses,
  })

  process.stdout.write(`Seeded ${seedCount} addresses\n`)
  return createdAddresses
}
