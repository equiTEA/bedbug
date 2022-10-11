import { alpha } from '@mui/material/styles'

import type { Theme } from '@mui/material/styles'

export const flexContainerStyles = ({ theme }: { theme: Theme }) => ({
  py: 1,
  gap: 1,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  borderColor: alpha(theme.palette.primary.main, 0.5),

  '& .MuiSvgIcon-root': {
    fontSize: '64px !important',
    ml: -1,
  },
})

export const buttonAlignmentStyles = {
  display: 'flex',
  justifyContent: 'flex-end',
}
