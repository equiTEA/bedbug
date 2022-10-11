import type { SeedProps } from './types/SeedProps'

export const seedAssociations = async ({
  keystoneContext,
  seedCount,
}: SeedProps) => {
  process.stdout.write('Associating records...\n')

  const [
    ratings,
    landlords,
    addresses,
    users,
    businesses,
    propertyManagementCompanies,
  ] = await Promise.all([
    /** Add 10 ratings per address */
    keystoneContext.query.Rating.findMany({
      take: seedCount * 10,
    }),

    ...[
      'Landlord',
      'Address',
      'User',
      'Business',
      'PropertyManagementCompany',
    ].map((recordType) =>
      keystoneContext.query[recordType].findMany({
        take: seedCount,
      }),
    ),
  ])

  /**
   * Addresses
   */

  for (const [index, address] of addresses.entries()) {
    await keystoneContext.query.Address.updateOne({
      where: { id: address.id },
      data: {
        ratings: {
          /** Add 10 ratings per address */
          connect: ratings
            .slice(index * 10, index * 10 + 10)
            .map(({ id }) => ({ id })),
        },
        createdBy: { connect: { id: users[index].id } },
      },
    })
  }

  /**
   * Landlords
   */

  for (const [index, landlord] of landlords.entries()) {
    if (!users[index] || !businesses[index].id) break

    await keystoneContext.query.Landlord.updateOne({
      where: { id: landlord.id },
      data: {
        createdBy: { connect: { id: users[index].id } },
        doingBusinessAs: { connect: [{ id: businesses[index].id }] },
      },
    })
  }

  /**
   * Ratings
   */

  /** Landlords have been modified with populated doingBusinessAs: fetch them again */
  const updatedLandlords = await keystoneContext.query.Landlord.findMany({
    take: seedCount,
    query: 'id doingBusinessAs { id }',
  })

  for (const rating of ratings) {
    const landlord =
      updatedLandlords[Math.floor(Math.random() * updatedLandlords.length)]

    await keystoneContext.query.Rating.updateOne({
      where: { id: rating.id },
      data: {
        createdBy: {
          connect: { id: users[Math.floor(Math.random() * users.length)].id },
        },
        landlordAtDateOfRating: {
          connect: {
            id: landlord.id,
          },
        },
        doingBusinessAsAtDateOfRating: {
          connect: { id: landlord.doingBusinessAs[0].id },
        },
        propertyManagementCompanyAtDateOfRating: {
          connect: {
            id: propertyManagementCompanies[
              Math.floor(Math.random() * propertyManagementCompanies.length)
            ].id,
          },
        },
      },
    })
  }

  /**
   * Businesses
   */

  for (const [index, business] of businesses.entries()) {
    if (!users[index]) break

    await keystoneContext.query.Business.updateOne({
      where: { id: business.id },
      data: {
        createdBy: { connect: { id: users[index].id } },
      },
    })
  }

  /**
   * Property Management Companies
   */

  for (const [
    index,
    propertyManagementCompany,
  ] of propertyManagementCompanies.entries()) {
    if (!users[index]) break

    await keystoneContext.query.PropertyManagementCompany.updateOne({
      where: { id: propertyManagementCompany.id },
      data: {
        createdBy: { connect: { id: users[index].id } },
      },
    })
  }
}
