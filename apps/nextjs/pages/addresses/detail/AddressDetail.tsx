import Link from 'next/link'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import { useRouter } from 'next/router'
import MuiLink from '@mui/material/Link'
import H1 from '../../../components/library/H1'
import H2 from '../../../components/library/H2'
import H3 from '../../../components/library/H3'
import { containerStyles, tabsStyles } from './styles'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import LinkTab from '../../../components/library/LinkTab/LinkTab'
import { useAddressDetailTabs } from './hooks/useAddressDetailTabs'

import type { Address } from '@bedbug/types'
import type { NextPageWithLayout } from '../../_app'

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
      ratingsCount,
      address,
    })

  const { line1, line2, line3, city, state, zip } = address

  return (
    <Box sx={containerStyles}>
      <Box ref={headerRef}>
        <Link passHref href="/">
          <MuiLink
            sx={{ mb: 3, display: 'flex', alignItems: 'center' }}
            color="secondary"
            underline="hover"
          >
            <ChevronLeftIcon sx={{ ml: -1, mr: 1 }} /> Address Search
          </MuiLink>
        </Link>

        <H1>Address Breakdown</H1>
        <Box sx={{ mb: 3 }}>
          <H2 sx={{ mb: 0 }}>{line1}</H2>
          {line2 && <H3>{line2}</H3>}
          {line3 && <H3>{line3}</H3>}
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
        <LinkTab label="Ratings" href={`${route}${query}`} />
      </Tabs>

      {tabContent}
    </Box>
  )
}

export default AddressDetail
