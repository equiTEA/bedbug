export const h1Styles = (theme) => ({
  fontFamily: 'Albert Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '32px',
  lineHeight: '40px',
  letterSpacing: '0.4px',
  color: 'secondary.main',

  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    lineHeight: '32px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    lineHeight: '28px',
  },
})
