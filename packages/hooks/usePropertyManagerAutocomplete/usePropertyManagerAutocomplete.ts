import { graphql } from '@bedbug/networking'
import { useCallback, useEffect, useMemo } from 'react'
import { useStateIfMounted } from 'use-state-if-mounted'
import { useDebouncedState } from '../useDebouncedState'
import { rateAddressPropertyManagerSearch } from '@bedbug/networking'

import type { PropertyManagementCompany, Rating } from '@bedbug/types'

export const usePropertyManagerAutocompleteOptions = ({
  addressId,
  searchTerm,
}: {
  addressId: string
  searchTerm: string
}) => {
  const debouncedSearchValue = useDebouncedState(searchTerm, 500)
  const [loading, setLoading] = useStateIfMounted(false)
  const [propertyManagerOptions, setPropertyManagerOptions] = useStateIfMounted<
    null | PropertyManagementCompany[]
  >(null)

  useEffect(() => {
    if (!searchTerm) setPropertyManagerOptions(null)
  }, [searchTerm, setPropertyManagerOptions])

  useEffect(() => {
    if (!debouncedSearchValue) return setPropertyManagerOptions(null)
    ;(async () => {
      setLoading(true)

      const response = await graphql({
        query: rateAddressPropertyManagerSearch,
        variables: {
          take: 100,
          operationName: 'propertyManagementCompanies',
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
      setPropertyManagerOptions(response.propertyManagementCompanies)
    })()
  }, [addressId, setLoading, setPropertyManagerOptions, debouncedSearchValue])

  const getPropertyManagerRatingWithCurrentAddress = useCallback(
    (propertyManager: PropertyManagementCompany): Rating | undefined => {
      if (!propertyManager.ratings) return undefined

      /* Addresses can rated more than once; find all ratings where the addresses match and get most recent. */
      const mostRecentRating = propertyManager.ratings.reduce(
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

  const propertyManagerHasBeenPreviouslyRatedForThisAddress = useCallback(
    (propertyManager: PropertyManagementCompany): boolean =>
      !!getPropertyManagerRatingWithCurrentAddress(propertyManager),
    [getPropertyManagerRatingWithCurrentAddress],
  )

  const propertyManagerIsCurrentPropertyManagerForThisAddress = useCallback(
    (propertyManager: PropertyManagementCompany): boolean => {
      if (!propertyManagerHasBeenPreviouslyRatedForThisAddress(propertyManager))
        return false

      const rating = getPropertyManagerRatingWithCurrentAddress(propertyManager)
      if (!rating?.address?.ratings) return false

      /**
       * Ratings are assumed to be sorted by createdBy: 'desc'
       * for this address in the gql query, so the first
       * rating is the most recent rating for this address.
       */
      return (
        rating?.address?.ratings[0].propertyManagementCompanyAtDateOfRating
          ?.id === propertyManager.id ?? false
      )
    },
    [
      getPropertyManagerRatingWithCurrentAddress,
      propertyManagerHasBeenPreviouslyRatedForThisAddress,
    ],
  )

  const sortedLandlordOptions = useMemo(() => {
    if (!propertyManagerOptions) return []

    const matches = (
      propertyManager: PropertyManagementCompany,
      searchTerm: string,
    ) => propertyManager.name?.toLowerCase().includes(searchTerm.toLowerCase())

    return propertyManagerOptions.sort((a, b) => {
      const aIsCurrentLandlord =
        propertyManagerIsCurrentPropertyManagerForThisAddress(a)
      const bIsCurrentLandlord =
        propertyManagerIsCurrentPropertyManagerForThisAddress(b)
      const aWasPreviouslyRatedForThisAddress =
        propertyManagerHasBeenPreviouslyRatedForThisAddress(a)
      const bWasPreviouslyRatedForThisAddress =
        propertyManagerHasBeenPreviouslyRatedForThisAddress(b)

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
    propertyManagerOptions,
    propertyManagerIsCurrentPropertyManagerForThisAddress,
    propertyManagerHasBeenPreviouslyRatedForThisAddress,
  ])

  return {
    loading,
    propertyManagerIsCurrentPropertyManagerForThisAddress,
    propertyManagerOptions: sortedLandlordOptions,
    propertyManagerHasBeenPreviouslyRatedForThisAddress,
  }
}
