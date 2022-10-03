import type { Theme } from '@mui/material/styles'
import { dividerColor } from '../../styles/shared/dividerStyles'

export const formStyles = ({ theme }: { theme: Theme }) => ({
  borderBottomColor: dividerColor(theme),
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  pb: 2,
})

export const resultsContainerStyles = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 2,
}

export const multiInputLineStyles = {
  display: 'flex',
  justifyContent: 'space-between',
}

export const stateFormControlStyles = ({ theme }: { theme: Theme }) => ({
  width: '35%',
  '& > .MuiAutocomplete-root .MuiSvgIcon-root': {
    color: theme.palette.secondary.main,
  },
})
