import { Roles } from '@bedbug/types'

import type { KeystoneContext } from '@keystone-6/core/types'

export const seedAdminUser = async (keystone: KeystoneContext) => {
  process.stdout.write('Seeding admin user from environment variables...\n')
  const adminUserExists = await keystone.query.User.count({
    where: {
      role: {
        equals: Roles.ADMIN,
      },
    },
  })

  if (adminUserExists)
    return process.stdout.write('Admin user exists, skipping\n')

  await keystone.query.User.createOne({
    data: {
      username: 'admin',
      email: process.env.ADMIN_USER_EMAIL,
      password: process.env.ADMIN_USER_PASSWORD,
      role: Roles.ADMIN,
      banned: false,
    },
  })

  process.stdout.write(`Seeded admin user\n`)

  return
}
