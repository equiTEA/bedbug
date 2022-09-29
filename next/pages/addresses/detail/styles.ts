import { dividerColor } from '../../../styles/shared/dividerStyles'

export const containerStyles = {
  width: '100%',
  maxWidth: '750px',
  pt: 3,
  px: 1,

  '& .card': {
    mb: 3,
  },
}

export const tabsStyles = (theme) => ({
  color: '#fff',
  borderBottom: `1px solid ${dividerColor(theme)} !important`,

  '& .MuiButtonBase-root:not(.Mui-selected)': {
    color: dividerColor,
  },
})
