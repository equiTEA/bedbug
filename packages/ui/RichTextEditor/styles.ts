import type { Theme } from '@mui/material/styles'

export const containerStyles = ({
  theme,
  chromeless,
}: {
  theme: Theme
  chromeless?: boolean
}) => ({
  p: 2,
  pb: 1,
  lineHeight: 1.5,
  borderRadius: '4px',
  border: `1px solid ${theme.palette.secondary.main}`,

  '& [data-slate-string="true"]': {
    color: theme.palette.textColor.light,
  },

  '[data-slate-editor="true"]': {
    minHeight: '100px !important',
  },

  '[data-slate-placeholder="true"]': {
    fontFamily: '"Albert Sans", sans-serif !important',
  },

  ...(chromeless
    ? {
        p: 0,
        pb: 0,
        border: 'none',

        '[data-slate-editor="true"]': {
          minHeight: '0 !important',
        },
      }
    : {}),
})
