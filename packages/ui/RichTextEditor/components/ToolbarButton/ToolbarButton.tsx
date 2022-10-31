import Button from '@mui/material/Button'
import React, { Ref, PropsWithChildren } from 'react'
import { buttonStyles } from './styles'

import type { BaseProps, OrNull } from '../../types'

export const ToolbarButton = React.forwardRef(
  (
    {
      className,
      active,
      reversed,
      ...props
    }: PropsWithChildren<
      {
        active: boolean
        reversed: boolean
      } & BaseProps
    >,
    ref: Ref<OrNull<HTMLButtonElement>>,
  ) => (
    <Button
      variant="text"
      component="button"
      {...props}
      ref={(ref as Ref<HTMLButtonElement>) ?? undefined}
      className={className}
      sx={(theme) => buttonStyles({ theme, active, reversed })}
    />
  ),
)

ToolbarButton.displayName = 'ToolbarButton'
export default ToolbarButton
