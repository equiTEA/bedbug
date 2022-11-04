import type { Theme } from '@mui/material/styles'

export const resultsContainerStyles = ({ theme }: { theme: Theme }) => ({
  pt: 2,
  width: '100%',
  display: 'flex',
  overflowY: 'auto',
  flexDirection: 'column',

  [theme.breakpoints.down('md')]: {
    height: 'auto',
    borderBottom: 0,
  },
})

export const infoIconStyles = {
  mr: 1,
  color: 'secondary.main',
  display: 'inline-block',
  transform: 'translateY(6px)',
}

export const buttonGroupButtonStyles = ({
  theme,
  isSelected,
}: {
  theme: Theme
  isSelected: boolean
}) => ({
  textTransform: 'none !important',
  ...(isSelected
    ? {
        backgroundColor: 'secondary.main',
        color: `${theme.palette.backgroundColor.main} !important`,
      }
    : {}),
})

export const flexEndContainerStyles = {
  mt: 2,
  display: 'flex',
  justifyContent: 'flex-end',
}
