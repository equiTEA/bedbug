import type { Theme } from '@mui/material/styles'

export const resultsContainerStyles = ({ theme }: { theme: Theme }) => ({
  pt: 2,
  width: '100%',
  display: 'flex',
  overflowY: 'auto',
  flexDirection: 'column',

  [theme.breakpoints.down('md')]: {
    height: 'auto',
    borderBottom: 0,
  },
})
