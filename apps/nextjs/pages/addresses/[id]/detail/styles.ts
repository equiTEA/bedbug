import { dividerColor } from '../../../../styles/shared/dividerStyles'

import type { Theme } from '@mui/material/styles'

export const containerStyles = ({ theme }: { theme: Theme }) => ({
  width: '100%',
  maxWidth: '750px',
  m: '0 auto',
  pt: 3,

  '& .card': {
    mb: 2,
  },

  [theme.breakpoints.down('md')]: {
    '& .card:last-of-type': {
      mb: 0,
    },
  },
})

export const tabsStyles = ({ theme }: { theme: Theme }) => ({
  color: '#fff',
  borderBottom: `1px solid ${dividerColor(theme)}`,
  boxShadow: `rgba(33, 35, 38, 0.1) 0px 10px 10px -10px`,

  '& .MuiButtonBase-root:not(.Mui-selected)': {
    color: dividerColor(theme),
  },
})
