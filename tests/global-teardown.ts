import { FullConfig } from '@playwright/test'
import { teardownFixtures } from './database/teardownFixtures'

async function globalTeardown(config: FullConfig) {
  console.log('\nRunning global teardown...')

  await teardownFixtures()
}

export default globalTeardown
