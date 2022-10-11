import type { Theme } from '@mui/material/styles'

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
