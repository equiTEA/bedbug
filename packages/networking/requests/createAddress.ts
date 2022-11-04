export const createAddress = /* GraphQL */ `
  mutation CreateAddress($data: AddressCreateInput!) {
    createAddress(data: $data) {
      id
      isVerified
      full
      line1
      line2
      line3
      city
      state
      zip
      countryCode
    }
  }
`
