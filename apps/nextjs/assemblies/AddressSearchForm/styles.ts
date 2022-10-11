import { dividerColor } from '../../styles/shared/dividerStyles'

import type { Theme } from '@mui/material/styles'

export const formStyles = ({ theme }: { theme: Theme }) => ({
  margin: '0 auto',
  maxWidth: '400px',
})

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
