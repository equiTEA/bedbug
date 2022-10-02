import type { SeedProps } from './types/SeedProps'

export const seedAssociations = async ({
  keystoneContext,
  seedCount,
}: SeedProps) => {
  process.stdout.write('Associating records...\n')

  const [
    addresses,
    ratings,
    users,
    landlords,
    businesses,
    propertyManagementCompanies,
  ] = await Promise.all(
    [
      'Address',
      'Rating',
      'User',
      'Landlord',
      'Business',
      'PropertyManagementCompany',
    ].map((recordType) =>
      keystoneContext.query[recordType].findMany({
        take: seedCount,
      }),
    ),
  )

  /**
   * Addresses
   */

  for (const [index, address] of addresses.entries()) {
    if (!ratings[index]) break

    await keystoneContext.query.Address.updateOne({
      where: { id: address.id },
      data: {
        ratings: { connect: [{ id: ratings[index].id }] },
        createdBy: { connect: { id: users[index].id } },
      },
    })
  }

  /**
   * Ratings
   */

  for (const [index, rating] of ratings.entries()) {
    if (
      !users[index] ||
      !landlords[index] ||
      !businesses[index] ||
      !propertyManagementCompanies[index]
    )
      break

    await keystoneContext.query.Rating.updateOne({
      where: { id: rating.id },
      data: {
        createdBy: { connect: { id: users[index].id } },
        landlordAtDateOfRating: { connect: { id: landlords[index].id } },
        doingBusinessAsAtDateOfRating: {
          connect: { id: businesses[index].id },
        },
        propertyManagementCompanyAtDateOfRating: {
          connect: { id: propertyManagementCompanies[index].id },
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
