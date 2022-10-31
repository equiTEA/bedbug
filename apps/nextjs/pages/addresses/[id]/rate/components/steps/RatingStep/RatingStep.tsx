import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import { useRateAddress } from '@bedbug/hooks'
import { H3, VerticalStepper } from '@bedbug/ui'
import StepContent from '@mui/material/StepContent'
import RatingForm from '../../../components/RatingForm'
import CircularProgress from '@mui/material/CircularProgress'
import { sharedActionsRowStyles } from '../../../../../../../styles/shared/actionsRowStyles'

const RatingStep = () => {
  const { back } = useRouter()

  const {
    ratingForm: { errorsExist, handleSubmit, didAttemptSubmit, loading },
  } = useRateAddress()

  return (
    <>
      <VerticalStepper.StepLabel>
        <H3>Rating</H3>
      </VerticalStepper.StepLabel>

      <StepContent>
        <form onSubmit={handleSubmit}>
          <RatingForm />

          <Box sx={sharedActionsRowStyles}>
            <Button onClick={back} variant="text" color="secondary">
              Back
            </Button>

            <Button
              type="submit"
              color="secondary"
              variant="contained"
              disabled={(didAttemptSubmit && errorsExist) || loading}
            >
              {loading ? (
                <CircularProgress size={24} />
              ) : (
                "I'm happy with my rating"
              )}
            </Button>
          </Box>
        </form>
      </StepContent>
    </>
  )
}

export default RatingStep
