import Link from 'next/link'
import MuiLink from '@mui/material/Link'
import { iconLinkStyles } from './styles'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export type ChevronLinkProps = {
  href: string
  linkText: string
  color?: string
  underline?: 'none' | 'hover' | 'always'
}

export const BackLink = ({
  color = 'secondary.main',
  href,
  linkText,
}: ChevronLinkProps) => (
  <Link passHref href={href}>
    <MuiLink sx={iconLinkStyles} color={color} underline="hover">
      <ChevronLeftIcon sx={{ ml: -1, mr: 1 }} /> {linkText}
    </MuiLink>
  </Link>
)

export const ForwardLink = ({
  color = 'secondary.main',
  href,
  linkText,
}: ChevronLinkProps) => (
  <Link passHref href={href}>
    <MuiLink sx={iconLinkStyles} color={color} underline="hover">
      {linkText} <ChevronRightIcon sx={{ ml: 1, mr: -1 }} />
    </MuiLink>
  </Link>
)
