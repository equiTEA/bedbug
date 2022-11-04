import { graphql } from '@bedbug/networking'
import { useCallback, useEffect, useMemo } from 'react'
import { useStateIfMounted } from 'use-state-if-mounted'
import { useDebouncedState } from '../useDebouncedState'
import { rateAddressBusinessSearch } from '@bedbug/networking'

import type { Business, Rating } from '@bedbug/types'

export const useBusinessAutocompleteOptions = ({
  addressId,
  searchTerm,
}: {
  addressId: string
  searchTerm: string
}) => {
  const debouncedSearchValue = useDebouncedState(searchTerm, 500)
  const [loading, setLoading] = useStateIfMounted(false)
  const [businessOptions, setBusinessOptions] = useStateIfMounted<
    null | Business[]
  >(null)

  useEffect(() => {
    if (!searchTerm) setBusinessOptions(null)
  }, [searchTerm, setBusinessOptions])

  useEffect(() => {
    if (!debouncedSearchValue) return setBusinessOptions(null)
    ;(async () => {
      setLoading(true)

      const response = await graphql({
        query: rateAddressBusinessSearch,
        variables: {
          take: 100,
          operationName: 'businesses',
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
      setBusinessOptions(response.businesses)
    })()
  }, [addressId, setLoading, setBusinessOptions, debouncedSearchValue])

  const getBusinessRatingWithCurrentAddress = useCallback(
    (business: Business): Rating | undefined => {
      if (!business.ratings) return undefined

      /* Addresses can rated more than once; find all ratings where the addresses match and get most recent. */
      const mostRecentRating = business.ratings.reduce(
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

  const businessHasBeenPreviouslyRatedForThisAddress = useCallback(
    (business: Business): boolean =>
      !!getBusinessRatingWithCurrentAddress(business),
    [getBusinessRatingWithCurrentAddress],
  )

  const businessIsCurrentDBAForThisAddress = useCallback(
    (business: Business): boolean => {
      if (!businessHasBeenPreviouslyRatedForThisAddress(business)) return false

      const rating = getBusinessRatingWithCurrentAddress(business)
      if (!rating?.address?.ratings) return false

      /**
       * Ratings are assumed to be sorted by createdBy: 'desc'
       * for this address in the gql query, so the first
       * rating is the most recent rating for this address.
       */
      return (
        rating?.address?.ratings[0].doingBusinessAsAtDateOfRating?.id ===
          business.id ?? false
      )
    },
    [
      getBusinessRatingWithCurrentAddress,
      businessHasBeenPreviouslyRatedForThisAddress,
    ],
  )

  const sortedLandlordOptions = useMemo(() => {
    if (!businessOptions) return []

    const matches = (business: Business, searchTerm: string) =>
      business.name?.toLowerCase().includes(searchTerm.toLowerCase())

    return businessOptions.sort((a, b) => {
      const aIsCurrentLandlord = businessIsCurrentDBAForThisAddress(a)
      const bIsCurrentLandlord = businessIsCurrentDBAForThisAddress(b)
      const aWasPreviouslyRatedForThisAddress =
        businessHasBeenPreviouslyRatedForThisAddress(a)
      const bWasPreviouslyRatedForThisAddress =
        businessHasBeenPreviouslyRatedForThisAddress(b)

      /** Compute relevance weights for sort */
      let aWeight = 0,
        bWeight = 0
      if (aWasPreviouslyRatedForThisAddress) aWeight = -1
      if (aWasPreviouslyRatedForThisAddress && matches(a, searchTerm)) -2
      if (aIsCurrentLandlord) aWeight = -3
      if (aIsCurrentLandlord && matches(a, searchTerm)) aWeight = -4

      if (bWasPreviouslyRatedForThisAddress) bWeight = -1
      if (bWasPreviouslyRatedForThisAddress && matches(b, searchTerm)) -2
      if (bIsCurrentLandlord) bWeight = -3
      if (bIsCurrentLandlord && matches(b, searchTerm)) bWeight = -4

      const weightsAreEqual = aWeight === bWeight

      return weightsAreEqual
        ? (() => {
            if (!a.name || !b.name) return 0
            return a.name.localeCompare(b.name)
          })()
        : aWeight - bWeight
    })
  }, [
    searchTerm,
    businessOptions,
    businessIsCurrentDBAForThisAddress,
    businessHasBeenPreviouslyRatedForThisAddress,
  ])

  return {
    loading,
    businessIsCurrentDBAForThisAddress,
    businessOptions: sortedLandlordOptions,
    businessHasBeenPreviouslyRatedForThisAddress,
  }
}
