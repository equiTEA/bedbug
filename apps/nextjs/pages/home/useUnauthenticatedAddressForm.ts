import { useState, useMemo, useEffect } from 'react'
import { graphql } from '../../graphql'
import { inHouseAddressSearch } from '../../graphql/inHouseAddressSearch'
import { useDebouncedState } from '../../hooks/useDebouncedState'
import { searchConfig, DEBOUNCE_INTERVAL } from './config'

import type { Address } from '@bedbug/types'

export const useUnauthenticatedAddressForm = () => {
  const [line1, setLine1] = useState('')
  const line1Debounced = useDebouncedState(line1, DEBOUNCE_INTERVAL)

  const [line2, setLine2] = useState('')
  const line2Debounced = useDebouncedState(line2, DEBOUNCE_INTERVAL)

  const [city, setCity] = useState('')
  const cityDebounced = useDebouncedState(city, DEBOUNCE_INTERVAL)

  const [state, setState] = useState<{ label: string; value: string } | null>(
    null,
  )
  const stateDebounced = useDebouncedState(state?.value, DEBOUNCE_INTERVAL)

  const [zip, setZip] = useState('')
  const zipDebounced = useDebouncedState(zip, DEBOUNCE_INTERVAL)

  const [loading, setLoading] = useState(false)

  const [results, setResults] = useState<Address[] | null>(null)
  const [resultsCount, setResultsCount] = useState<number | null>(null)

  useEffect(() => {
    ;(async () => {
      /**
       * Clear the results if the user has emptied all fields and
       * prevent the query from running with empty field values.
       */
      if (
        !line1Debounced &&
        !line2Debounced &&
        !cityDebounced &&
        !stateDebounced &&
        !zipDebounced
      ) {
        setResults(null)
        setResultsCount(null)
        return
      }

      setLoading(true)

      const response = await graphql({
        query: inHouseAddressSearch,
        variables: searchConfig({
          line1: line1Debounced,
          line2: line2Debounced,
          city: cityDebounced,
          state: stateDebounced,
          zip: zipDebounced,
        }),
      })

      setResults(response.addresses)
      setResultsCount(response.addressesCount)
      setLoading(false)
    })()
  }, [
    line1Debounced,
    line2Debounced,
    cityDebounced,
    stateDebounced,
    zipDebounced,
  ])

  return {
    line1,
    setLine1,

    line2,
    setLine2,

    city,
    setCity,

    state,
    setState,

    zip,
    setZip,

    loading,
    results,
    resultsCount,
  }
}
