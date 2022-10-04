import Typography from '@mui/material/Typography'
import { h3Styles } from './styles'

import type { ReactNode } from 'react'
import type { SystemStyleObject } from '@mui/system'

type Props = {
  children: ReactNode
  sx?: SystemStyleObject
}

export const H3 = ({ children, sx = {}, ...props }: Props) => (
  <Typography
    sx={(theme) => ({ ...h3Styles(theme), ...sx })}
    variant="h3"
    component="h3"
    gutterBottom
    {...props}
  >
    {children}
  </Typography>
)

export default H3
