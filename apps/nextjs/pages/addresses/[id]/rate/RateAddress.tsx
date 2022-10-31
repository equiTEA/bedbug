import Link from 'next/link'
import Box from '@mui/material/Box'
import Step from '@mui/material/Step'
import Button from '@mui/material/Button'
import { containerStyles } from './styles'
import { useRateAddress } from '@bedbug/hooks'
import DBAStep from './components/steps/DBAStep'
import RatingStep from './components/steps/RatingStep'
import LandlordStep from './components/steps/LandlordStep'
import { H1, H2, H3, Body1, BackLink, VerticalStepper } from '@bedbug/ui'
import PropertyManagerStep from './components/steps/PropertyManagerStep'
import { sharedAnimatedContainerStyles } from '../../../../styles/shared/animatedContainerStyles'

import type { Address } from '@bedbug/types'
import type { NextPageWithLayout } from '../../../_app.page'

type Props = {
  address: Address
}

const RateAddress: NextPageWithLayout<Props> = ({
  address: { id, line1, line2, line3, city, state, zip },
}) => {
  const {
    editingRating,
    stepper: { activeStep },
  } = useRateAddress()

  return (
    <Box sx={(theme) => sharedAnimatedContainerStyles({ theme })}>
      <Box sx={(theme) => containerStyles({ theme })}>
        <Box sx={{ pb: 4, m: '0 auto', maxWidth: '400px' }}>
          <BackLink
            color="secondary"
            underline="hover"
            href={`/addresses/${id}`}
            linkText="Address Details"
          />

          <H1>{!!editingRating ? 'Edit Address Rating' : 'Rate Address'}</H1>
          <Box sx={{ mb: 3 }}>
            <H2 sx={{ mb: 0 }}>{line1}</H2>
            {line2 && <H3 sx={{ mb: 0 }}>{line2}</H3>}
            {line3 && <H3 sx={{ mb: 0 }}>{line3}</H3>}
            <H3>
              {city}, {state} {zip}
            </H3>
          </Box>

          {!!editingRating && (
            <Body1 sx={{ mb: 3 }}>
              You are currently editing a rating you previously created.
            </Body1>
          )}

          <VerticalStepper activeStep={activeStep}>
            <Step>
              <RatingStep />
            </Step>
            <Step>
              <LandlordStep />
            </Step>
            <Step>
              <DBAStep />
            </Step>
            <Step>
              <PropertyManagerStep />
            </Step>
          </VerticalStepper>

          {activeStep === 4 && (
            <>
              <Body1 sx={{ mt: 3, mb: 2 }}>
                Thank you for rating this address! Your rating is now visible to
                anyone viewing the address.
              </Body1>
              <Link href={`/addresses/${id}?tab=Ratings`} passHref>
                <Button variant="contained" color="secondary">
                  View Rating In Address Details
                </Button>
              </Link>
            </>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default RateAddress
