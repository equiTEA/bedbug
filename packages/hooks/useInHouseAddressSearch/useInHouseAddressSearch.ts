import { searchConfig } from './config'
import { useEffect, useState } from 'react'
import { graphql, inHouseAddressSearch } from '@bedbug/networking'

import type { Address } from '@bedbug/types'

export type UseInHouseAddressSearchProps = {
  line1?: string
  line2?: string
  city?: string
  state?: string
  zip?: string
}

export const useInHouseAddressSearch = ({
  line1,
  line2,
  city,
  state,
  zip,
}: UseInHouseAddressSearchProps) => {
  const [loading, setLoading] = useState(false)

  const [results, setResults] = useState<Address[] | null>(null)
  const [resultsCount, setResultsCount] = useState<number | null>(null)

  useEffect(() => {
    ;(async () => {
      /**
       * Clear the results if the user has emptied all fields and
       * prevent the query from running with empty field values.
       */
      if (!line1 && !line2 && !city && !state && !zip) {
        setResults(null)
        setResultsCount(null)
        return
      }

      setLoading(true)

      const response = await graphql({
        query: inHouseAddressSearch,
        variables: searchConfig({
          line1: line1,
          line2: line2,
          city: city,
          state: state,
          zip: zip,
        }),
      })

      setResults(response.addresses)
      setResultsCount(response.addressesCount)
      setLoading(false)
    })()
  }, [line1, line2, city, state, zip])

  return {
    loading,
    results,
    resultsCount,
  }
}
