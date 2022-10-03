import Typography from '@mui/material/Typography'
import { body1Styles } from './styles'

export const Body1 = ({
  children,
  gutterBottom = true,
  color = 'textColor.main',
  sx = {},
  ...props
}) => (
  <Typography
    sx={(theme) => ({ ...body1Styles(theme), ...sx })}
    variant="body1"
    component="p"
    gutterBottom={gutterBottom}
    color={color}
    {...props}
  >
    {children}
  </Typography>
)

export default Body1
