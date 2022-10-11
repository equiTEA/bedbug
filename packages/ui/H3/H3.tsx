import Typography from '@mui/material/Typography'
import { h3Styles } from './styles'

import type { TypographyProps } from '../types/TypographyProps'

export const H3 = ({ children, sx = {}, ...props }: TypographyProps) => (
  <Typography
    sx={(theme) => ({ ...h3Styles({ theme }), ...sx })}
    variant="h3"
    component="h3"
    {...props}
  >
    {children}
  </Typography>
)

export default H3
