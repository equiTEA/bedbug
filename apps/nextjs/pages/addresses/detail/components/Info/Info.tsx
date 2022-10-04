import { forwardRef } from 'react'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import H2 from '../../../../../components/library/H2'
import H3 from '../../../../../components/library/H3'
import Card from '../../../../../components/library/Card'
import Body1 from '../../../../../components/library/Body1'
import { containerStyles } from './styles'

import type { Address } from '@bedbug/types'

type Props = {
  /** The Address to render */
  address: Address

  /** Allotted vertical space for layout */
  allottedHeight: number
}

export const Info = forwardRef(
  (
    {
      allottedHeight,
      address: {
        mostRecentLandlord,
        mostRecentDoingBusinessAs,
        mostRecentPropertyManagementCompany,
        mostRecentRentPrice,
      },
    }: Props,
    ref,
  ) => {
    return (
      <Fade in appear>
        <Box sx={containerStyles({ allottedHeight })} ref={ref}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <H3 sx={{ mb: 0 }}>Rent Price:</H3>
              <Body1 sx={{ mb: 2 }}>(at time of last rating)</Body1>
            </Box>

            <Box>
              <H2>${mostRecentRentPrice}</H2>
            </Box>
          </Box>

          <Card sx={{ mt: 3 }}>
            <Card.Heading>Landlord Info</Card.Heading>
            <Body1>
              The landlord at the time of the most recent rating (the property
              may have switched hands since then).
            </Body1>
            <Card.Divider />

            {mostRecentLandlord ? (
              <>
                <Card.SectionHeading>Landlord Name</Card.SectionHeading>
                <H3 sx={{ mb: 0 }}>{mostRecentLandlord.name}</H3>
              </>
            ) : (
              <>
                <Card.DataPointLabel sx={{ mb: 1 }}>
                  No landlord info available
                </Card.DataPointLabel>

                <Body1 sx={{ mb: 0 }}>
                  Do you know the current landlord for this property?{' '}
                  <Button
                    sx={{ height: '30px' }}
                    color="secondary"
                    variant="text"
                  >
                    Let us know
                  </Button>
                </Body1>
              </>
            )}
          </Card>

          <Card>
            <Card.Heading>Business Info</Card.Heading>
            <Body1>
              Landlords limit their liability by operating as an LLC or
              corporation.
            </Body1>
            <Card.Divider />

            {mostRecentDoingBusinessAs ? (
              <>
                <Card.SectionHeading>Doing Business As</Card.SectionHeading>
                <H3 sx={{ mb: 0 }}>{mostRecentDoingBusinessAs.name}</H3>
              </>
            ) : (
              <>
                <Card.DataPointLabel sx={{ mb: 1 }}>
                  No landlord business info available
                </Card.DataPointLabel>

                <Body1 sx={{ mb: 0 }}>
                  Do you know what company / companies the landlord operates as?{' '}
                  <Button
                    sx={{ height: '24px' }}
                    color="secondary"
                    variant="text"
                  >
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
                <H3 sx={{ mb: 0 }}>
                  {mostRecentPropertyManagementCompany.name}
                </H3>
              </>
            ) : (
              <>
                <Card.DataPointLabel sx={{ mb: 1 }}>
                  No property manager info available
                </Card.DataPointLabel>

                <Body1 sx={{ mb: 0 }}>
                  Do you know the current property manager for this property?{' '}
                  <Button
                    sx={{ height: '24px' }}
                    color="secondary"
                    variant="text"
                  >
                    Let us know
                  </Button>
                </Body1>
              </>
            )}
          </Card>
        </Box>
      </Fade>
    )
  },
)

Info.displayName = 'Info'

export default Info
