/* eslint-disable react/display-name */

import Box from '@mui/material/Box'
import Typography, { TypographyProps } from '@mui/material/Typography'
import {
  cardStyles,
  dividerStyles,
  dataPointStyles,
  cardHeadingStyles,
  cardSubheadingStyles,
  dataPointLabelStyles,
  dataPointValueStyles,
  cardSectionHeadingStyles,
} from './styles'

import type { ReactNode } from 'react'
import type { SystemCssProperties } from '@mui/system'
import type { Theme } from '@mui/material/styles'

type Sx = { sx?: SystemCssProperties<Theme> }
type Children = { children: ReactNode }

export namespace Card {
  export type Props = {
    children: ReactNode
    onClick?: () => unknown
    sx?: SystemCssProperties
  }

  export type DividerProps = Sx

  export type HeadingProps = Sx & Children & TypographyProps
  export type SectionHeadingProps = Sx & Children & TypographyProps
  export type DataPointLabelProps = Sx & Children & TypographyProps
  export type DataPointValueProps = Sx & Children & TypographyProps
  export type DataPointProps = Sx & Children
}

export const Card = ({ children, onClick, sx = {} }: Card.Props) => (
  <Box
    className="card"
    onClick={onClick}
    sx={(theme) => cardStyles({ onClickProvided: !!onClick, theme, sx })}
  >
    {children}
  </Box>
)

Card.Heading = ({ children, sx = {} }: Card.HeadingProps) => (
  <Typography
    className="card-heading"
    sx={{ ...cardHeadingStyles, ...sx }}
    variant="h3"
    component="h3"
  >
    {children}
  </Typography>
)

Card.Subheading = ({ children, sx = {} }: Card.HeadingProps) => (
  <Typography
    className="card-heading"
    sx={{ ...cardSubheadingStyles, ...sx }}
    variant="h3"
    component="h3"
  >
    {children}
  </Typography>
)

Card.Divider = ({ sx }: Card.DividerProps) => (
  <Box className="card-divider" sx={dividerStyles} />
)

Card.SectionHeading = ({ children, sx = {} }: Card.SectionHeadingProps) => (
  <Typography
    sx={{ ...cardSectionHeadingStyles, ...sx }}
    className="card-section-heading"
    variant="h4"
    component="h4"
  >
    {children}
  </Typography>
)
/** A flex container to contain Card.DataPointLabel and Card.DataPointValue */
Card.DataPoint = ({ children, sx = {} }: Card.DataPointProps) => (
  <Box sx={{ ...dataPointStyles, ...sx }} className="card-data-point">
    {children}
  </Box>
)

Card.DataPointLabel = ({ children, sx = {} }: Card.DataPointLabelProps) => (
  <Box
    sx={{ ...dataPointLabelStyles, ...sx }}
    className="card-data-point-label"
  >
    {children}
  </Box>
)

Card.DataPointValue = ({ children, sx = {} }: Card.DataPointValueProps) => (
  <Box
    sx={{ ...dataPointValueStyles, ...sx }}
    className="card-data-point-value"
  >
    {children}
  </Box>
)
