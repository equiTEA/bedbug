import type { NextPageContext } from 'next'
import { graphql, authenticatedItem, GraphQLError } from '../graphql'

export const getCurrentUser = async (ctx: NextPageContext) => {
  return await graphql({
    operationName: 'authenticatedItem',
    query: authenticatedItem,
    headers: { cookie: ctx.req.headers.cookie },
    handleErrors: (errors: GraphQLError[]) => {
      console.error({ errors })
      console.error('An unknown error occurred while loading the user.')
    },
  })
}
