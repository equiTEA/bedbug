import { faker } from '@faker-js/faker'
import { Roles } from '@bedbug/types'

import type { User } from '@bedbug/types'
import type { SeedProps } from './types/SeedProps'

type UserInput = Omit<User, 'password'> & {
  password: string
  hCaptchaToken: string
}

export const seedUsers = async ({
  keystoneContext,
  seedCount,
}: SeedProps): Promise<Record<string, any>[]> => {
  process.stdout.write('Seeding users...\n')

  const usersCount = await keystoneContext.query.User.count()

  if (usersCount > 1) {
    process.stdout.write('Users exist, skipping\n')
    return []
  }

  const users: UserInput[] = []
  for (let i = 0; i < seedCount; i++) {
    const firstName = faker.name.firstName().toLowerCase()
    const lastName = faker.name.lastName().toLowerCase()
    const username = faker.internet.userName(firstName, lastName).toLowerCase()
    const email = faker.internet.email(firstName, lastName).toLowerCase()
    const password = 'password'

    users.push({
      username,
      email,
      password,
      role: Roles.TENANT,
      banned: false,
      hCaptchaToken: '',
    })
  }

  const createdUsers = await keystoneContext.db.User.createMany({
    data: users,
  })

  process.stdout.write(`Seeded ${seedCount} users\n`)

  return createdUsers
}
