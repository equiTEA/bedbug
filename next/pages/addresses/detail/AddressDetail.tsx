import { useCallback, useMemo } from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Button from '@mui/material/Button'
import H1 from '../../../components/library/H1'
import H2 from '../../../components/library/H2'
import H3 from '../../../components/library/H3'
import Card from '../../../components/library/Card'
import Body1 from '../../../components/library/Body1'
import LinkTab from '../../../components/library/LinkTab/LinkTab'

import type { Address } from '../../../types/data/Address'
import type { NextPageWithLayout } from '../../_app'
import { useRouter } from 'next/router'
import { AddressDetailTabOptions } from './config'
import { dividerColor } from '../../../styles/shared/dividerStyles'

type Props = {
  address: Address
  ratingsCount: number
}

const AddressDetail: NextPageWithLayout<Props> = ({
  address: {
    line1,
    line2,
    line3,
    city,
    state,
    zip,
    mostRecentLandlord,
    mostRecentDoingBusinessAs,
    mostRecentPropertyManagementCompany,
  },
  ratingsCount,
}: Props) => {
  const { query, route, push } = useRouter()

  const handleTabChange = useCallback(async (_, value) => {
    console.log({ value })
    // await push(`${route}?tab=${AddressDetailTabOptions.Ratings}`)
  }, [])

  const currentTab = useMemo(() => {
    switch (query.tab) {
      case AddressDetailTabOptions.Ratings:
        return 1
      default:
        return 0
    }
  }, [query])

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '750px',
        py: 3,
        px: 1,
        '& .card': { mb: 3 },
      }}
    >
      <H1>Address Breakdown</H1>
      <Box sx={{ mb: 3 }}>
        <H2 sx={{ mb: 0 }}>{line1}</H2>
        {line2 && <H3>{line2}</H3>}
        {line3 && <H3>{line3}</H3>}
        <H3>
          {city}, {state} {zip}
        </H3>
      </Box>

      <Tabs
        sx={{
          mb: 3,
          color: '#fff',
          '& .MuiButtonBase-root:not(.Mui-selected)': { color: dividerColor },
        }}
        indicatorColor="secondary"
        textColor="secondary"
        value={currentTab}
        onChange={handleTabChange}
      >
        <LinkTab label="Address Info" href={`${route}${query}`} />
        <LinkTab label="Ratings" href={`${route}${query}`} />
      </Tabs>

      <Card>
        <Card.Heading>Landlord Info</Card.Heading>
        <Body1>
          The landlord at the time of the most recent rating (the property may
          have switched hands since then).
        </Body1>
        <Card.Divider />

        {mostRecentLandlord ? (
          <>
            <Card.SectionHeading>Landlord Name</Card.SectionHeading>
            <H2 sx={{ mb: 0 }}>{mostRecentLandlord.name}</H2>
          </>
        ) : (
          <>
            <Card.DataPointLabel sx={{ mb: 1 }}>
              No landlord info available
            </Card.DataPointLabel>

            <Body1 sx={{ mb: 0 }}>
              Do you know the current landlord for this property?{' '}
              <Button sx={{ height: '30px' }} color="secondary" variant="text">
                Let us know
              </Button>
            </Body1>
          </>
        )}
      </Card>

      <Card>
        <Card.Heading>Business Info</Card.Heading>
        <Body1>
          Landlords limit their liability by operating as an LLC or corporation.
        </Body1>
        <Card.Divider />

        {mostRecentDoingBusinessAs ? (
          <>
            <Card.SectionHeading>Doing Business As</Card.SectionHeading>
            <H2 sx={{ mb: 0 }}>{mostRecentDoingBusinessAs.name}</H2>
          </>
        ) : (
          <>
            <Card.DataPointLabel sx={{ mb: 1 }}>
              No landlord business info available
            </Card.DataPointLabel>

            <Body1 sx={{ mb: 0 }}>
              Do you know what company / companies the landlord operates as?{' '}
              <Button sx={{ height: '24px' }} color="secondary" variant="text">
                Let us know
              </Button>
            </Body1>
          </>
        )}
      </Card>

      <Card>
        <Card.Heading>Property Manager Info</Card.Heading>
        <Body1>
          The property manager at the time of the most recent rating (the
          landlord may have switched property managers since then).
        </Body1>
        <Card.Divider />

        {mostRecentPropertyManagementCompany ? (
          <>
            <Card.SectionHeading>
              Property Management Company
            </Card.SectionHeading>
            <H2 sx={{ mb: 0 }}>{mostRecentPropertyManagementCompany.name}</H2>
          </>
        ) : (
          <>
            <Card.DataPointLabel sx={{ mb: 1 }}>
              No property manager info available
            </Card.DataPointLabel>

            <Body1 sx={{ mb: 0 }}>
              Do you know the current property manager for this property?{' '}
              <Button sx={{ height: '24px' }} color="secondary" variant="text">
                Let us know
              </Button>
            </Body1>
          </>
        )}
      </Card>
    </Box>
  )
}

export default AddressDetail
