import {
  mainStyles,
  imageStyles,
  asideStyles,
  heroHeadingStyles,
  logoContainerStyles,
  pageContainerStyles,
  asideContentContainerStyles,
  accountForBorderRadiusStyles,
  backgroundImageContainerStyles,
} from './styles'
import Logo from '../../Logo'
import Image from 'next/image'
import { H1, H2 } from '@bedbug/ui'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import BedbugsImage from './Bedbugs.png'
import { useTheme } from '@mui/material/styles'
import UserProfileMenu from '../../../assemblies/UserProfileMenu'
import HeroCallToAction from '../../../assemblies/HeroCallToAction'
import { Children, cloneElement, isValidElement, ReactNode } from 'react'

type Props = {
  /** The content to display in the main column. */
  children: ReactNode
}

const UnauthenticatedLayout = ({ children, ...props }: Props) => {
  const { route } = useRouter()
  const theme = useTheme()
  return (
    <Box sx={pageContainerStyles}>
      <Box sx={backgroundImageContainerStyles}>
        <Image
          unoptimized
          style={imageStyles}
          src={BedbugsImage}
          alt="background texture of bedbug vector drawings"
          layout="fixed"
        />
      </Box>

      {/* Hero (Map Placeholder) */}
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

        <HeroCallToAction />

        <Box sx={(theme) => logoContainerStyles({ theme })}>
          <Logo fill={theme.palette.secondary.main} />
        </Box>

        <UserProfileMenu />
      </Box>

      {/* Aside */}
      <Box sx={(theme) => asideStyles({ theme })} component="aside">
        <Box sx={(theme) => accountForBorderRadiusStyles({ theme })} />
        <Box sx={(theme) => asideContentContainerStyles({ theme })}>
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
