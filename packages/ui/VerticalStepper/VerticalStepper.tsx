/* eslint-disable react/display-name */

import MuiStepper, {
  StepperProps as MuiStepperProps,
} from '@mui/material/Stepper'
import MuiStepLabel, {
  StepLabelProps as MuiStepLabelProps,
} from '@mui/material/StepLabel'
import { stepperStyles, stepLabelStyles, stepIconStyles } from './styles'

export namespace VerticalStepper {
  export type Props = MuiStepperProps & {}
  export type StepLabelProps = MuiStepLabelProps & {}
}

export const VerticalStepper = ({
  children,
  ...props
}: VerticalStepper.Props) => {
  return (
    <MuiStepper sx={stepperStyles} orientation="vertical" {...props}>
      {children}
    </MuiStepper>
  )
}

VerticalStepper.StepLabel = ({
  children,
  ...props
}: VerticalStepper.StepLabelProps) => {
  return (
    <MuiStepLabel
      sx={stepLabelStyles}
      StepIconProps={{
        color: 'blue !important',
        sx: (theme) => stepIconStyles({ theme }),
      }}
      {...props}
    >
      {children}
    </MuiStepLabel>
  )
}

export default VerticalStepper
