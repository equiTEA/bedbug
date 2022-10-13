import Typography from '@mui/material/Typography'
import { h2Styles } from './styles'
import type { TypographyProps } from '../types/TypographyProps'

export const H2 = ({ children, sx = {}, ...props }: TypographyProps) => (
  <Typography
    sx={(theme) => ({ ...h2Styles({ theme }), ...sx })}
    variant="h2"
    {...props}
  >
    {children}
  </Typography>
)

export default H2
