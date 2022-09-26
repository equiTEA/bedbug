import { env } from '../env'
import { DatabaseConfig, BaseKeystoneTypeInfo } from '@keystone-6/core/types'

export const db: DatabaseConfig<BaseKeystoneTypeInfo> = {
  provider: 'postgresql',
  url: env.DATABASE_URL,
  useMigrations: true,
}
