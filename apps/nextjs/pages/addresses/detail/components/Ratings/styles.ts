import { dividerColor } from '../../../../../styles/shared/dividerStyles'
import type { Theme } from '@mui/material/styles'

export const containerStyles = ({
  theme,
  allottedHeight,
}: {
  theme: Theme
  allottedHeight: number
}) => ({
  height: `${allottedHeight}px`,
  overflowY: 'auto',
  pl: 1,
  pr: 2,
  borderBottom: `1px solid ${dividerColor(theme)}`,
  boxShadow: `rgba(33, 35, 38, 0.1) 0px 10px 10px -10px`,

  '& .card:first-of-type': {
    mt: 2,
  },

  [theme.breakpoints.down('md')]: {
    height: 'auto',
    borderBottom: 'none',
    pl: 0,
    pr: 0,
  },
})
