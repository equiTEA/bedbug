import { forwardRef } from 'react'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import { containerStyles } from './styles'
import { H2, H3, Card, Body1, RatingIcon } from '@bedbug/ui'

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
        avgRating,
      },
    }: Props,
    ref,
  ) => {
    return (
      <Fade in appear>
        <Box
          sx={(theme) => containerStyles({ allottedHeight, theme })}
          ref={ref}
        >
          {/* Rating */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <H3 sx={{ mb: 0 }}>Avg Rating:</H3>
            </Box>

            <Box>
              {avgRating ? (
                <RatingIcon size={24} rating={avgRating} />
              ) : (
                'Not Yet Rated'
              )}
            </Box>
          </Box>

          {/* Rent Price */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <H3 sx={{ mb: 0 }}>Rent Price:</H3>
              <Body1 sx={{ mb: 2 }}>(at time of last rating)</Body1>
            </Box>

            <Box>
              <H2>${mostRecentRentPrice}</H2>
            </Box>
          </Box>

          {/* Landlord Info */}
          <Card sx={{ mt: 3 }}>
            <Card.Heading sx={{ px: 2 }}>Landlord Info</Card.Heading>
            <Body1 sx={{ px: 2 }}>
              The landlord at the time of the most recent rating (the property
              may have switched hands since then).
            </Body1>
            <Card.Divider />

            {mostRecentLandlord ? (
              <>
                <Card.SectionHeading sx={{ px: 2 }}>
                  Landlord Name
                </Card.SectionHeading>
                <H3 sx={{ mb: 0, px: 2 }}>{mostRecentLandlord.name}</H3>
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

          {/* Landlord Doing Business As Info */}
          <Card>
            <Card.Heading sx={{ px: 2 }}>Business Info</Card.Heading>
            <Body1 sx={{ px: 2 }}>
              Landlords limit their liability by operating as an LLC or
              corporation.
            </Body1>
            <Card.Divider />

            {mostRecentDoingBusinessAs ? (
              <>
                <Card.SectionHeading sx={{ px: 2 }}>
                  Doing Business As
                </Card.SectionHeading>
                <H3 sx={{ mb: 0, px: 2 }}>{mostRecentDoingBusinessAs.name}</H3>
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

          {/* Property Manager Info */}
          <Card>
            <Card.Heading sx={{ px: 2 }}>Property Manager Info</Card.Heading>
            <Body1 sx={{ px: 2 }}>
              The property manager at the time of the most recent rating (the
              landlord may have switched property managers since then).
            </Body1>
            <Card.Divider />

            {mostRecentPropertyManagementCompany ? (
              <>
                <Card.SectionHeading sx={{ px: 2 }}>
                  Property Management Company
                </Card.SectionHeading>
                <H3 sx={{ mb: 0, px: 2 }}>
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
