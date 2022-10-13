import React from 'react'
import Tab, { TabProps } from '@mui/material/Tab'

export type LinkTabProps = TabProps & {
  label?: string
  href?: string
}

export const LinkTab = (props: LinkTabProps) => (
  <Tab
    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
      e.preventDefault()
    }
    {...props}
  />
)
