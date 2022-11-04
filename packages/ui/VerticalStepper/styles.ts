import type { Theme } from '@mui/material/styles'

export const stepperStyles = {
  '& .MuiStepLabel-root': {
    p: 0,
  },

  '& > .MuiStep-vertical': {
    height: 'auto',
  },

  '& > .MuiStepConnector-root.MuiStepConnector-vertical.Mui-completed': {
    height: '16px',
  },

  '& > .Mui-completed .MuiStepConnector-lineMuiStepConnector-lineVertical': {
    height: '8px',
  },
}

export const stepLabelStyles = {
  color: 'white !important',
}

export const stepIconStyles = ({ theme }: { theme: Theme }) => ({
  color: `${theme.palette.secondary.main} !important`,

  '&.MuiStepIcon-root.MuiSvgIcon-root': {
    height: '32px',
    width: '32px',
    transform: 'translateX(-4px)',
  },

  '& > .MuiStepIcon-text': {
    fill: `${theme.palette.backgroundColor.main} !important`,
    fontWeight: 700,
  },
})
