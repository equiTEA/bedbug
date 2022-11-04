import { dividerColor } from '../../../../styles/shared/dividerStyles'

import type { Theme } from '@mui/material/styles'

export const containerStyles = ({ theme }: { theme: Theme }) => ({
  pt: 3,
  width: '100%',
  m: '0 auto',
  maxWidth: '750px',
  position: 'relative',

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
