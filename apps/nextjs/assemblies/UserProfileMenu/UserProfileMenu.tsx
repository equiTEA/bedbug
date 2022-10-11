import Link from 'next/link'
import {
  userInfoStyles,
  containerStyles,
  menuPaperStyles,
  unauthenticatedAvatarButtonStyles,
} from './styles'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import Divider from '@mui/material/Divider'
import MuiAvatar from '@mui/material/Avatar'
import MenuItem from '@mui/material/MenuItem'
import { Avatar, Body1, H3 } from '@bedbug/ui'
import IconButton from '@mui/material/IconButton'
import SignInIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import ListItemIcon from '@mui/material/ListItemIcon'
import SignUpIcon from '@mui/icons-material/PersonAdd'
import { graphql, endSession } from '@bedbug/networking'

import type { User } from '@bedbug/types'

type Props = {
  /** The currently logged-in user  */
  user?: User
}

const UserProfileMenu = ({ user }: Props) => {
  const { reload } = useRouter()
  const menuAnchorRef = useRef<HTMLButtonElement>(null)
  const [shouldDisplayMenu, setShouldDisplayMenu] = useState(false)

  const logout = async () => {
    await graphql({ query: endSession })
    reload()
  }

  return (
    <Box sx={(theme) => containerStyles({ theme })}>
      <IconButton
        size="small"
        sx={{ ml: 2 }}
        ref={menuAnchorRef}
        onClick={() => setShouldDisplayMenu(!shouldDisplayMenu)}
        aria-haspopup="true"
        aria-expanded={shouldDisplayMenu ? 'true' : undefined}
        aria-controls={shouldDisplayMenu ? 'account-menu' : undefined}
      >
        {user && user?.username ? (
          <Avatar name={user.username} />
        ) : (
          <MuiAvatar
            sx={(theme) => unauthenticatedAvatarButtonStyles({ theme })}
          >
            <PersonIcon />
          </MuiAvatar>
        )}
      </IconButton>

      <Menu
        id="account-menu"
        open={shouldDisplayMenu}
        anchorEl={menuAnchorRef.current}
        onClose={() => setShouldDisplayMenu(false)}
        onClick={() => setShouldDisplayMenu(false)}
        PaperProps={{ elevation: 0, sx: menuPaperStyles }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {user && user?.username ? (
          <Box>
            <Box sx={userInfoStyles}>
              <Avatar name={user.username} size={40} />
              <H3 sx={{ color: 'backgroundColor.main', mb: 0 }}>
                {user.username}
              </H3>
            </Box>

            <Divider />

            <MenuItem onClick={logout}>
              <ListItemIcon>
                <LogoutIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <Body1 sx={{ color: 'backgroundColor.main', mb: 0 }}>
                Logout
              </Body1>
            </MenuItem>
          </Box>
        ) : (
          <Box>
            <Link href="/signup">
              <MenuItem>
                <ListItemIcon>
                  <SignUpIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <Body1 sx={{ color: 'backgroundColor.main', mb: 0 }}>
                  Sign Up
                </Body1>
              </MenuItem>
            </Link>

            <Link href="/signin">
              <MenuItem>
                <ListItemIcon>
                  <SignInIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <Body1 sx={{ color: 'backgroundColor.main', mb: 0 }}>
                  Sign In
                </Body1>
              </MenuItem>
            </Link>
          </Box>
        )}
      </Menu>
    </Box>
  )
}
export default UserProfileMenu
