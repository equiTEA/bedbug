import type { Theme } from '@mui/material/styles'

export const h3Styles = ({ theme }: { theme: Theme }) => ({
  fontFamily: 'Albert Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.5px',
  color: 'secondary.main',

  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    lineHeight: '20px',
  },
})
