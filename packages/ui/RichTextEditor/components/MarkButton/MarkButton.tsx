import Button from '../ToolbarButton'
import { useSlate } from 'slate-react'
import Icon from '../ToolbarButtonIcon'

import type { CustomText } from '../../types'
import type { ReactNode, MouseEvent } from 'react'
import { toggleMark, isMarkActive } from '../../utils'

const MarkButton = ({
  format,
  icon,
}: {
  format: keyof Omit<CustomText, 'text'>
  icon: ReactNode
}) => {
  const editor = useSlate()
  return (
    <Button
      tabIndex={0}
      active={isMarkActive(editor, format)}
      onMouseDown={(event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

export default MarkButton
