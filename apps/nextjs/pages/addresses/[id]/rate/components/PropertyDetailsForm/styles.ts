import type { Theme } from '@mui/material/styles'

export const labelStyles = ({ theme }: { theme: Theme }) => ({
  mb: 1,
  ml: 1,
  color: theme.palette.textColor.main,

  '.MuiTypography-root': {
    fontSize: '0.8rem',
    fontFamily: '"Albert Sans", sans-serif !important',
  },
})

export const chipStyles = ({ theme }: { theme: Theme }) => ({
  p: 1,
  px: 0,
  height: '24px',
  fontSize: '0.85rem !important',
  borderColor: theme.palette.secondary.contrastText,
})

export const chipIconStyles = ({ theme }: { theme: Theme }) => ({
  fontSize: '1.1rem !important',
  color: `${theme.palette.secondary.contrastText} !important`,
})

export const listItemStyles = {
  p: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start !important',
}

export const listItemTitleStyles = ({ theme }: { theme: Theme }) => ({
  mb: 0.5,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.1rem !important',
  justifyContent: 'space-between',
  color: theme.palette.secondary.contrastText,
})
