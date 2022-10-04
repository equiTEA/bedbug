/* eslint-disable react/display-name */

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
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
import type { SystemStyleObject } from '@mui/system'

type Sx<Theme extends {} = {}> = { sx?: SystemStyleObject<Theme> }

namespace Card {
  export type Props = {
    children: ReactNode
    onClick?: () => unknown
    sx?: SystemStyleObject
  }

  export type HeadingProps = Sx & {
    children: ReactNode
  }

  export type DividerProps = Sx

  export type SectionHeadingProps = Sx & { children: ReactNode }
  export type DataPointLabelProps = Sx & { children: ReactNode }
  export type DataPointValueProps = Sx & { children: ReactNode }
  export type DataPointProps = Sx & { children: ReactNode }
}

const Card = ({ children, onClick, sx = {} }: Card.Props) => (
  <Box
    className="card"
    onClick={onClick}
    sx={(theme) => cardStyles({ onClickProvided: !!onClick, theme, ...sx })}
  >
    {children}
  </Box>
)

Card.Heading = ({ children, sx }: Card.HeadingProps) => (
  <Typography
    className="card-heading"
    sx={{ ...cardHeadingStyles, ...(sx ? sx : {}) }}
    variant="h3"
    component="h3"
  >
    {children}
  </Typography>
)

Card.Subheading = ({ children, sx }: Card.HeadingProps) => (
  <Typography
    className="card-heading"
    sx={{ ...cardSubheadingStyles, ...(sx ? sx : {}) }}
    variant="h3"
    component="h3"
  >
    {children}
  </Typography>
)

Card.Divider = ({ sx }: Card.DividerProps) => (
  <Box className="card-divider" sx={dividerStyles} />
)

Card.SectionHeading = ({ children, sx }: Card.SectionHeadingProps) => (
  <Typography
    sx={{ ...cardSectionHeadingStyles, ...(sx ? sx : {}) }}
    className="card-section-heading"
    variant="h4"
    component="h4"
  >
    {children}
  </Typography>
)
/** A flex container to contain Card.DataPointLabel and Card.DataPointValue */
Card.DataPoint = ({ children, sx }: Card.DataPointProps) => (
  <Box
    sx={{ ...dataPointStyles, ...(sx ? sx : {}) }}
    className="card-data-point"
  >
    {children}
  </Box>
)

Card.DataPointLabel = ({ children, sx = {} }: Card.DataPointLabelProps) => (
  <Typography
    sx={{ ...dataPointLabelStyles, ...sx }}
    className="card-data-point-label"
  >
    {children}
  </Typography>
)

Card.DataPointValue = ({ children, sx = {} }: Card.DataPointValueProps) => (
  <Typography
    sx={{ ...dataPointValueStyles, ...sx }}
    className="card-data-point-value"
  >
    {children}
  </Typography>
)

export default Card
