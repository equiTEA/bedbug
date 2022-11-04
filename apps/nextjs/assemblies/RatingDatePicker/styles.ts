import type { Theme } from '@mui/material/styles'

export const datePickerStyles = ({ theme }: { theme: Theme }) => ({
  backgroundColor: `${theme.palette.secondary.main} !important`,

  '*': {
    color: theme.palette.secondary.contrastText,
  },

  '.MuiPickersDay-root:not(.Mui-disabled)': {
    backgroundColor: theme.palette.secondary.main,
  },

  '.MuiPickersDay-root.Mui-disabled': {
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.secondary.main,
  },

  '.MuiPickersDay-root.Mui-selected': {
    backgroundColor: `${theme.palette.backgroundColor.main} !important`,
  },

  '.MuiPickersDay-root:hover': {
    transition: 'background-color .2s, color .2s',
    color: theme.palette.backgroundColor.contrastText,
    backgroundColor: theme.palette.backgroundColor.main,
  },
})

export const inputStyles = ({ theme }: { theme: Theme }) => ({
  '.MuiSvgIcon-root': { color: theme.palette.secondary.main },
})
