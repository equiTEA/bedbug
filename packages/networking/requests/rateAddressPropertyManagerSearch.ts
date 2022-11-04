export const rateAddressPropertyManagerSearch = /* GraphQL */ `
  query RateAddressPropertyManagerSearch(
    $where: PropertyManagementCompanyWhereInput!
    $ratingsOrderBy: [RatingOrderByInput!]!
    $take: Int
  ) {
    propertyManagementCompanies(where: $where, take: $take) {
      id
      name

      ratings(orderBy: $ratingsOrderBy) {
        id
        createdAt

        address {
          id
          line1
          line2
          city
          state

          ratings(orderBy: $ratingsOrderBy) {
            id
            createdAt

            address {
              id
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
