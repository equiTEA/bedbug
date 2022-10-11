import type { Theme } from '@mui/material/styles'
import { dividerColor } from '../../../../../styles/shared/dividerStyles'

export const containerStyles = ({
  allottedHeight,
  theme,
}: {
  theme: Theme
  allottedHeight: number
}) => ({
  height: `${allottedHeight}px`,
  pt: 3,
  pl: 1,
  pr: 2,
  overflowY: 'auto',
  borderBottom: `1px solid ${dividerColor(theme)}`,

  [theme.breakpoints.down('md')]: {
    height: 'auto',
    borderBottom: 'none',
    pl: 0,
    pr: 0,
  },
})
