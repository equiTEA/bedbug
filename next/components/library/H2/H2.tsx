import Typography from '@mui/material/Typography'
import { h2Styles } from './styles'

export const H2 = ({ children, sx = {}, ...props }) => (
  <Typography
    sx={(theme) => ({ ...h2Styles(theme), ...sx })}
    variant="h2"
    component="h2"
    gutterBottom
    {...props}
  >
    {children}
  </Typography>
)

export default H2
