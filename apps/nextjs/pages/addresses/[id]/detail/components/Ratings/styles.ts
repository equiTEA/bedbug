import { dividerColor } from '../../../../../../styles/shared/dividerStyles'
import type { Theme } from '@mui/material/styles'

export const containerStyles = ({
  theme,
  allottedHeight,
}: {
  theme: Theme
  allottedHeight: number
}) => ({
  pl: 1,
  pr: 2,
  overflowY: 'auto',
  height: `${allottedHeight}px`,
  borderBottom: `1px solid ${dividerColor(theme)}`,
  boxShadow: `rgba(33, 35, 38, 0.1) 0px 10px 10px -10px`,

  '& .card:first-of-type': {
    mt: 2,
  },

  [theme.breakpoints.down('md')]: {
    pb: 8,
    pl: 0,
    pr: 0,
    height: 'auto',
    borderBottom: 'none',
  },
})
