export const authenticateUserWithPassword = /* GraphQL */ `
  mutation authenticateUserWithPassword($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
        }
      }

      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`
