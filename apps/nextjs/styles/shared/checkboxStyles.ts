import type { Theme } from '@mui/material/styles'

export const sharedCheckboxLabelStyles = ({ theme }: { theme: Theme }) => ({
  my: 1,
  ml: 1,
  color: theme.palette.textColor.main,

  '.MuiTypography-root': {
    fontFamily: '"Albert Sans", sans-serif !important',
  },
})
