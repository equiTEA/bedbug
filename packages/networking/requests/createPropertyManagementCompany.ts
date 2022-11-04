export const createPropertyManagementCompany = /* GraphQL */ `
  mutation CreatePropertyManagementCompany(
    $data: PropertyManagementCompanyCreateInput!
  ) {
    createPropertyManagementCompany(data: $data) {
      id
      createdBy {
        id
      }

      name
      isVerified
    }
  }
`
