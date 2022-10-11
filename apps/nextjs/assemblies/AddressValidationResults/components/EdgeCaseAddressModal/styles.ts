import type { Theme } from '@mui/material/styles'

export const modalStyles = {
  zIndex: 1000,

  '& .MuiDialog-paper': {
    px: 4,
    py: 3,
    backgroundColor: 'backgroundColor.main',
  },
}

export const radioInputStyles = ({ theme }: { theme: Theme }) => ({
  alignItems: 'flex-start',

  '& > .MuiRadio-root, & > .MuiRadio-root.Mui-selected': {
    color: `${theme.palette.secondary.main} !important`,
  },
})

export const actionsRowStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  my: 2,
}

export const iconButtonStyles = {
  top: 8,
  right: 8,
  width: '40px',
  height: '40px',
  maxWidth: '40px',
  minWidth: '40px',
  maxHeight: '40px',
  minHeight: '40px',
  position: 'absolute',
}
