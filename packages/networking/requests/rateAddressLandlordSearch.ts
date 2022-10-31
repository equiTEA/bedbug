export const rateAddressLandlordSearch = /* GraphQL */ `
  query RateAddressLandlordSearch(
    $where: LandlordWhereInput!
    $orderBy: [LandlordOrderByInput!]!
    $ratingsOrderBy: [RatingOrderByInput!]!
    $take: Int
  ) {
    landlords(where: $where, orderBy: $orderBy, take: $take) {
      id
      name
      ratingsCount(where: {})
      avgRating

      doingBusinessAs {
        id
        name
      }

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

            landlordAtDateOfRating {
              id
              name
            }
          }
        }
      }
    }
  }
`
