import { createTheme } from '@mui/material/styles'

import { palette } from './palette'
import { breakpoints } from './breakpoints'

const theme = createTheme({
  breakpoints,
  palette,
})

export default theme
