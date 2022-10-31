import type { Theme } from '@mui/material/styles'

export const buttonStyles = ({
  theme,
  reversed,
  active,
}: {
  theme: Theme
  reversed: boolean
  active: boolean
}) => ({
  border: 'none',
  borderRadius: '4px',
  mx: '4px',
  height: '32px',
  width: '32px',
  minWidth: '32px',
  cursor: 'pointer',
  backgroundColor: reversed
    ? active
      ? 'white'
      : theme.palette.secondary.main
    : active
    ? theme.palette.secondary.main
    : theme.palette.divider,
  color: `${
    reversed
      ? active
        ? 'white'
        : theme.palette.secondary.main
      : active
      ? theme.palette.backgroundColor.main
      : theme.palette.secondary.main
  }`,

  '&:hover': {
    backgroundColor: active
      ? theme.palette.secondary.dark
      : theme.palette.backgroundColor.light,
  },

  '&:first-of-type': {
    ml: 0,
  },

  '&:last-of-type': {
    mr: 0,
  },

  '& > svg': {
    mb: -0.5,
  },
})
