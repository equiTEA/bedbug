import Box from '@mui/material/Box'
import BoringAvatar from 'boring-avatars'
import { useTheme } from '@mui/material/styles'

export type AvatarProps = {
  name: string
  size?: number
}

export const Avatar = ({ name, size = 40 }: AvatarProps) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: `${size}px`,
        height: `${size}px`,
        display: 'flex',
        minWidth: `${size}px`,
        maxWidth: `${size}px`,
        minHeight: `${size}px`,
        maxHeight: `${size}px`,
        overflow: 'hidden',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        border: `2px solid ${theme.palette.backgroundColor.main}`,
      }}
    >
      <BoringAvatar
        size={size}
        name={name}
        variant="pixel"
        colors={[
          theme.palette.primary.main,
          theme.palette.textColor.main,
          theme.palette.secondary.main,
          theme.palette.backgroundColor.main,
        ]}
      />
    </Box>
  )
}
