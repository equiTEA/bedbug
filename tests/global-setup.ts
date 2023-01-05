import { FullConfig } from '@playwright/test'
import { generatePrismaClient } from './database/generatePrismaClient'
import { seedFixtures } from './database/seedFixtures'

async function globalSetup(config: FullConfig) {
  console.log('\nRunning global setup...')

  generatePrismaClient()
  await seedFixtures()
}

export default globalSetup
