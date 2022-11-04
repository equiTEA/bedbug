export const rateAddressBusinessSearch = /* GraphQL */ `
  query RateAddressBusinessSearch(
    $where: BusinessWhereInput!
    $ratingsOrderBy: [RatingOrderByInput!]!
    $take: Int
  ) {
    businesses(where: $where, take: $take) {
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
