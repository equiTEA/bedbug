export const h3Styles = (theme) => ({
  fontFamily: 'Albert Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '1.25px',
  color: 'secondary.main',

  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    lineHeight: '20px',
  },
})
