import type { Theme } from '@mui/material/styles'

const PADDING = '16px'

export const cardStyles = ({
  onClickProvided,
  theme,
}: {
  onClickProvided: boolean
  theme: Theme
}) => ({
  width: '100%',
  padding: PADDING,
  borderColor: 'secondary.main',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  transition: 'background-color 0.15s ease-in-out',
  cursor: onClickProvided ? 'pointer' : 'default',

  /** Text */

  '.card-subheading, .card-section-heading, .card-data-point-label, .card-data-point-value':
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

        '&:hover .card-heading, &:hover .card-section-heading, &:hover .card-data-point-label, &:hover .card-data-point-value *':
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
      }
    : {}),
})

export const cardHeadingStyles = {
  fontFamily: 'Albert Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '20px',
  lineHeight: '133.4%',
  color: 'secondary.main',
  transition: 'color 0.15s ease-in-out',
  mb: 1,
}

export const cardSubheadingStyles = {
  fontFamily: 'Albert Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '133.4%',
  color: 'backgroundColor.contrastText',
  transition: 'color 0.15s ease-in-out',
}

export const cardSectionHeadingStyles = {
  fontFamily: 'Albert Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '12px',
  lineHeight: '133.4%',
  color: 'secondary.main',
  letterSpacing: '2px',
  textTransform: 'uppercase' as const,
  transition: 'color 0.15s ease-in-out',
  mb: 2,
}

export const dataPointStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
}

export const dataPointLabelStyles = {
  fontFamily: 'Albert Sans',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  color: 'secondary.main',
  lineHeight: '133.4%',
  transition: 'color 0.15s ease-in-out',
  mb: 1,
}

export const dataPointValueStyles = {
  fontFamily: 'Albert Sans',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  color: 'secondary.main',
  lineHeight: '133.4%',
  textAlign: 'right' as const,
  mb: 1,
  transition: 'color 0.15s ease-in-out',
}

export const dividerStyles = {
  height: '1px',
  width: `calc(100% + (${PADDING} * 2))`,
  transform: `translateX(-${PADDING})`,
  transition: 'background-color 0.15s ease-in-out',
}
