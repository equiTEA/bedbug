import { styles } from './styles'
import MUITextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField'

import type { Theme } from '@mui/material/styles'
import type { SystemStyleObject } from '@mui/system'

export type TextFieldProps = MuiTextFieldProps & {
  sx?: SystemStyleObject<Theme>
}

export const TextField = ({ sx = {}, ...props }: MuiTextFieldProps) => (
  <MUITextField
    fullWidth
    size="small"
    sx={{ ...styles, ...sx }}
    FormHelperTextProps={{
      sx: {
        fontSize: '10px',
        mt: 0,
        mx: 0,
      },
    }}
    {...props}
  />
)
