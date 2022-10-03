import type { Theme } from '@mui/material/styles'

const BORDER_RADIUS = '60px'
const BORDER_RADIUS_MOBILE = '30px'

export const pageContainerStyles = (theme) => ({
  width: '100vw',
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
  flexDirection: 'row',
  position: 'relative',
  justifyContent: 'space-between',
  backgroundColor: 'backgroundColor.main',

  [theme.breakpoints.down('md')]: {
    height: 'auto',
    minHeight: '100vh',
    flexDirection: 'column',
  },
})

export const backgroundImageContainerStyles = (theme) => ({
  top: '-16px',
  left: '-16px',
  position: 'absolute',
  width: 'calc(100vw + 32px)',
  height: 'calc(100vh + 32px)',

  /** Place a solid blue background behind the corner radii */
  [theme.breakpoints.down('md')]: {
    '&::after': {
      top: 0,
      right: 0,
      content: '""',
      position: 'absolute',
      width: BORDER_RADIUS_MOBILE,
      height: 'calc(100% - 16px)',
      backgroundColor: 'backgroundColor.main',
    },
  },
})

export const imageStyles = { opacity: 0.5 }

export const accountForBorderRadiusStyles = ({ theme }: { theme: Theme }) => ({
  top: 0,
  zIndex: 0,
  height: '100vh',
  position: 'absolute',
  width: BORDER_RADIUS,
  left: `-${BORDER_RADIUS}`,
  backgroundColor: 'backgroundColor.main',

  [theme.breakpoints.down('md')]: {
    width: BORDER_RADIUS_MOBILE,
    left: `-${BORDER_RADIUS_MOBILE}`,
  },
})

export const asideStyles = ({ theme }: { theme: Theme }) => ({
  zIndex: 1,
  padding: 3,
  width: '550px',
  height: '100vh',
  position: 'relative',
  backgroundColor: 'backgroundColor.main',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'auto',
    minHeight: '100vh',
  },
})

export const asideContentContainerStyles = {
  m: '0 auto',
  width: '100%',
  maxWidth: '450px',
}

export const mainStyles = ({ theme, route }) => ({
  p: 6,
  zIndex: 2,
  display: 'flex',
  height: '100vh',
  position: 'relative',
  alignItems: 'flex-end',
  flexDirection: 'column',
  width: 'calc(100vw - 400px)',
  justifyContent: 'space-between',
  borderTopRightRadius: BORDER_RADIUS,
  borderBottomRightRadius: BORDER_RADIUS,
  boxShadow: '4px 0px 20px 0px rgba(25, 25, 25, .35)',
  background: `linear-gradient(to left, ${theme.palette.primary.main}, rgba(62, 77, 93, .5))`,

  [theme.breakpoints.down('md')]: {
    width: '100vw',
    height: 'auto',

    borderTopRightRadius: BORDER_RADIUS_MOBILE,
    borderBottomRightRadius: BORDER_RADIUS_MOBILE,

    ...(route !== '/' ? { display: 'none' } : {}),
  },
})

export const logoContainerStyles = ({ theme }: { theme: Theme }) => ({
  position: 'absolute',
  bottom: '-6px',
  right: '-.5px',

  [theme.breakpoints.down('md')]: {
    width: '300px',
    bottom: '-28px',

    '& svg': {
      width: '100%',
    },
  },
})

export const flexColumnStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  justifyContent: 'flex-end',
}

export const ctaContainerStyles = ({ theme }: { theme: Theme }) => ({
  mb: '25vh',
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',

  '& > h1, p': { textAlign: 'right' },

  [theme.breakpoints.down('md')]: {
    mb: '15vh',
    mt: 5,
    height: 'auto',
  },
})

export const heroHeadingStyles = {
  display: 'flex',
  alignSelf: 'flex-start',
  flexDirection: 'column',
  justifySelf: 'flex-start',
}

/**
 * On certain routes (and on small screens when the hero content
 * is not displayed), a logo is displayed at the top of the aside
 */
export const smallViewportLogoContainerStyles = {
  m: '0 auto',
  width: '50%',
  display: 'flex',
  maxWidth: '400px',
  minWidth: '200px',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',

  '& > svg': {
    m: '0 auto',
    width: '80%',
  },
}
