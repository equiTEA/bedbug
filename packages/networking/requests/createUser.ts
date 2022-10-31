export const createUser = /* GraphQL */ `
  mutation createUser($data: UserCreateInput!) {
    createUser(data: $data) {
      id
      username
      email
      banned
      role
      password {
        isSet
      }
      ratings {
        id
        createdAt
        createdBy {
          id
        }
        updatedAt
        updatedBy {
          id
        }
        isDeleted
        deletedBy {
          id
        }
        address {
          id
          full
          line1
          line2
          line3
          city
          state
          zip

          mostRecentLandlord
          mostRecentDoingBusinessAs
          mostRecentPropertyManagementCompany
        }
      }
    }
  }
`
