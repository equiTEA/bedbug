import { graphql } from '@bedbug/networking'
import { useCallback, useEffect, useMemo } from 'react'
import { useStateIfMounted } from 'use-state-if-mounted'
import { useDebouncedState } from '../useDebouncedState'
import { rateAddressLandlordSearch } from '@bedbug/networking'

import type { Landlord, Rating } from '@bedbug/types'

export const useLandlordAutocompleteOptions = ({
  addressId,
  searchTerm,
}: {
  addressId: string
  searchTerm: string
}) => {
  const debouncedSearchValue = useDebouncedState(searchTerm, 500)
  const [loading, setLoading] = useStateIfMounted(false)
  const [landlordOptions, setLandlordOptions] = useStateIfMounted<
    null | Landlord[]
  >(null)

  useEffect(() => {
    if (!searchTerm) setLandlordOptions(null)
  }, [searchTerm, setLandlordOptions])

  useEffect(() => {
    if (!debouncedSearchValue) return setLandlordOptions(null)
    ;(async () => {
      setLoading(true)

      const response = await graphql({
        query: rateAddressLandlordSearch,
        variables: {
          take: 25,
          orderBy: [],
          operationName: 'landlords',
          ratingsOrderBy: [
            {
              createdAt: 'desc',
            },
          ],
          where: {
            OR: [
              { name: { contains: debouncedSearchValue, mode: 'insensitive' } },
              {
                ratings: {
                  some: { address: { id: { equals: addressId } } },
                },
              },
            ],
          },
        },
      })

      setLoading(false)
      setLandlordOptions(response.landlords)
    })()
  }, [addressId, setLoading, setLandlordOptions, debouncedSearchValue])

  const getLandlordRatingWithCurrentAddress = useCallback(
    (landlord: Landlord): Rating | undefined => {
      if (!landlord.ratings) return undefined

      /* Addresses can rated more than once; find all ratings where the addresses match and get most recent. */
      const mostRecentRating = landlord.ratings.reduce(
        (mostRecentRating: Rating | undefined, currentRating) => {
          if (!currentRating.address) return mostRecentRating
          if (currentRating.address.id !== addressId) return mostRecentRating

          /** Address is a match */
          if (!mostRecentRating) return currentRating

          /** Can't compare (shouldn't happen unless these fields aren't fetched) */
          if (!mostRecentRating.createdAt || !currentRating.createdAt)
            return currentRating

          return mostRecentRating.createdAt > currentRating.createdAt
            ? mostRecentRating
            : currentRating
        },
        undefined,
      )

      return mostRecentRating
    },
    [addressId],
  )

  const landlordHasBeenPreviouslyRatedForThisAddress = useCallback(
    (landlord: Landlord): boolean =>
      !!getLandlordRatingWithCurrentAddress(landlord),
    [getLandlordRatingWithCurrentAddress],
  )

  const landlordIsCurrentLandlordForThisAddress = useCallback(
    (landlord: Landlord): boolean => {
      if (!landlordHasBeenPreviouslyRatedForThisAddress(landlord)) return false

      const rating = getLandlordRatingWithCurrentAddress(landlord)
      if (!rating?.address?.ratings) return false

      /**
       * Ratings are assumed to be sorted by createdBy: 'desc'
       * for this address in the gql query, so the first
       * rating is the most recent rating for this address.
       */
      return (
        rating?.address?.ratings[0].landlordAtDateOfRating?.id ===
          landlord.id ?? false
      )
    },
    [
      getLandlordRatingWithCurrentAddress,
      landlordHasBeenPreviouslyRatedForThisAddress,
    ],
  )

  const sortedLandlordOptions = useMemo(() => {
    if (!landlordOptions) return []

    return landlordOptions.sort((a, b) => {
      const aIsCurrentLandlord = landlordIsCurrentLandlordForThisAddress(a)
      const bIsCurrentLandlord = landlordIsCurrentLandlordForThisAddress(b)
      const aWasPreviouslyRatedForThisAddress =
        landlordHasBeenPreviouslyRatedForThisAddress(a)
      const bWasPreviouslyRatedForThisAddress =
        landlordHasBeenPreviouslyRatedForThisAddress(b)

      let aWeight = 0,
        bWeight = 0
      if (aWasPreviouslyRatedForThisAddress) aWeight = -1
      if (aIsCurrentLandlord) aWeight = -2

      if (bWasPreviouslyRatedForThisAddress) bWeight = -1
      if (bIsCurrentLandlord) bWeight = -2

      const weightsAreEqual = aWeight === bWeight

      return weightsAreEqual
        ? (() => {
            if (!a.name || !b.name) return 0
            return a.name.localeCompare(b.name)
          })()
        : aWeight - bWeight
    })
  }, [
    landlordOptions,
    landlordIsCurrentLandlordForThisAddress,
    landlordHasBeenPreviouslyRatedForThisAddress,
  ])

  return {
    loading,
    landlordOptions: sortedLandlordOptions,
    landlordIsCurrentLandlordForThisAddress,
    landlordHasBeenPreviouslyRatedForThisAddress,
  }
}
