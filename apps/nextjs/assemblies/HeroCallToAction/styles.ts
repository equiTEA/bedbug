import type { Theme } from '@mui/material/styles'

export const ctaContainerStyles = ({ theme }: { theme: Theme }) => ({
  mb: '25vh',
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column' as const,

  '& > h1, p': { textAlign: 'right' },

  [theme.breakpoints.down('md')]: {
    mb: '15vh',
    mt: 5,
    height: 'auto',
  },
})

export const flexColumnStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  justifyContent: 'flex-end',
}
