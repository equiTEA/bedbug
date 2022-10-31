import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useRateAddress } from '@bedbug/hooks'
import { H3, VerticalStepper } from '@bedbug/ui'
import StepContent from '@mui/material/StepContent'
import PropertyManagerForm from '../../PropertyManagerForm'
import { sharedActionsRowStyles } from '../../../../../../../styles/shared/actionsRowStyles'

const PropertyManagerStep = () => {
  const {
    stepper: { handlePreviousStep },
    propertyManagerForm: {
      errorsExist,
      handleSubmit,
      didAttemptSubmit,
      knowsPropertyManagerName,
    },
  } = useRateAddress()

  return (
    <>
      <VerticalStepper.StepLabel>
        <H3>Property Management Company</H3>
      </VerticalStepper.StepLabel>

      <StepContent>
        <form onSubmit={handleSubmit}>
          <PropertyManagerForm />

          <Box sx={sharedActionsRowStyles}>
            <Button
              variant="text"
              color="secondary"
              onClick={handlePreviousStep}
            >
              Back
            </Button>

            <Button
              type="submit"
              color="secondary"
              variant="contained"
              disabled={didAttemptSubmit && errorsExist}
            >
              {!knowsPropertyManagerName ? 'Skip' : 'Save Property Manager'}
            </Button>
          </Box>
        </form>
      </StepContent>
    </>
  )
}

export default PropertyManagerStep
