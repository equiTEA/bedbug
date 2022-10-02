import Typography from '@mui/material/Typography'
import { h1Styles } from './styles'

export const H1 = ({ children, sx = {}, ...props }) => (
  <Typography
    sx={(theme) => ({ ...h1Styles(theme), ...sx })}
    variant="h1"
    component="h1"
    gutterBottom
    {...props}
  >
    {children}
  </Typography>
)

export default H1
