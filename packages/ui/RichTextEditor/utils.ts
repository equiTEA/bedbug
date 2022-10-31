import { Editor } from 'slate'

import type { CustomText } from './types'

export const isMarkActive = (
  editor: Editor,
  format: keyof Omit<CustomText, 'text'>,
) => {
  const marks: Omit<CustomText, 'text'> | null = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

export const toggleMark = (
  editor: Editor,
  format: keyof Omit<CustomText, 'text'>,
) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}
