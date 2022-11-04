import Box from '@mui/material/Box'
import { forwardRef, Ref, PropsWithChildren } from 'react'

import type { OrNull, BaseProps } from '../../types'

const ToolbarButtonIcon = forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLSpanElement>>,
  ) => (
    <Box
      component="span"
      {...props}
      ref={(ref as Ref<HTMLSpanElement>) ?? undefined}
      className={className}
      sx={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '18px',
        verticalAlign: 'text-bottom',
        height: '16px',
      }}
    />
  ),
)

ToolbarButtonIcon.displayName = 'ToolbarButtonIcon'
export default ToolbarButtonIcon
