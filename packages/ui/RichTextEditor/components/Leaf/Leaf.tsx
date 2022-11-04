import type { ReactNode } from 'react'
import type { Theme } from '@mui/material/styles'
import type { CustomElement, CustomText } from '../../types'

/**
 * A "Leaf" is a formatted text node: the lowest level nodes in the Slate document tree.
 */
const Leaf = <T extends CustomElement>({
  attributes,
  children,
  leaf,
  theme,
}: {
  attributes: T
  children: ReactNode
  leaf: CustomText
  theme: Theme
}) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = (
      <code
        spellCheck={false}
        style={{
          fontSize: '14px',
          paddingTop: '4px',
          marginLeft: '2px',
          paddingLeft: '7px',
          marginRight: '2px',
          paddingRight: '7px',
          borderRadius: '4px',
          paddingBottom: '4px',
          fontFamily:
            'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro","Fira Mono", "Droid Sans Mono", "Courier New", monospace !important',
          backgroundColor: (leaf as any).placeholder
            ? theme.palette.backgroundColor.main
            : theme.palette.backgroundColor.dark,
        }}
      >
        {children}
      </code>
    )
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

export default Leaf
