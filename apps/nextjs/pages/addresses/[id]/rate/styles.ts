import type { Theme } from '@mui/material/styles'

export const containerStyles = ({ theme }: { theme: Theme }) => ({
  maxHeight: '100vh',
  pt: 3,

  [theme.breakpoints.down('md')]: {
    overflowY: 'visible',
  },
})
