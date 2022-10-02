export const h2Styles = (theme) => ({
  fontFamily: 'Albert Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: '24px',
  lineHeight: '32px',
  letterSpacing: '0.4px',
  color: 'secondary.main',

  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    lineHeight: '32px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
    lineHeight: '24px',
  },
})
