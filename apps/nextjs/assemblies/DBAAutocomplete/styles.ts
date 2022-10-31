import type { Theme } from '@mui/material/styles'

type BaseProps = {
  theme: Theme
  selected: boolean
}

export const dbaChipStyles = ({ theme, selected }: BaseProps) => ({
  p: 1,
  px: 0,
  height: '24px',
  fontSize: '0.85rem !important',
  color: selected
    ? theme.palette.secondary.main
    : theme.palette.backgroundColor.main,
  borderColor: selected
    ? theme.palette.secondary.main
    : theme.palette.secondary.contrastText,
})

export const chipIconStyles = ({ theme, selected }: BaseProps) => ({
  fontSize: '1.1rem !important',
  color: `${
    selected
      ? theme.palette.secondary.main
      : theme.palette.secondary.contrastText
  } !important`,
})

export const listItemStyles = ({ selected, theme }: BaseProps) => ({
  p: 1,
  py: '12px !important',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start !important',
  borderBottom: `1px solid ${theme.palette.divider}`,

  '&:last-child': {
    borderBottom: `none`,
  },

  ...(selected
    ? {
        backgroundColor: `${theme.palette.backgroundColor.main} !important`,
        color: theme.palette.secondary.main,
      }
    : {}),
})

export const listItemTitleStyles = ({ theme, selected }: BaseProps) => ({
  mb: 0.5,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.1rem !important',
  justifyContent: 'space-between',
  color: theme.palette.secondary.contrastText,

  ...(selected
    ? {
        color: theme.palette.secondary.main,
      }
    : {}),
})

export const autocompleteStyles = ({ theme }: { theme: Theme }) => ({
  '& .MuiAutocomplete-clearIndicator, & > .MuiAutocomplete-popupIndicator, & .MuiSvgIcon-root':
    {
      color: `${theme.palette.secondary.main} !important`,
    },

  '& .MuiAutocomplete-endAdornment .MuiAutocomplete-popupIndicator .MuiSvgIcon-root':
    {
      color: `${theme.palette.secondary.main} !important`,
    },
})

export const createNewDBAListItemStyles = ({ theme, selected }: BaseProps) => ({
  ...listItemStyles({ theme, selected }),
  flexDirection: 'row',
  alignItems: 'center',
})

export const createNewDBAIconStyles = ({ theme, selected }: BaseProps) => ({
  mr: 1,
  height: '48px',
  color: theme.palette.secondary.contrastText,
  ...(selected
    ? {
        color: theme.palette.secondary.main,
      }
    : {}),
})

export const addressLabelStyles = ({ theme, selected }: BaseProps) => ({
  mt: 1,
  fontSize: '0.7rem !important',
  lineHeight: '1rem !important',
  color: selected
    ? theme.palette.secondary.main
    : theme.palette.secondary.contrastText,
})

export const addressChipStyles = ({ theme, selected }: BaseProps) => ({
  mr: 0.5,
  mb: 0.25,
  height: '18px',
  px: `0 !important`,
  display: 'inline-block',
  fontSize: '0.6rem !important',
  backgroundColor: selected ? theme.palette.backgroundColor.light : undefined,
  color: selected
    ? theme.palette.secondary.main
    : theme.palette.secondary.contrastText,
  borderColor: selected
    ? theme.palette.secondary.main
    : theme.palette.secondary.contrastText,

  '& .MuiChip-label': {
    px: 0.75,
  },
})

export const selectedDBAChipStyles = ({ theme }: { theme: Theme }) => ({
  color: `${theme.palette.secondary.main} !important`,
  height: '24px',
  '.MuiChip-deleteIcon': {
    height: '18px',
    color: `${theme.palette.secondary.main} !important`,
  },
})
