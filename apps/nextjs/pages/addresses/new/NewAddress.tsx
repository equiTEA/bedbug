import Link from 'next/link'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Step from '@mui/material/Step'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import StepContent from '@mui/material/StepContent'
import { AuthUserContextProvider } from '@bedbug/hooks'
import { useState, ReactElement, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { Card, H1, H3, Body1, VerticalStepper } from '@bedbug/ui'
import { graphql, createAddress, GraphQLError } from '@bedbug/networking'
import NewAddressValidationForm from './components/NewAddressValidationForm'
import AddressValidationResults from '../../../assemblies/AddressValidationResults'
import AuthenticatedLayout from '../../../components/layouts/Authenticated/Authenticated'
import { sharedAnimatedContainerStyles } from '../../../styles/shared/animatedContainerStyles'
import ErrorIcon from '@mui/icons-material/ErrorOutlineOutlined'

import type { Address } from '@bedbug/types'

const StepIconComponent = ({ error }: { error: boolean }) => (
  <>
    {error ? (
      <ErrorIcon
        sx={(theme) => ({
          color: theme.palette.error.main,
        })}
      />
    ) : (
      <CircularProgress sx={{ ml: '-4px' }} size={32} />
    )}
  </>
)

const NewAddress = () => {
  const theme = useTheme()
  const { push, query } = useRouter()

  const [activeStep, setActiveStep] = useState(0)
  const [validationResults, setValidationResults] = useState<Address[] | null>(
    null,
  )

  const [userEnteredAddress, setUserEnteredAddress] = useState<Address | null>(
    null,
  )

  const [validatedAddress, setValidatedAddress] = useState<Address | null>(null)

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

  const [formError, setFormError] = useState<string | null>(null)

  useEffect(() => {
    setFormError(null)
  }, [validatedAddress])

  /** Submit the address when the user confirms their selection */
  useEffect(() => {
    if (!validatedAddress) return
    ;(async () => {
      const result = await graphql({
        query: createAddress,
        operationName: 'createAddress',
        variables: {
          data: {
            full: validatedAddress?.full,
            line1: validatedAddress?.line1,
            line2: validatedAddress?.line2,
            city: validatedAddress?.city,
            state: validatedAddress?.state,
            zip: validatedAddress?.zip,
            countryCode: validatedAddress?.countryCode,
            isVerified: validatedAddress?.isVerified,
            latitude: validatedAddress?.latitude,
            longitude: validatedAddress?.longitude,
          },
        },
        handleErrors: (errors: GraphQLError[]) => {
          // Unique constraint violation: https://www.prisma.io/docs/reference/api-reference/error-reference
          const uniqueConstraintViolation = errors.find(
            ({ extensions }) => extensions.prisma.code === 'P2002',
          )

          if (uniqueConstraintViolation)
            return setFormError('This address already exists.')

          setFormError('An unexpected error occurred')
        },
      })

      if (!result) return
      push(`/addresses/${result?.id}/rate`)
    })()
  }, [validatedAddress, push])

  return (
    <Box
      sx={(theme) =>
        sharedAnimatedContainerStyles({ theme, sx: { maxWidth: '400px' } })
      }
    >
      <Box sx={{ py: 3, minHeight: '100vh' }}>
        <H1>Create New Address</H1>
        <Body1 sx={{ mb: 2 }}>
          Add a new address to our system, so that you and other tenants can
          rate it.
        </Body1>

        <VerticalStepper activeStep={activeStep}>
          <Step>
            <VerticalStepper.StepLabel>
              <H3>Enter Address</H3>
              {userEnteredAddress && (
                <Body1 sx={{ mb: 0 }}>{userEnteredAddress.full}</Body1>
              )}
            </VerticalStepper.StepLabel>
            <StepContent>
              <Body1 sx={{ mb: 2 }} gutterBottom>
                We&apos;ve populated your previous search, but please take a
                moment to fill out all fields and ensure the address is complete
                for future renters.
              </Body1>
              <NewAddressValidationForm
                setUserEnteredAddress={setUserEnteredAddress}
                onReceiveValidationResults={(results) => {
                  setValidationResults(results)
                  handleNext()
                }}
              />
            </StepContent>
          </Step>

          <Step>
            <VerticalStepper.StepLabel>
              <H3>Validate Address</H3>
            </VerticalStepper.StepLabel>
            <StepContent>
              <Box sx={(theme) => sharedAnimatedContainerStyles({ theme })}>
                {userEnteredAddress && (
                  <AddressValidationResults
                    onBack={handleBack}
                    results={validationResults}
                    userEnteredAddress={userEnteredAddress}
                    resultsCount={validationResults?.length ?? 0}
                    onConfirmSelection={(address) => {
                      setValidatedAddress(address)
                      handleNext()
                    }}
                  />
                )}
              </Box>
            </StepContent>
          </Step>

          {validatedAddress && (
            <Step>
              <VerticalStepper.StepLabel
                StepIconComponent={() =>
                  StepIconComponent({ error: !!formError })
                }
              >
                <H3>Creating Address</H3>
                {validatedAddress && (
                  <Body1 sx={{ mb: 0 }}>{validatedAddress.full}</Body1>
                )}
              </VerticalStepper.StepLabel>
            </Step>
          )}

          {formError && (
            <Fade in={true} timeout={1000} style={{ transitionDelay: '200ms' }}>
              <Box sx={{ mt: 2 }}>
                <Card sx={{ px: 2, color: theme.palette.primary.main }}>
                  <Body1 sx={{ mb: 2, color: 'primary.light' }}>
                    {formError}
                  </Body1>

                  {formError === 'This address already exists.' && (
                    <Link
                      passHref
                      href={{
                        pathname: '/',
                        query: {
                          line1: validatedAddress?.line1,
                          city: validatedAddress?.city,
                          state: validatedAddress?.state,
                          zip: validatedAddress?.zip,
                        },
                      }}
                    >
                      <Button color="secondary" variant="text">
                        Go to this address
                      </Button>
                    </Link>
                  )}
                </Card>
              </Box>
            </Fade>
          )}
        </VerticalStepper>
      </Box>
    </Box>
  )
}

NewAddress.getLayout = (page: ReactElement) => (
  <AuthUserContextProvider user={page.props.user}>
    <AuthenticatedLayout user={page.props.user}>{page}</AuthenticatedLayout>
  </AuthUserContextProvider>
)

export default NewAddress
