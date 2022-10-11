import { useEffect } from 'react'
import { useRouter } from 'next/router'

import type { Address } from '@bedbug/types'

type UseAddressQueryParamsEffectProps = Omit<Address, 'state'> & {
  state: { label: string; value: string } | null
}

export const useAddressQueryParamsEffect = ({
  line1,
  line2,
  city,
  state,
  zip,
}: UseAddressQueryParamsEffectProps) => {
  const { replace, asPath, query } = useRouter()

  useEffect(() => {
    const newQuery: { [key: string]: string } = {
      ...(line1 && { line1 }),
      ...(line2 && { line2 }),
      ...(city && { city }),
      ...(state && { state: state?.value }),
      ...(zip && { zip }),
    }

    const formHasChanged = Object.keys(newQuery).some(
      (key) => query[key] !== newQuery[key],
    )

    if (formHasChanged) {
      const merged = { ...query, ...newQuery }

      replace(
        {
          pathname: asPath.split('?')[0],
          query: merged,
        },
        undefined,
        { shallow: true },
      )
    }
  }, [line1, line2, city, state, zip, replace, asPath, query])
}
