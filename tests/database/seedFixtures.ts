import { PrismaClient } from './generated/client'
import { testBusiness } from '../fixtures/testDBA'
import { testAddress } from '../fixtures/testAddress'
import { testRatings } from '../fixtures/testRatings'
import { testLandlord1, testLandlord2 } from '../fixtures/testLandlord'
import { testPropertyManagementCompany } from '../fixtures/testPropertyManagementCompany'

const systemCreatedRecord = {
  createdBy: undefined,
  updatedBy: undefined,
  deletedBy: undefined,
}

export const seedFixtures = async () => {
  const prisma = new PrismaClient()
  await prisma.$transaction(async (trx) => {
    await Promise.all([
      trx.address.create({
        data: {
          ...testAddress,
          ...systemCreatedRecord,
          id: 'automated-test-address',
        },
      }),
      trx.business.create({
        data: {
          ...testBusiness,
          ...systemCreatedRecord,
          id: 'automated-test-business',
        },
      }),
      trx.landlord.createMany({
        data: [testLandlord1, testLandlord2].map((landlord) => ({
          ...landlord,
          ...systemCreatedRecord,
          id: `automated-test-landlord-${landlord.name}`,
        })),
      }),
      trx.propertyManagementCompany.create({
        data: {
          ...testPropertyManagementCompany,
          ...systemCreatedRecord,
          id: 'automated-test-property-mgmt-co',
        },
      }),
      trx.rating.createMany({
        data: testRatings.map((rating) => ({
          ...rating,
          ...systemCreatedRecord,
          id: `automated-test-rating-${rating.sentiment}`,
          rentPrice: 9999,
          address: undefined,
          landlordAtDateOfRating: undefined,
          doingBusinessAsAtDateOfRating: undefined,
          propertyManagementCompanyAtDateOfRating: undefined,
        })),
      }),
    ])

    const [address, business, landlords, propertyManagementCompany, ratings] =
      await Promise.all([
        trx.address.findUnique({
          where: {
            id: 'automated-test-address',
          },
        }),
        trx.business.findUnique({
          where: {
            id: 'automated-test-business',
          },
        }),
        trx.landlord.findMany({
          where: {
            id: {
              startsWith: 'automated-test-landlord-',
            },
          },
        }),
        trx.propertyManagementCompany.findUnique({
          where: {
            id: 'automated-test-property-mgmt-co',
          },
        }),
        trx.rating.findMany({
          where: {
            id: {
              startsWith: 'automated-test-rating-',
            },
          },
        }),
      ])

    await Promise.all([
      ...(address
        ? [
            trx.address.update({
              where: {
                id: address.id,
              },
              data: {
                Rating: {
                  connect: ratings.map((rating) => ({ id: rating.id })),
                },
              },
            }),
          ]
        : []),

      ...(business
        ? [
            trx.business.update({
              where: {
                id: business.id,
              },
              data: {
                Landlord: {
                  connect: landlords.map((landlord) => ({ id: landlord.id })),
                },
                Rating: {
                  connect: ratings.map((rating) => ({ id: rating.id })),
                },
              },
            }),
          ]
        : []),

      ...(landlords.length
        ? [
            trx.landlord.update({
              where: {
                id: landlords[0].id,
              },
              data: {
                Rating: {
                  connect: ratings.map((rating) => ({ id: rating.id })),
                },
              },
            }),
          ]
        : []),

      ...(propertyManagementCompany
        ? [
            trx.propertyManagementCompany.update({
              where: {
                id: propertyManagementCompany.id,
              },
              data: {
                Rating: {
                  connect: ratings.map((rating) => ({ id: rating.id })),
                },
              },
            }),
          ]
        : []),
    ])
  })
}
