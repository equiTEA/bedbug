import type { Theme } from '@mui/material/styles'
import type { SystemStyleObject, SxProps } from '@mui/system'

export const sharedAnimatedContainerStyles = ({
  sx = {},
  theme,
}: {
  theme: Theme
  sx?: SystemStyleObject<Theme>
}) => ({
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },

  opacity: 0,
  width: '100%',
  margin: '0 auto',
  transition: 'opacity 400ms ease',
  animation: 'fadeIn 0.5s ease-in-out forwards',

  [theme.breakpoints.down('md')]: {
    px: 2,
    pt: 2,
    width: '100%',
    maxWidth: '500px',
  },

  ...sx,
})
