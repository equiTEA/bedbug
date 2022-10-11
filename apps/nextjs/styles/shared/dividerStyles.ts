import { alpha } from '@mui/material'
import type { Theme } from '@mui/material/styles'

export const dividerColor = (theme: Theme) =>
  alpha(theme.palette.secondary.main, 0.4)
