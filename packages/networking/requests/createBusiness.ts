export const createBusiness = /* GraphQL */ `
  mutation CreateBusiness($data: BusinessCreateInput!) {
    createBusiness(data: $data) {
      id
      createdBy {
        id
      }

      name
      isVerified
    }
  }
`
