import Box from '@mui/material/Box'
import Step from '@mui/material/Step'
import { useState, ReactElement } from 'react'
import StepContent from '@mui/material/StepContent'
import { AuthUserContextProvider } from '@bedbug/hooks'
import { H1, H3, Body1, VerticalStepper } from '@bedbug/ui'
import NewAddressValidationForm from './components/NewAddressValidationForm'
import AddressValidationResults from '../../../assemblies/AddressValidationResults'
import AuthenticatedLayout from '../../../components/layouts/Authenticated/Authenticated'
import { sharedAnimatedContainerStyles } from '../../../styles/shared/animatedContainerStyles'

import type { Address } from '@bedbug/types'

const NewAddress = () => {
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

  return (
    <Box
      sx={(theme) =>
        sharedAnimatedContainerStyles({ theme, sx: { maxWidth: '400px' } })
      }
    >
      <H1>Create New Address</H1>
      <Body1>
        Add a new address to our system, so that you and other tenants can rate
        it.
      </Body1>

      <VerticalStepper activeStep={activeStep} orientation="vertical">
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
            {validatedAddress && (
              <Body1 sx={{ mb: 0 }}>{validatedAddress.full}</Body1>
            )}
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
      </VerticalStepper>
    </Box>
  )
}

NewAddress.getLayout = (page: ReactElement) => (
  <AuthUserContextProvider user={page.props.user}>
    <AuthenticatedLayout user={page.props.user}>{page}</AuthenticatedLayout>
  </AuthUserContextProvider>
)

export default NewAddress
