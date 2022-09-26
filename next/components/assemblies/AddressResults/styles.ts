import { dividerColor } from '../../../styles/shared/dividerStyles'
import type { Theme } from '@mui/material/styles'

type ResultsContainerStylesProps = {
  theme: Theme
  height: string
  resultsLoaded?: boolean
}

export const resultsContainerStyles = ({
  theme,
  height,
  resultsLoaded,
}: ResultsContainerStylesProps) => ({
  height,
  pt: 2,
  width: '100%',
  display: 'flex',
  overflowY: 'auto',
  flexDirection: 'column',

  ...(resultsLoaded
    ? {
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: dividerColor(theme),
      }
    : {}),

  [theme.breakpoints.down('md')]: {
    height: 'auto',
    borderBottom: 0,
  },
})
