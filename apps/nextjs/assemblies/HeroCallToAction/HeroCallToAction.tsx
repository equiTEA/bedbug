import Link from 'next/link'
import { H1 } from '@bedbug/ui'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import type { User } from '@bedbug/types'
import { flexColumnStyles, ctaContainerStyles } from './styles'

const HeroCallToAction = () => {
  const { route } = useRouter()
  return (
    <>
      {!['/signup', '/signin'].includes(route) ? (
        <Box sx={flexColumnStyles}>
          <Box sx={(theme) => ctaContainerStyles({ theme })}>
            <H1 sx={{ mb: 1 }}>
              It&apos;s <em>always</em> free for renters.
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
            <H1 sx={{ mb: 1 }}>
              It&apos;s <em>always</em> free for renters.
            </H1>

            <Link href="/" passHref>
              <Button color="textColor" variant="outlined">
                Search for your address
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </>
  )
}

export default HeroCallToAction
