import Query, { typedefs as queryTypedefs } from './query'
import Mutation, { typedefs as mutationTypedefs } from './mutation'

const typedefs = /* GraphQL */ `
  ${queryTypedefs}
  ${mutationTypedefs}
`

export { Query, Mutation, typedefs }
