export const authenticatedItem = /* GraphQL */ `
  query authenticatedItem {
    authenticatedItem {
      ... on User {
        id
        banned
        username
        email
        role
        isEnrolledInAddressModeration
      }
    }
  }
`
