import Info from '../components/Info'
import { useRouter } from 'next/router'
import Ratings from '../components/Ratings'
import { AddressDetailTabOptionsDict } from '../config'
import { useCallback, useMemo, useState, useRef, useEffect } from 'react'

import type { Address } from '../../../../types/data/Address'

type Props = {
  address: Address
  ratingsCount: number
}

/** The sum total of vertical padding influencing the form layout  */
const VERTICAL_PADDING = 48

export const useAddressDetailTabs = ({ address, ratingsCount }: Props) => {
  const { query, push, asPath } = useRouter()
  const headerRef = useRef<HTMLDivElement>(null)

  const [allottedHeight, setAllottedHeight] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current)
        setAllottedHeight(
          window.innerHeight -
            headerRef.current.clientHeight -
            VERTICAL_PADDING,
        )
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [headerRef?.current])

  const handleTabChange = useCallback(
    (_, value) =>
      push(
        {
          pathname: asPath,
          query: {
            tab: Object.keys(AddressDetailTabOptionsDict).find(
              (key) => AddressDetailTabOptionsDict[key] === value,
            ),
          },
        },
        undefined,
        { shallow: true },
      ),
    [],
  )

  const currentTab = useMemo(() => {
    if (!query.tab) return 0
    return AddressDetailTabOptionsDict[query.tab as string]
  }, [query])

  const tabContent = useMemo(() => {
    if (!address) return null

    switch (currentTab) {
      case 1:
        return (
          <Ratings ratings={address.ratings} allottedHeight={allottedHeight} />
        )

      case 0:
      default:
        return <Info address={address} allottedHeight={allottedHeight} />
    }
  }, [currentTab, address, allottedHeight])

  return {
    currentTab,
    tabContent,
    handleTabChange,

    headerRef,
  }
}
