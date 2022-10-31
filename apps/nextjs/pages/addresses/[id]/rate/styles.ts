import type { Theme } from '@mui/material/styles'

export const sharedCheckboxLabelStyles = ({ theme }: { theme: Theme }) => ({
  my: 1,
  ml: 1,
  color: theme.palette.textColor.main,

  '.MuiTypography-root': {
    fontFamily: '"Albert Sans", sans-serif !important',
  },
})

export const containerStyles = ({ theme }: { theme: Theme }) => ({
  maxHeight: '100vh',
  pt: 3,

  [theme.breakpoints.down('md')]: {
    overflowY: 'visible',
  },
})
