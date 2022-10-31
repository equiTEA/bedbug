export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $where: RatingWhereUniqueInput!
    $data: RatingUpdateInput!
  ) {
    updateRating(where: $where, data: $data) {
      id
      createdAt
      sentiment
      body
      rentPrice

      createdBy {
        id
      }

      landlordAtDateOfRating {
        id
        name
      }

      doingBusinessAsAtDateOfRating {
        id
        name
      }

      propertyManagementCompanyAtDateOfRating {
        id
        name
      }
    }
  }
`
