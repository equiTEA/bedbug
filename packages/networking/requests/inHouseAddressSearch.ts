export const inHouseAddressSearch = /* GraphQL */ `
  query addresses(
    $where: AddressWhereInput!
    $orderBy: [AddressOrderByInput!]!
    $take: Int
  ) {
    addressesCount(where: $where)

    addresses(where: $where, orderBy: $orderBy, take: $take) {
      id
      isVerified

      full
      line1
      line2
      line3
      city
      state
      zip

      avgRating
      ratingCount

      mostRecentLandlord
      mostRecentDoingBusinessAs
      mostRecentPropertyManagementCompany
    }
  }
`
