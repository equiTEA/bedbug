import Typography from '@mui/material/Typography'
import { h3Styles } from './styles'

export const H3 = ({ children, sx = {}, ...props }) => (
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
