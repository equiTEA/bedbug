import type { Theme } from '@mui/material/styles'

export const containerStyles = ({ theme }: { theme: Theme }) => ({
  top: 0,
  zIndex: 5,
  height: 160,
  right: '-24px',
  display: 'flex',
  cursor: 'pointer',
  position: 'absolute',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',

  [theme.breakpoints.down('md')]: {
    position: 'fixed',
    right: 16,
    height: 80,
  },
})

export const menuPaperStyles = {
  mt: 1.5,
  color: 'text.main',
  overflow: 'visible',
  bgcolor: 'secondary.main',
  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',

  '& .MuiAvatar-root': {
    mr: 1,
    ml: -0.5,
    width: 32,
    height: 32,
  },

  '&:before': {
    top: 0,
    right: 20,
    width: 10,
    zIndex: 0,
    height: 10,
    content: '""',
    display: 'block',
    position: 'absolute',
    bgcolor: 'secondary.main',
    transform: 'translateY(-50%) rotate(45deg)',
  },
}

export const unauthenticatedAvatarButtonStyles = ({
  theme,
}: {
  theme: Theme
}) => ({
  bgcolor: theme.palette.secondary.main,
  color: theme.palette.backgroundColor.main,
  boxShadow: 'box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px',
})

export const userInfoStyles = {
  px: 2,
  pt: 1,
  pb: 2,
  gap: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
}
