import { config } from 'dotenv'

const getEnvPath = () => {
  if (
    (process.env.NODE_ENV as typeof process.env.NODE_ENV | 'local') === 'local'
  )
    return '../../.env.local'

  return '../../.env'
}

/**
 * Strict mode can be disabled in development mode to ensure that
 * effects don't fire twice. See https://github.com/facebook/react/issues/24553
 *
 * Effects only fire once in production mode and strict mode should be enabled
 * in production.
 */
const verifyStrictMode = () => {
  const strictModeIsDisabled =
    process.env.STRICT_MODE === 'false' || !process.env.STRICT_MODE

  if (process.env.NODE_ENV === 'production' && strictModeIsDisabled)
    throw new Error(
      'Strict mode is disabled in production; please enable strict mode for this environment',
    )

  process.stdout.write(
    `Strict mode is ${strictModeIsDisabled ? 'disabled' : 'enabled'}\n`,
  )
}

const verifyEnv = () => {
  config({ path: getEnvPath() })
  verifyStrictMode()

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

  if (!process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT) {
    throw new Error(
      'NEXT_PUBLIC_GRAPHQL_ENDPOINT not set in environment variables',
    )
  }

  return {
    DATABASE_URL: process.env.DATABASE_URL,
    COOKIE_SECRET: process.env.COOKIE_SECRET,
    SEED_COUNT: parseInt(process.env.SEED_COUNT) || 0,
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    STRICT_MODE: process.env.STRICT_MODE
      ? JSON.parse(process.env.STRICT_MODE)
      : true,
  }
}

export const env = verifyEnv()
