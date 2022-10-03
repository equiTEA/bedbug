export const body1Styles = (theme) => ({
  fontFamily: 'Albert Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.4px',

  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    lineHeight: '24px',
  },
})
