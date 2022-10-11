import {
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback,
  SyntheticEvent,
} from 'react'
import Info from '../components/Info'
import { useRouter } from 'next/router'
import Ratings from '../components/Ratings'
import { AddressDetailTabOptions, AddressDetailTabOptionsDict } from '../config'

import type { Address } from '@bedbug/types'

type Props = {
  address: Address
}

/** The sum total of vertical padding influencing the form layout  */
const VERTICAL_PADDING = 160

export const useAddressDetailTabs = ({ address }: Props) => {
  const { query, push, asPath } = useRouter()
  const headerRef = useRef<HTMLDivElement>(null)

  const [allottedHeight, setAllottedHeight] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      if (!headerRef.current) return

      setAllottedHeight(
        window.innerHeight - headerRef.current.clientHeight - VERTICAL_PADDING,
      )
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const parseTabValue = (value: number) => {
    switch (value) {
      case 1:
        return AddressDetailTabOptions.Ratings

      case 0:
      default:
        return AddressDetailTabOptions.Info
    }
  }

  const handleTabChange = useCallback(
    async (_: SyntheticEvent<Element, Event>, value: number) => {
      delete query.id

      await push(
        {
          pathname: asPath.split('?')[0],
          query: { ...query, tab: parseTabValue(value) },
        },
        undefined,
        { shallow: true },
      )
    },
    [asPath, push, query],
  )

  const currentTab: number = useMemo(() => {
    if (!query.tab) return 0
    return AddressDetailTabOptionsDict[query.tab as string]
  }, [query])

  const tabContent = useMemo(() => {
    if (!address) return null

    switch (query.tab) {
      case AddressDetailTabOptions.Ratings: {
        if (!address.ratings) return null

        return (
          <Ratings ratings={address.ratings} allottedHeight={allottedHeight} />
        )
      }

      case AddressDetailTabOptions.Info:
      default:
        return <Info address={address} allottedHeight={allottedHeight} />
    }
  }, [query, address, allottedHeight])

  return {
    currentTab,
    tabContent,
    handleTabChange,

    headerRef,
  }
}
