import { alpha } from '@mui/material'
import type { Theme } from '@mui/material/styles'

export const styles = ({
  theme,
  isCollapsed,
}: {
  theme: Theme
  isCollapsed: boolean
}) => ({
  width: '40px',
  height: '40px',
  display: 'flex',
  maxWidth: '40px',
  minWidth: '40px',
  minHeight: '40px',
  maxHeight: '40px',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.2s ease',
  transform: isCollapsed ? 'rotate(0deg)' : 'rotate(-180deg)',
  backgroundColor: alpha(theme.palette.secondary.main, 0.04),
})
