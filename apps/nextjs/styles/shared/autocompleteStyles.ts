import type { Theme } from '@mui/material/styles'

export const sharedAutocompleteStyles = ({ theme }: { theme: Theme }) => ({
  '& .MuiAutocomplete-clearIndicator, & > .MuiAutocomplete-popupIndicator, & .MuiSvgIcon-root':
    {
      color: `${theme.palette.secondary.main} !important`,
    },

  '& .MuiAutocomplete-endAdornment .MuiAutocomplete-popupIndicator .MuiSvgIcon-root':
    {
      color: `${theme.palette.secondary.main} !important`,
    },
})
