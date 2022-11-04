import type { Theme } from '@mui/material/styles'

const BORDER_RADIUS = '60px'
const BORDER_RADIUS_MOBILE = '30px'
const MIN_HEIGHT = '624px'

export const pageContainerStyles = (theme: Theme) => ({
  width: '100vw',
  display: 'flex',
  height: '100vh',
  overflow: 'visible',
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

export const accountForBorderRadiusStyles = ({ theme }: { theme: Theme }) => ({
  top: 0,
  zIndex: 0,
  height: '100vh',
  position: 'absolute',
  width: BORDER_RADIUS,
  minHeight: MIN_HEIGHT,
  left: `-${BORDER_RADIUS}`,
  backgroundColor: 'backgroundColor.main',

  [theme.breakpoints.down('md')]: {
    width: BORDER_RADIUS_MOBILE,
    left: `-${BORDER_RADIUS_MOBILE}`,
  },
})

export const asideStyles = ({ theme }: { theme: Theme }) => ({
  zIndex: 1,
  width: '550px',
  height: '100vh',
  minHeight: MIN_HEIGHT,
  position: 'relative',
  backgroundColor: 'backgroundColor.main',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'auto',
    minHeight: '100vh',
  },
})

export const asideContentContainerStyles = ({ theme }: { theme: Theme }) => ({
  m: '0 auto',
  width: '100%',
  overflowY: 'auto',

  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    overflowY: 'visible',
  },
})

export const mainStyles = ({
  theme,
  route,
}: {
  theme: Theme
  route: string
}) => ({
  p: 6,
  zIndex: 2,
  display: 'flex',
  height: '100vh',
  position: 'relative',
  minHeight: MIN_HEIGHT,
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
  bottom: 0,
  right: '-.5px',
  height: '125px',

  [theme.breakpoints.down('md')]: {
    width: '300px',
    bottom: '-28px',

    '& svg': {
      width: '100%',
    },
  },
})

/**
 * On certain routes (and on small screens when the hero content
 * is not displayed), a logo is displayed at the top of the aside
 */
export const smallViewportLogoContainerStyles = {
  m: '0 auto',
  width: '200px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',

  '& > svg': {
    m: '0 auto',
    width: '80%',
  },
}
