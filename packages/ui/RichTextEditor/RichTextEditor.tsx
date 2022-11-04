import isHotkey from 'is-hotkey'
import { HOTKEYS } from './config'
import Box from '@mui/material/Box'
import { toggleMark } from './utils'
import Leaf from './components/Leaf'
import Element from './components/Element'
import { containerStyles } from './styles'
import Toolbar from './components/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import { withHistory } from 'slate-history'
import { useCallback, useMemo } from 'react'
import { useTheme } from '@mui/material/styles'
import MarkButton from './components/MarkButton'
import { Descendant, createEditor } from 'slate'
import BlockButton from './components/BlockButton'
import { Editable, withReact, Slate } from 'slate-react'

import TitleIcon from '@mui/icons-material/Title'
import CodeIcon from '@mui/icons-material/CodeOutlined'
import BlockQuoteIcon from '@mui/icons-material/FormatQuote'
import BoldIcon from '@mui/icons-material/FormatBoldOutlined'
import ItalicIcon from '@mui/icons-material/FormatItalicOutlined'
import UnderlineIcon from '@mui/icons-material/FormatUnderlinedOutlined'
import BulletedListIcon from '@mui/icons-material/FormatListBulletedOutlined'
import NumberedListIcon from '@mui/icons-material/FormatListNumberedOutlined'

export type RichTextEditorProps = {
  error?: boolean
  readonly?: boolean
  chromeless?: boolean
  placeholder?: string
  document: Descendant[]
  onDocumentChange?: (document: Descendant[]) => void
}

export const RichTextEditor = ({
  error,
  readonly,
  chromeless,
  placeholder,
  onDocumentChange,
  document = [{ type: 'paragraph', children: [{ text: '' }] }],
}: RichTextEditorProps) => {
  const theme = useTheme()

  const renderElement = useCallback(
    (props) => <Element theme={theme} {...props} />,
    [theme],
  )
  const renderLeaf = useCallback(
    (props) => <Leaf theme={theme} {...props} />,
    [theme],
  )
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  return (
    <Box sx={(theme) => containerStyles({ theme, chromeless, error })}>
      <Slate onChange={onDocumentChange} editor={editor} value={document}>
        {!chromeless && (
          <Toolbar error={error}>
            <Tooltip enterDelay={500} title="Bold">
              <Box component="span">
                <MarkButton format="bold" icon={<BoldIcon />} />
              </Box>
            </Tooltip>
            <Tooltip enterDelay={500} title="Italic">
              <Box component="span">
                <MarkButton format="italic" icon={<ItalicIcon />} />
              </Box>
            </Tooltip>
            <Tooltip enterDelay={500} title="Underline">
              <Box component="span">
                <MarkButton format="underline" icon={<UnderlineIcon />} />
              </Box>
            </Tooltip>
            <Tooltip enterDelay={500} title="Code">
              <Box component="span">
                <MarkButton format="code" icon={<CodeIcon />} />
              </Box>
            </Tooltip>
            <Tooltip enterDelay={500} title="Heading 1">
              <Box component="span">
                <BlockButton format="heading-one" icon={<TitleIcon />} />
              </Box>
            </Tooltip>
            <Tooltip enterDelay={500} title="Heading 2">
              <Box component="span">
                <BlockButton
                  format="heading-two"
                  icon={<TitleIcon sx={{ fontSize: '16px' }} />}
                />
              </Box>
            </Tooltip>
            <Tooltip enterDelay={500} title="Block Quote">
              <Box component="span">
                <BlockButton format="block-quote" icon={<BlockQuoteIcon />} />
              </Box>
            </Tooltip>
            <Tooltip enterDelay={500} title="Ordered List">
              <Box component="span">
                <BlockButton
                  format="numbered-list"
                  icon={<NumberedListIcon />}
                />
              </Box>
            </Tooltip>
            <Tooltip enterDelay={500} title="Unordered List">
              <Box component="span">
                <BlockButton
                  format="bulleted-list"
                  icon={<BulletedListIcon />}
                />
              </Box>
            </Tooltip>
          </Toolbar>
        )}

        <Editable
          spellCheck
          autoFocus
          readOnly={readonly}
          renderLeaf={renderLeaf}
          placeholder={placeholder}
          renderElement={renderElement}
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event as any)) {
                event.preventDefault()
                const mark = HOTKEYS[hotkey]
                toggleMark(editor, mark)
              }
            }
          }}
        />
      </Slate>
    </Box>
  )
}
