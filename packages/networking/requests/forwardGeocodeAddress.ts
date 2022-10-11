export const forwardGeocodeAddress = /* GraphQL */ `
  query ForwardGeocode($address: String!) {
    forwardGeocode(address: $address) {
      full
      line1
      city
      state
      zip
      neighborhood
      countryCode
    }
  }
`
