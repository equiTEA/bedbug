import React from 'react'
import Tab from '@mui/material/Tab'

type Props = {
  label?: string
  href?: string
}

const LinkTab = (props: Props) => (
  <Tab
    component="a"
    onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
      e.preventDefault()
    }
    {...props}
  />
)

export default LinkTab
