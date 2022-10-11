/* eslint-disable react/display-name */

import MuiStepper, {
  StepperProps as MuiStepperProps,
} from '@mui/material/Stepper'
import MuiStepLabel, {
  StepLabelProps as MuiStepLabelProps,
} from '@mui/material/StepLabel'

import { stepLabelStyles, stepIconStyles } from './styles'

export namespace VerticalStepper {
  export type Props = MuiStepperProps & {}
  export type StepLabelProps = MuiStepLabelProps & {}
}

export const VerticalStepper = ({
  children,
  ...props
}: VerticalStepper.Props) => {
  return (
    <MuiStepper orientation="vertical" {...props}>
      {children}
    </MuiStepper>
  )
}

VerticalStepper.StepLabel = ({ children }: VerticalStepper.StepLabelProps) => {
  return (
    <MuiStepLabel
      sx={stepLabelStyles}
      StepIconProps={{
        color: 'blue !important',
        sx: (theme) => stepIconStyles({ theme }),
      }}
    >
      {children}
    </MuiStepLabel>
  )
}

export default VerticalStepper
