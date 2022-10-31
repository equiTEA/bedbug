import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import LandlordForm from '../../LandlordForm'
import { useRateAddress } from '@bedbug/hooks'
import { H3, VerticalStepper } from '@bedbug/ui'
import StepContent from '@mui/material/StepContent'
import CircularProgress from '@mui/material/CircularProgress'
import { sharedActionsRowStyles } from '../../../../../../../styles/shared/actionsRowStyles'

const LandlordStep = () => {
  const {
    stepper: { handlePreviousStep },
    landlordForm: {
      loading,
      errorsExist,
      handleSubmit,
      didAttemptSubmit,
      knowsLandlordName,
    },
  } = useRateAddress()

  return (
    <>
      <VerticalStepper.StepLabel>
        <H3>Landlord Info</H3>
      </VerticalStepper.StepLabel>
      <StepContent>
        <form onSubmit={handleSubmit}>
          <LandlordForm />

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
              disabled={loading || (didAttemptSubmit && errorsExist)}
            >
              {loading ? (
                <CircularProgress color="secondary" size={24} />
              ) : !knowsLandlordName ? (
                'Skip'
              ) : (
                'Save Landlord'
              )}
            </Button>
          </Box>
        </form>
      </StepContent>
    </>
  )
}

export default LandlordStep
