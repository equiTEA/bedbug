import Link from 'next/link'
import Box from '@mui/material/Box'
import { Card, Body1 } from '@bedbug/ui'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import { flexContainerStyles, buttonAlignmentStyles } from './styles'

import type { ReactNode } from 'react'
import type { UrlObject } from 'url'

type Props = {
  icon: ReactNode
  text: string
  buttonHref: UrlObject | string
  buttonText: string
}

const CTACard = ({ icon, text, buttonText, buttonHref }: Props) => {
  const theme = useTheme()
  return (
    <Box sx={{ mb: 2 }}>
      <Card
        sx={{
          border: 'none',
          backgroundImage: `linear-gradient(to bottom right, ${theme.palette.backgroundColor.dark}, ${theme.palette.primary.main})`,
        }}
      >
        <Box sx={{ pl: 2, pr: 3, pb: 1 }}>
          <Box sx={(theme) => flexContainerStyles({ theme })}>
            {icon}
            <Body1>{text}</Body1>
          </Box>

          <Box sx={buttonAlignmentStyles}>
            <Link passHref href={buttonHref}>
              <Button color="secondary" href="/new-address" variant="outlined">
                {buttonText}
              </Button>
            </Link>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}

export default CTACard
