import { body1Styles } from './styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

import type { ReactNode } from 'react'
import type { Theme } from '@mui/material/styles'
import type { ResponsiveStyleValue, SystemStyleObject } from '@mui/system'

export type Body1Props = TypographyProps & {
  children: ReactNode
  color?: ResponsiveStyleValue<Theme['palette']['text']['primary']>
  sx?: SystemStyleObject<Theme>
}

export const Body1 = ({
  children,
  gutterBottom = true,
  color = 'textColor.main',
  sx = {},
  ...props
}: Body1Props) => (
  <Typography
    component="p"
    color={color}
    variant="body1"
    gutterBottom={gutterBottom}
    sx={(theme) => ({ ...body1Styles({ theme }), ...sx })}
    {...props}
  >
    {children}
  </Typography>
)
