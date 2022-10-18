const { commonEnvVars } = require('@bedbug/utility')

exports.env = (() => {
  if (!process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT)
    throw new Error(
      'NEXT_PUBLIC_GRAPHQL_ENDPOINT not set in environment variables',
    )

  return {
    ...commonEnvVars,
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  }
})()
