import type { ReactNode } from 'react'
import type { Theme } from '@mui/material/styles'
import type { SystemStyleObject } from '@mui/system'
import type { TypographyProps as MuiTypographyProps } from '@mui/material/Typography'

export type TypographyProps = MuiTypographyProps & {
  /** The content to display in the heading. */
  children: ReactNode
  sx?: SystemStyleObject<Theme>
}
