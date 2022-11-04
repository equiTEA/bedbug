export const rateAddressPropertyManagerSearch = /* GraphQL */ `
  query RateAddressPropertyManagerSearch(
    $where: PropertyManagementCompanyWhereInput!
    $ratingsOrderBy: [RatingOrderByInput!]!
    $take: Int
  ) {
    propertyManagementCompanies(where: $where, take: $take) {
      id
      name
      ratingsCount(where: {})
      avgRating

      ratings(orderBy: $ratingsOrderBy) {
        id
        createdAt

        address {
          id
          full
          line1
          line2
          city
          state
          zip
          lat
          lng

          ratings(orderBy: $ratingsOrderBy) {
            id
            createdAt

            address {
              id
              full
            }

            propertyManagementCompanyAtDateOfRating {
              id
              name
            }
          }
        }
      }
    }
  }
`
