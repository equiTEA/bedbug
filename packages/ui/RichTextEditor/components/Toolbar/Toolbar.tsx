import Menu from '../Menu'
import { useTheme } from '@mui/material/styles'
import { forwardRef, Ref, PropsWithChildren } from 'react'

import type { BaseProps, OrNull } from '../../types'

const Toolbar = forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLDivElement>>,
  ) => {
    const theme = useTheme()
    return (
      <Menu
        {...props}
        ref={(ref as Ref<HTMLDivElement>) ?? undefined}
        className={className}
        style={{
          display: 'flex',
          margin: '0 -16px',
          alignItems: 'center',
          marginBottom: '20px',
          position: 'relative',
          padding: '1px 18px 17px',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${theme.palette.secondary.main}`,
        }}
      />
    )
  },
)

Toolbar.displayName = 'Toolbar'
export default Toolbar
