import Button from '../ToolbarButton'
import { useSlate } from 'slate-react'
import Icon from '../ToolbarButtonIcon'
import { LIST_TYPES } from '../../config'
import { Editor, Element as SlateElement, Transforms } from 'slate'

import type { CustomElement } from '../../types'
import type { ReactNode, MouseEvent } from 'react'

const isBlockActive = (
  editor: Editor,
  format: CustomElement['type'],
  blockType = 'type',
) => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    }),
  )

  return !!match
}

const toggleBlock = (editor: Editor, format: CustomElement['type']) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type),
    split: true,
  })

  const newProperties: Partial<SlateElement> = {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  }

  Transforms.setNodes<SlateElement>(editor, newProperties)

  if (!isActive && isList) {
    const block = {
      type: format as 'bulleted-list' | 'numbered-list',
      children: [],
    }
    Transforms.wrapNodes(editor, block)
  }
}

const BlockButton = ({
  format,
  icon,
}: {
  format: CustomElement['type']
  icon: ReactNode
}) => {
  const editor = useSlate()
  return (
    <Button
      tabIndex={0}
      active={isBlockActive(editor, format)}
      onMouseDown={(event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

export default BlockButton
