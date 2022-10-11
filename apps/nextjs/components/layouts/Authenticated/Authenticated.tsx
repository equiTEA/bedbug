import {
  mainStyles,
  asideStyles,
  logoContainerStyles,
  pageContainerStyles,
  asideContentContainerStyles,
  accountForBorderRadiusStyles,
} from './styles'
import Logo from '../../Logo'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import { MAPBOX_CONTAINER_ID } from './config'
import { useTheme } from '@mui/material/styles'
import UserProfileMenu from '../../../assemblies/UserProfileMenu'
import { Children, cloneElement, isValidElement, ReactNode } from 'react'

import type { User } from '@bedbug/types'

type Props = {
  /** The content to display in the main column. */
  children: ReactNode
  /** The currently logged-in user  */
  user: User
}

const AuthenticatedLayout = ({ children, user, ...props }: Props) => {
  const { route } = useRouter()
  const theme = useTheme()

  return (
    <Box sx={pageContainerStyles}>
      {/* Hero (Map Placeholder) */}
      <Box
        id={MAPBOX_CONTAINER_ID}
        sx={(theme) => mainStyles({ theme, route })}
        component="main"
      >
        <Box sx={(theme) => logoContainerStyles({ theme })}>
          <Logo fill={theme.palette.secondary.main} />
        </Box>

        <UserProfileMenu user={user} />
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

export default AuthenticatedLayout
