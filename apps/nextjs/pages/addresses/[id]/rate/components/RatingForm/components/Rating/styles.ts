import type { Theme } from '@mui/material/styles'

export const ratingButtonStyles = ({
  theme,
  isSelected,
}: {
  theme: Theme
  isSelected: boolean
}) => ({
  transition: 'background-color .2s',
  backgroundColor: isSelected
    ? theme.palette.secondary.main
    : theme.palette.divider,
  '&:hover': {
    transition: 'background-color .2s',
    backgroundColor: isSelected
      ? theme.palette.secondary.dark
      : theme.palette.backgroundColor.light,
  },
  '& > .MuiSvgIcon-root': {
    transition: 'color .2s',
    color: `${
      isSelected
        ? theme.palette.backgroundColor.main
        : theme.palette.secondary.main
    } !important`,
  },
  '&:hover > .MuiSvgIcon-root': {
    transition: 'color .2s',
    color: `${
      isSelected
        ? theme.palette.backgroundColor.main
        : theme.palette.secondary.main
    } !important`,
  },
})
