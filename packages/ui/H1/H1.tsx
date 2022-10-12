import { h1Styles } from './styles'
import Typography from '@mui/material/Typography'

import type { TypographyProps } from '../types/TypographyProps'

export const H1 = ({ children, sx = {}, ...props }: TypographyProps) => (
  <Typography
    sx={(theme) => ({ ...h1Styles(theme), ...sx })}
    variant="h1"
    component="h1"
    {...props}
  >
    {children}
  </Typography>
)

export default H1
