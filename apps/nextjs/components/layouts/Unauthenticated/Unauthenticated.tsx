import {
  mainStyles,
  imageStyles,
  asideStyles,
  flexColumnStyles,
  heroHeadingStyles,
  ctaContainerStyles,
  logoContainerStyles,
  pageContainerStyles,
  asideContentContainerStyles,
  accountForBorderRadiusStyles,
  backgroundImageContainerStyles,
  smallViewportLogoContainerStyles,
} from './styles'
import Link from 'next/link'
import Logo from '../../Logo'
import Image from 'next/image'
import H1 from '../../library/H1'
import H2 from '../../library/H2'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import BedbugsImage from './Bedbugs.png'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import { Children, cloneElement, isValidElement } from 'react'

const UnauthenticatedLayout = ({ children, user, ...props }) => {
  const { route } = useRouter()
  const theme = useTheme()
  return (
    <Box sx={pageContainerStyles}>
      <Box sx={backgroundImageContainerStyles}>
        <Image
          style={imageStyles}
          src={BedbugsImage}
          alt="background texture of bedbug vector drawings"
          layout="fixed"
        />
      </Box>

      <Box sx={(theme) => mainStyles({ theme, route })} component="main">
        <Box sx={heroHeadingStyles}>
          <Box>
            <H2>Shady landlord?</H2>
            <H2>Inaccurate listing?</H2>
            <H2>Deadbeat property manager?</H2>
          </Box>

          <Box sx={{ mt: 6 }}>
            <H1>Research your next rental.</H1>
            <H1>Protect future renters.</H1>
          </Box>
        </Box>

        {!user && !['/signup', '/signin'].includes(route) ? (
          <Box sx={flexColumnStyles}>
            <Box sx={(theme) => ctaContainerStyles({ theme })}>
              <H1>
                It's <em>always</em> free for renters.
              </H1>

              <Link href="/signup" passHref>
                <Button color="textColor" variant="outlined">
                  Join our tenant union
                </Button>
              </Link>
            </Box>
          </Box>
        ) : (
          <Box sx={flexColumnStyles}>
            <Box sx={(theme) => ctaContainerStyles({ theme })}>
              <H1>
                It's <em>always</em> free for renters.
              </H1>

              <Link href="/" passHref>
                <Button color="textColor" variant="outlined">
                  Search for your address
                </Button>
              </Link>
            </Box>
          </Box>
        )}

        <Box sx={(theme) => logoContainerStyles({ theme })}>
          <Logo fill={theme.palette.secondary.main} />
        </Box>
      </Box>

      <Box sx={(theme) => asideStyles({ theme })} component="aside">
        <Box sx={(theme) => accountForBorderRadiusStyles({ theme })} />
        <Box sx={asideContentContainerStyles}>
          {!['/', `/addresses/[id]`].includes(route) && (
            <Box sx={smallViewportLogoContainerStyles}>
              <Logo fill={theme.palette.secondary.main} />
            </Box>
          )}

          {Children.map(children, (child) => {
            if (isValidElement(child)) return cloneElement(child, props)
            return child
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default UnauthenticatedLayout
