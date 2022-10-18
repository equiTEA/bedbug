import { commonEnvVars } from '@bedbug/utility'

const verifyEnv = () => {
  if (!process.env.DATABASE_URL)
    throw new Error('DATABASE_URL not set in environment variables')

  if (!process.env.COOKIE_SECRET)
    throw new Error('COOKIE_SECRET not set in environment variables')

  if (!process.env.SEED_COUNT) {
    process.stdout.write(
      'SEED_COUNT not set in environment variables - defaulting to 0\n',
    )

    process.env.SEED_COUNT = '0'
  }

  if (!process.env.ADMIN_USER_EMAIL)
    throw new Error('ADMIN_USER_EMAIL not set in environment variables')

  if (!process.env.ADMIN_USER_PASSWORD)
    throw new Error('ADMIN_USER_PASSWORD not set in environment variables')

  if (!process.env.POSITIONSTACK_API_ACCESS_KEY)
    throw new Error(
      'POSITIONSTACK_API_ACCESS_KEY not set in environment variables',
    )

  return {
    ...commonEnvVars,
    DATABASE_URL: process.env.DATABASE_URL,
    COOKIE_SECRET: process.env.COOKIE_SECRET,
    SEED_COUNT: parseInt(process.env.SEED_COUNT) || 0,
    POSITIONSTACK_API_ACCESS_KEY: process.env.POSITIONSTACK_API_ACCESS_KEY,
    NEXT_PUBLIC_CORS_ORIGIN: process.env.NEXT_PUBLIC_CORS_ORIGIN,
    NEXT_PUBLIC_STRICT_MODE: commonEnvVars.NEXT_PUBLIC_STRICT_MODE
      ? JSON.parse(commonEnvVars.NEXT_PUBLIC_STRICT_MODE)
      : true,
  }
}

export const env = verifyEnv()
