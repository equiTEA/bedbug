export const addressDetail = /* GraphQL */ `
  query RatingsForAddress(
    $where: AddressWhereUniqueInput!
    $ratingsCountWhere: RatingWhereInput!
  ) {
    ratingsCount(where: $ratingsCountWhere)

    address(where: $where) {
      id
      full

      line1
      line2
      line3
      city
      state
      zip

      avgRating

      createdBy {
        id
        username
      }
      createdAt

      ratings {
        id

        createdBy {
          id
          username
        }
        createdAt

        landlordAtDateOfRating {
          id
          name
        }

        propertyManagementCompanyAtDateOfRating {
          id
          name
        }

        doingBusinessAsAtDateOfRating {
          id
          name
        }

        sentiment
      }

      mostRecentLandlord
      mostRecentDoingBusinessAs
      mostRecentPropertyManagementCompany
    }
  }
`
