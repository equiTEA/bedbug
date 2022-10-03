import MUITextField from '@mui/material/TextField'
import { styles } from './styles'

const TextField = ({ sx = {}, ...props }) => (
  <MUITextField sx={{ ...styles, ...sx }} {...props} />
)

export default TextField
