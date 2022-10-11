import { styles } from './styles'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export type CollapseButtonProps = {
  isCollapsed: boolean
  setIsCollapsed: (isCollapsed: boolean) => void
}

export const CollapseButton = ({
  isCollapsed,
  setIsCollapsed,
}: CollapseButtonProps) => {
  return (
    <IconButton
      onMouseEnter={(e) => e.stopPropagation()}
      color="secondary"
      sx={(theme) => styles({ theme, isCollapsed })}
      onClick={(e) => {
        e.stopPropagation()
        setIsCollapsed(!isCollapsed)
      }}
    >
      <KeyboardArrowDownIcon />
    </IconButton>
  )
}
