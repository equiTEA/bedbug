export const rateAddressBusinessSearch = /* GraphQL */ `
  query RateAddressBusinessSearch(
    $where: BusinessWhereInput!
    $ratingsOrderBy: [RatingOrderByInput!]!
    $take: Int
  ) {
    businesses(where: $where, take: $take) {
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
          latitude
          longitude

          ratings(orderBy: $ratingsOrderBy) {
            id
            createdAt

            address {
              id
              full
            }

            doingBusinessAsAtDateOfRating {
              id
              name
            }
          }
        }
      }
    }
  }
`
