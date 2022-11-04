import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import DBAForm from '../../DBAForm'
import { useRateAddress } from '@bedbug/hooks'
import { H3, VerticalStepper } from '@bedbug/ui'
import StepContent from '@mui/material/StepContent'
import { sharedActionsRowStyles } from '../../../../../../../styles/shared/actionsRowStyles'

const DBAStep = () => {
  const {
    stepper: { handlePreviousStep },
    dbaForm: { errorsExist, handleSubmit, knowsDBAName, didAttemptSubmit },
  } = useRateAddress()

  return (
    <>
      <VerticalStepper.StepLabel>
        <H3>Landlord&apos;s Doing Business As (DBA)</H3>
      </VerticalStepper.StepLabel>
      <StepContent>
        <form onSubmit={handleSubmit}>
          <DBAForm />

          <Box sx={sharedActionsRowStyles}>
            <Button
              variant="text"
              color="secondary"
              onClick={handlePreviousStep}
            >
              Back
            </Button>

            <Button
              disabled={didAttemptSubmit && errorsExist}
              type="submit"
              color="secondary"
              variant="contained"
            >
              {!knowsDBAName ? 'Skip' : 'Save Business'}
            </Button>
          </Box>
        </form>
      </StepContent>
    </>
  )
}

export default DBAStep
