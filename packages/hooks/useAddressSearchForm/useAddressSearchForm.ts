import { useState, useMemo } from 'react'
import { useDebouncedState } from '../useDebouncedState'

import type { Address } from '@bedbug/types'

type UseAddressSearchHookProps = {
  initialState?: Address
  debounceInterval?: number
}

export const useAddressSearchForm = ({
  initialState = {},
  debounceInterval = 500,
}: UseAddressSearchHookProps = {}) => {
  const [line1, setLine1] = useState(initialState.line1 || '')
  const [line1Blurred, setLine1Blurred] = useState(false)
  const line1Debounced = useDebouncedState(line1, debounceInterval)

  const [line2, setLine2] = useState(initialState.line2 || '')
  const [line2Blurred, setLine2Blurred] = useState(false)
  const line2Debounced = useDebouncedState(line2, debounceInterval)

  const [city, setCity] = useState(initialState.city || '')
  const [cityBlurred, setCityBlurred] = useState(false)
  const cityDebounced = useDebouncedState(city, debounceInterval)

  const [state, setState] = useState<{ label: string; value: string } | null>(
    initialState.state
      ? { label: initialState.state, value: initialState.state }
      : null,
  )
  const [stateBlurred, setStateBlurred] = useState<boolean>(false)
  const stateDebounced = useDebouncedState(state?.value, debounceInterval)

  const [zip, setZip] = useState(initialState.zip || '')
  const [zipBlurred, setZipBlurred] = useState(false)
  const zipDebounced = useDebouncedState(zip, debounceInterval)

  const line1Error: string | null = useMemo(() => {
    if (!line1) return 'Line 1 is required'
    if (line1.length < 6) return 'Line 1 must be at least 6 characters'
    return null
  }, [line1])

  const cityError: string | null = useMemo(() => {
    if (!city) return 'City is required'
    return null
  }, [city])

  const stateError: string | null = useMemo(() => {
    if (!state?.value) return 'State is required'
    return null
  }, [state])

  const zipError: string | null = useMemo(() => {
    if (!zip) return 'Zip is required'
    if (zip.length !== 5) return 'Zip must be 5 digits'
    if (isNaN(Number(zip))) return 'Zip must be numeric'
    return null
  }, [zip])

  const errors = useMemo(
    () => ({
      line1: line1Error,
      city: cityError,
      state: stateError,
      zip: zipError,
    }),
    [line1Error, cityError, stateError, zipError],
  )

  const errorsExist = useMemo(() => {
    return Object.values(errors).some((error) => error !== null)
  }, [errors])

  return {
    line1,
    line1Blurred,
    line1Debounced,
    setLine1,
    setLine1Blurred,

    line2,
    line2Blurred,
    line2Debounced,
    setLine2,
    setLine2Blurred,

    city,
    cityBlurred,
    cityDebounced,
    setCity,
    setCityBlurred,

    state,
    stateBlurred,
    stateDebounced,
    setState,
    setStateBlurred,

    zip,
    zipBlurred,
    zipDebounced,
    setZip,
    setZipBlurred,

    errors,
    errorsExist,
  }
}
