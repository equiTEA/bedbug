import type { Theme } from '@mui/material/styles'

export const body1Styles = ({ theme }: { theme: Theme }) => ({
  fontFamily: 'Albert Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '0.4px',

  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    lineHeight: '24px',
  },
})
