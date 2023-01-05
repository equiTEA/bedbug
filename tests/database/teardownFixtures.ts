import { PrismaClient } from './generated/client'
import { testUser } from '../fixtures/testUser'

export const teardownFixtures = async () => {
  const prisma = new PrismaClient()

  const whereClause = {
    where: {
      id: {
        startsWith: 'automated-test',
      },
    },
  }

  await prisma.$transaction(async (trx) => {
    await Promise.all([
      trx.user.deleteMany({
        where: { username: { startsWith: 'automated-test-' } },
      }),
      trx.address.deleteMany(whereClause),
      trx.business.deleteMany(whereClause),
      trx.landlord.deleteMany(whereClause),
      trx.propertyManagementCompany.deleteMany(whereClause),
      trx.rating.deleteMany(whereClause),
    ])
  })

  await prisma.$disconnect()
}
