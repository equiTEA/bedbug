import Box from '@mui/material/Box'
import { forwardRef, Ref, PropsWithChildren } from 'react'

import type { BaseProps, OrNull } from '../../types'

const Menu = forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLDivElement>>,
  ) => (
    <Box
      {...props}
      ref={(ref as Ref<HTMLDivElement>) ?? undefined}
      className={className}
      sx={{
        '& > *': {
          display: 'inline-block',
        },
        '& > * + *': {
          marginSeft: '15px',
        },
      }}
    />
  ),
)

Menu.displayName = 'Menu'

export default Menu
