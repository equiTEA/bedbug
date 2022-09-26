const { config } = require('dotenv')

const verifyEnv = () => {
  config({ path: '../.env' })

  if (!process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT) {
    throw new Error(
      'NEXT_PUBLIC_GRAPHQL_ENDPOINT not set in environment variables',
    )
  }

  if (process.env.STRICT_MODE === 'false' || !process.env.STRICT_MODE) {
    process.stdout.write('Strict mode is disabled\n')
  } else {
    process.stdout.write('Strict mode is enabled\n')
  }

  return {
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    STRICT_MODE: JSON.parse(process.env.STRICT_MODE ?? true),
  }
}

module.exports = verifyEnv()
