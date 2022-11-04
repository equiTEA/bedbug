import Box from '@mui/material/Box'
import Step from '@mui/material/Step'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import { containerStyles } from './styles'
import Checkbox from '@mui/material/Checkbox'
import DBAStep from './components/steps/DBAStep'
import RatingStep from './components/steps/RatingStep'
import { useCallback, useState, ChangeEvent } from 'react'
import LandlordStep from './components/steps/LandlordStep'
import { useAuthUser, useRateAddress } from '@bedbug/hooks'
import CircularProgress from '@mui/material/CircularProgress'
import FormControlLabel from '@mui/material/FormControlLabel'
import { graphql, updateUser, GraphQLError } from '@bedbug/networking'
import PropertyManagerStep from './components/steps/PropertyManagerStep'
import { H1, H2, H3, Card, Body1, BackLink, VerticalStepper } from '@bedbug/ui'
import { sharedCheckboxLabelStyles } from '../../../../styles/shared/checkboxStyles'
import { sharedAnimatedContainerStyles } from '../../../../styles/shared/animatedContainerStyles'

import type { Address } from '@bedbug/types'
import type { NextPageWithLayout } from '../../../_app.page'

type Props = {
  address: Address
}

const RateAddress: NextPageWithLayout<Props> = ({
  address: { id, line1, line2, line3, city, state, zip },
}) => {
  const { push } = useRouter()
  const { user } = useAuthUser()

  const {
    editingRating,
    stepper: { activeStep },
  } = useRateAddress()

  const [isEnrolledInAddressModeration, setIsEnrolledInAddressModeration] =
    useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAddressModerationEnrollment = useCallback(async () => {
    setLoading(true)

    const response = await graphql({
      query: updateUser,
      variables: {
        where: {
          id: user.id,
        },
        data: {
          isEnrolledInAddressModeration,
        },
      },
      handleErrors: (errors: GraphQLError[]) => {
        if (process.env.NEXT_PUBLIC_DEPLOYMENT_TARGET !== 'production')
          console.error({ errors })

        setError('An unexpected error occurred.')
      },
    })

    setLoading(false)

    if (!response.errors) push(`/addresses/${id}?tab=Ratings`)
  }, [id, user, push, isEnrolledInAddressModeration])

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

              {!user.isEnrolledInAddressModeration && (
                <Card sx={{ px: 2, mb: 3 }}>
                  <H3 sx={{ mb: 1 }}>
                    Help us help renters by policing this address
                  </H3>
                  <Body1 sx={{ mb: 2 }}>
                    This app is built to give renters a leg up against
                    exploitative landlords and property managers. Our mission is
                    moot if we let them abuse the system by posting ratings
                    here.
                  </Body1>

                  <H3 sx={{ mb: 2 }}>How it works</H3>

                  <Body1>
                    1. If you opt in, <strong>we will send you an email</strong>{' '}
                    when someone submits a rating to this property.
                  </Body1>

                  <Body1>
                    2.{' '}
                    <strong>
                      You can then flag the rating for investigation
                    </strong>{' '}
                    if you suspect it was posted by a landlord trying to improve
                    their ratings, or if the rating is starkly inconsistent with
                    your experience.
                  </Body1>

                  <FormControlLabel
                    label="Opt into policing landlords at this address"
                    sx={(theme) => sharedCheckboxLabelStyles({ theme })}
                    control={
                      <Checkbox
                        color="secondary"
                        sx={(theme) => ({
                          color: theme.palette.secondary.main,
                        })}
                        checked={isEnrolledInAddressModeration}
                        onChange={(
                          _: ChangeEvent<HTMLInputElement>,
                          checked: boolean,
                        ) => setIsEnrolledInAddressModeration(checked)}
                      />
                    }
                  />
                </Card>
              )}

              <Button
                onClick={handleAddressModerationEnrollment}
                fullWidth
                variant="contained"
                color="secondary"
              >
                {loading ? (
                  <CircularProgress color="secondary" size={24} />
                ) : (
                  'Finish'
                )}
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default RateAddress
