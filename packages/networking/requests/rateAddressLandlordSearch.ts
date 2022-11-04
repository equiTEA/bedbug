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

      doingBusinessAs {
        id
        name
      }

      ratings(orderBy: $ratingsOrderBy) {
        id
        createdAt

        address {
          id

          ratings(orderBy: $ratingsOrderBy) {
            id
            createdAt

            address {
              id
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
