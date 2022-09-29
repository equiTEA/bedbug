import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import { useRouter } from 'next/router'
import H1 from '../../../components/library/H1'
import H2 from '../../../components/library/H2'
import { containerStyles, tabsStyles } from './styles'
import LinkTab from '../../../components/library/LinkTab/LinkTab'
import { useAddressDetailTabs } from './hooks/useAddressDetailTabs'

import type { NextPageWithLayout } from '../../_app'
import type { Address } from '../../../types/data/Address'

type Props = {
  address: Address
  ratingsCount: number
}

const AddressDetail: NextPageWithLayout<Props> = ({
  address,
  ratingsCount,
}: Props) => {
  const { route, query } = useRouter()

  const { currentTab, tabContent, handleTabChange, headerRef } =
    useAddressDetailTabs({
      address,
      ratingsCount,
    })

  if (!address) return null
  const { line1, line2, line3, city, state, zip } = address

  return (
    <Box sx={containerStyles}>
      <Box ref={headerRef}>
        <H1>Address Breakdown</H1>
        <Box sx={{ mb: 3 }}>
          <H2 sx={{ mb: 0 }}>{line1}</H2>
          {line2 && <H2>{line2}</H2>}
          {line3 && <H2>{line3}</H2>}
          <H2>
            {city}, {state} {zip}
          </H2>
        </Box>

        <Tabs
          indicatorColor="secondary"
          textColor="secondary"
          value={currentTab}
          onChange={handleTabChange}
          sx={(theme) => tabsStyles(theme)}
        >
          <LinkTab label="Address Info" href={`${route}${query}`} />
          <LinkTab
            label={`Ratings (${ratingsCount})`}
            href={`${route}${query}`}
          />
        </Tabs>
      </Box>

      {tabContent}
    </Box>
  )
}

export default AddressDetail
