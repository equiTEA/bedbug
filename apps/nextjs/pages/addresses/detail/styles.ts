import { dividerColor } from '../../../styles/shared/dividerStyles'

import type { Theme } from '@mui/material/styles'

export const containerStyles = {
  width: '100%',
  maxWidth: '750px',
  px: 1,
  '& .card': { mb: 3 },
}

export const tabsStyles = ({ theme }: { theme: Theme }) => ({
  color: '#fff',
  borderBottom: `1px solid ${dividerColor(theme)}`,
  '& .MuiButtonBase-root:not(.Mui-selected)': { color: dividerColor(theme) },
})
