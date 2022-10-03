import { dividerColor } from '../../../styles/shared/dividerStyles'

export const containerStyles = {
  width: '100%',
  maxWidth: '750px',
  py: 3,
  px: 1,
  '& .card': { mb: 3 },
}

export const tabsStyles = {
  mb: 3,
  color: '#fff',
  '& .MuiButtonBase-root:not(.Mui-selected)': { color: dividerColor },
}
