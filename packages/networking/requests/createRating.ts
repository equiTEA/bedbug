export const createRating = /* GraphQL */ `
  mutation CreateRating($data: RatingCreateInput!) {
    createRating(data: $data) {
      id
      createdAt
      sentiment
      body
      rentPrice

      createdBy {
        id
      }
    }
  }
`
