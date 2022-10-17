exports.env = (() => {
  if (!process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT)
    throw new Error(
      'NEXT_PUBLIC_GRAPHQL_ENDPOINT not set in environment variables',
    )

  return {
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  }
})()
