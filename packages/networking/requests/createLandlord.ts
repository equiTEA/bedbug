export const createLandlord = /* GraphQL */ `
  mutation CreateLandlord($data: LandlordCreateInput!) {
    createLandlord(data: $data) {
      id
      createdBy {
        id
      }

      name
      isVerified
    }
  }
`
