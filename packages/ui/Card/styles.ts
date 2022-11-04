import { alpha } from '@mui/material/styles'

import type { Theme } from '@mui/material/styles'
import type { SystemCssProperties } from '@mui/system'

const PADDING = '16px'

export const cardStyles = ({
  onClickProvided,
  theme,
  sx = {},
}: {
  onClickProvided: boolean
  theme: Theme
  sx: SystemCssProperties<Theme>
}) => ({
  py: 2,
  width: '100%',
  borderWidth: '1px',
  borderRadius: '4px',
  borderStyle: 'solid',
  cursor: onClickProvided ? 'pointer' : 'default',
  transition: 'background-color 0.15s ease-in-out',
  borderColor: alpha(
    sx?.color ? (sx.color as string) : theme.palette.secondary.main,
    0.25,
  ),
  backgroundColor: alpha(
    sx?.color ? (sx.color as string) : theme.palette.secondary.main,
    0.05,
  ),

  /** Text */

  '& .card-subheading, .card-section-heading, .card-data-point-label, .card-data-point-value':
    {
      color: 'textColor.main',
    },

  /** Divider */

  '& .card-divider': {
    my: PADDING,
    backgroundColor: 'secondary.main',
    opacity: 0.2,
  },

  /** Typography / Iconography */
  '& .MuiSvgIcon-root, & .MuiTypography-root': {
    transition: 'color 0.15s ease-in-out',
  },

  /** Indicate the card is clickable if an onClick handler is provided */

  ...(onClickProvided
    ? {
        '&:hover': {
          backgroundColor: 'secondary.main',
          transition: 'background-color 0.15s ease-in-out',
          color: 'backgroundColor.contrastText',
        },

        '&:hover .card-heading, &:hover .card-section-heading, &:hover .card-data-point-label, &:hover .card-data-point-value *, &:hover *':
          {
            color: 'secondary.contrastText',
          },

        '&:hover .card-divider': {
          backgroundColor: 'secondary.contrastText',
        },

        '&:hover .MuiSvgIcon-root': {
          color: theme.palette.secondary.contrastText,
          transition: 'color 0.15s ease-in-out',
        },

        '&:hover .MuiButton-text': {
          backgroundColor: `${theme.palette.secondary.dark} !important`,
          color: `${theme.palette.secondary.contrastText} !important`,
        },

        '&:hover .MuiIconButton-root': {
          border: `1px solid ${alpha(
            theme.palette.secondary.contrastText,
            0.25,
          )}`,
        },
      }
    : {}),

  ...sx,
})

export const cardHeadingStyles = {
  mb: 1,
  px: PADDING,
  fontWeight: 500,
  fontSize: '20px',
  fontStyle: 'normal',
  lineHeight: '133.4%',
  color: 'secondary.main',
  fontFamily: 'Albert Sans, sans-serif',
  transition: 'color 0.15s ease-in-out',
}

export const cardSubheadingStyles = {
  px: PADDING,
  fontWeight: 700,
  fontSize: '16px',
  fontStyle: 'normal',
  lineHeight: '133.4%',
  color: 'backgroundColor.contrastText',
  transition: 'color 0.15s ease-in-out',
  fontFamily: 'Albert Sans, sans-serif',
}

export const cardSectionHeadingStyles = {
  mb: 2,
  px: PADDING,
  fontWeight: 700,
  fontSize: '12px',
  fontStyle: 'normal',
  lineHeight: '133.4%',
  letterSpacing: '2px',
  color: 'secondary.main',
  textTransform: 'uppercase' as const,
  transition: 'color 0.15s ease-in-out',
  fontFamily: 'Albert Sans, sans-serif',
}

export const dataPointStyles = {
  px: PADDING,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
}

export const dataPointLabelStyles = {
  mb: 1,
  width: 'auto',
  fontWeight: 500,
  maxWidth: '49%',
  fontSize: '14px',
  fontStyle: 'normal',
  lineHeight: '133.4%',
  color: 'secondary.main',
  fontFamily: 'Albert Sans',
  transition: 'color 0.15s ease-in-out',
}

export const dataPointValueStyles = {
  mb: 1,
  width: 'auto',
  maxWidth: '49%',
  fontWeight: 400,
  fontSize: '14px',
  fontStyle: 'normal',
  lineHeight: '133.4%',
  color: 'secondary.main',
  fontFamily: 'Albert Sans',
  textAlign: 'right' as const,
  transition: 'color 0.15s ease-in-out',
}

export const dividerStyles = {
  height: '1px',
  width: `100%`,
  transition: 'background-color 0.15s ease-in-out',
}
