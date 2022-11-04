import type { ReactNode } from 'react'
import type { Theme } from '@mui/material/styles'
import type { Element as SlateElement } from 'slate'

const Element = ({
  theme,
  element,
  children,
  attributes,
}: {
  theme: Theme
  attributes: any
  children: ReactNode
  element: SlateElement
}) => {
  const style = {
    margin: 0,
    textAlign: element.align,
    color: `${theme.palette.textColor.light} !important`,
  }

  switch (element.type) {
    case 'bulleted-list':
      return (
        <ul style={{ ...style, marginBottom: '.75rem' }} {...attributes}>
          {children}
        </ul>
      )

    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      )

    case 'numbered-list':
      return (
        <ol style={{ ...style, marginBottom: '.75rem' }} {...attributes}>
          {children}
        </ol>
      )

    case 'heading-one':
      return (
        <h1 style={{ ...style, marginBottom: '.25rem' }} {...attributes}>
          {children}
        </h1>
      )

    case 'heading-two':
      return (
        <h2
          style={{ ...style, fontSize: '18px', marginBottom: '.25rem' }}
          {...attributes}
        >
          {children}
        </h2>
      )

    case 'block-quote':
      return (
        <blockquote
          style={{
            ...style,
            margin: 0,
            paddingLeft: '1em',
            marginBlockEnd: 0,
            paddingRight: '1em',
            marginBlockStart: 0,
            marginBottom: '.75rem',
            borderLeft: `4px solid ${theme.palette.primary.main}`,
          }}
          {...attributes}
        >
          {children}
        </blockquote>
      )

    default:
      return (
        <p style={{ ...style, marginBottom: '.75rem' }} {...attributes}>
          {children}
        </p>
      )
  }
}

export default Element
