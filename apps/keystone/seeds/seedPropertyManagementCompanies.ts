import { faker } from '@faker-js/faker'

import type { SeedProps } from './types/SeedProps'
import type { PropertyManagementCompany } from '@bedbug/types'

export const seedPropertyManagementCompanies = async ({
  keystoneContext,
  seedCount,
}: SeedProps): Promise<Record<string, any>[]> => {
  process.stdout.write('Seeding property management companies...\n')

  const propertyManagementCompaniesCount =
    await keystoneContext.query.PropertyManagementCompany.count()

  if (propertyManagementCompaniesCount !== 0) {
    process.stdout.write('Property management companies exist, skipping\n')
    return []
  }

  const propertyManagementCompanies: PropertyManagementCompany[] = []
  for (let i = 0; i < seedCount; i++) {
    const propertyManagementCompany = {
      name: faker.company.name(),
      isVerified: Math.floor(Math.random() * 2) ? true : false,
    }

    propertyManagementCompanies.push(propertyManagementCompany)
  }

  const createdPropManagementCompanies =
    await keystoneContext.query.PropertyManagementCompany.createMany({
      data: propertyManagementCompanies,
    })

  process.stdout.write(`Seeded ${seedCount} property management companies\n`)

  return createdPropManagementCompanies
}
