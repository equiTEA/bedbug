import { env } from 'process'

export type GraphQLError = {
  message: string
  path: string[]
  extensions: {
    code: string
    exception: {
      stacktrace: string[]
    }
    prisma: {
      code: string
      clientVersion: string
      meta: {
        target: string[]
      }
    }
  }
}

export type GraphQLRequestArguments<Variables extends any = any> = {
  query: string
  variables?: Record<string, Variables>
  operationName?: string
  handleErrors?: (errors: GraphQLError[]) => void
  headers?: Record<string, any>
}

export const graphql = async <
  Variables extends any = any,
  Response extends any = any,
>({
  query,
  variables = {},
  operationName,
  handleErrors,
  headers = {},
}: GraphQLRequestArguments<Variables>): Promise<Response | void> => {
  const endpoint = (() => {
    if (env.NEXT_PUBLIC_DEPLOYMENT_TARGET === 'production')
      return env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string

    // Allow the request to be rewriten in development
    const isServer = typeof window === 'undefined'
    return `${isServer ? env.NEXT_PUBLIC_GRAPHQL_ENDPOINT : ''}/api/graphql`
  })()

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const deserialized = await response.json()

  if (!deserialized.errors)
    return operationName ? deserialized.data[operationName] : deserialized.data

  if (handleErrors) return handleErrors(deserialized.errors)

  // Don't log the error if an error handler is provided
  console.error(deserialized.errors)

  if (process.env.NEXT_PUBLIC_DEPLOYMENT_TARGET !== 'production')
    console.error(
      `Error handler not provided ${
        operationName ? `for operation ${operationName}` : `for query ${query}`
      }`,
    )
}
