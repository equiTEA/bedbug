import type { Theme } from '@mui/material/styles'

export const resultsContainerStyles = {
  gap: 2,
  display: 'flex',
  margin: '0 auto',
  maxWidth: '400px',
  alignItems: 'center',
  justifyContent: 'flex-start',
}

export const headingStyles = ({ theme }: { theme: Theme }) => ({
  m: '0 auto',
  maxWidth: '400px',
  [theme.breakpoints.down('md')]: { mt: 4 },
})
