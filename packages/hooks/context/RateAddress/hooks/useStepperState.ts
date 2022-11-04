import { useState } from 'react'

export const useStepperState = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handlePreviousStep = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1)

  const handleNextStep = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1)

  return {
    activeStep,
    handleNextStep,
    handlePreviousStep,
  }
}
