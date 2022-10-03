import type { Theme } from '@mui/material/styles'

export const sharedAnimatedContainerStyles = ({ theme }: { theme: Theme }) => ({
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },

  pt: 4,
  opacity: 0,
  width: '400px',
  margin: '0 auto',
  transition: 'opacity 400ms ease',
  animation: 'fadeIn 0.5s ease-in-out forwards',

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
})
