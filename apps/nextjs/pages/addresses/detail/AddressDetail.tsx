import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import { useRouter } from 'next/router'
import { containerStyles, tabsStyles } from './styles'
import { H1, H2, H3, LinkTab, BackLink } from '@bedbug/ui'
import { useAddressDetailTabs } from './hooks/useAddressDetailTabs'
import { sharedAnimatedContainerStyles } from '../../../styles/shared/animatedContainerStyles'

import type { Address } from '@bedbug/types'
import type { NextPageWithLayout } from '../../_app.page'

type Props = {
  address: Address
  ratingsCount: number
}

const AddressDetail: NextPageWithLayout<Props> = ({
  ratingsCount,
  address,
}: Props) => {
  const { query, route } = useRouter()

  const { headerRef, tabContent, handleTabChange, currentTab } =
    useAddressDetailTabs({
      address,
    })

  const { line1, line2, line3, city, state, zip } = address

  return (
    <Box
      sx={(theme) =>
        sharedAnimatedContainerStyles({ theme, sx: { maxWidth: '400px' } })
      }
    >
      <Box sx={(theme) => containerStyles({ theme })}>
        <Box ref={headerRef}>
          <BackLink
            href="/"
            color="secondary"
            underline="hover"
            linkText="Address Search"
          />

          <H1>Address Breakdown</H1>
          <Box sx={{ mb: 3 }}>
            <H2 sx={{ mb: 0 }}>{line1}</H2>
            {line2 && <H3 sx={{ mb: 0 }}>{line2}</H3>}
            {line3 && <H3 sx={{ mb: 0 }}>{line3}</H3>}
            <H3>
              {city}, {state} {zip}
            </H3>
          </Box>
        </Box>

        <Tabs
          sx={(theme) => tabsStyles({ theme })}
          indicatorColor="secondary"
          textColor="secondary"
          value={currentTab}
          onChange={handleTabChange}
        >
          <LinkTab label="Address Info" href={`${route}${query}`} />
          <LinkTab
            href={`${route}${query}`}
            label={`Ratings (${ratingsCount})`}
          />
        </Tabs>

        {tabContent}
      </Box>
    </Box>
  )
}

export default AddressDetail
