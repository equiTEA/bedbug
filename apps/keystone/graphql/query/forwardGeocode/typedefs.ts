export const typedefs = /* GraphQL */ `
  type ForwardGeocodeResult {
    latitude: Float!
    longitude: Float!

    full: String!

    line1: String!
    city: String!
    state: String!
    zip: String!

    """
    Supplemental /  Nice to have
    """
    neighborhood: String
    countryCode: String!
  }
`
