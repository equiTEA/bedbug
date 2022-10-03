import { useMemo } from 'react'
import Tooltip from '@mui/material/Tooltip'

import VerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined'
import SatisfiedIcon from '@mui/icons-material/SentimentSatisfiedOutlined'
import NeutralIcon from '@mui/icons-material/SentimentNeutralOutlined'
import DissatisfiedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined'
import VeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined'

import type { SxProps } from '@mui/system'

type Props = {
  /** The rating to display */
  rating: number
  /** The color to use for the icon */
  color?:
    | 'inherit'
    | 'disabled'
    | 'action'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
  /** The size of the icon */
  size?: number
  /** The MUI sx prop to pass to the icon */
  sx?: SxProps
}

const RatingIcon = ({
  rating,
  color = 'secondary',
  size = 32,
  sx = {},
}: Props) => {
  const icon = useMemo(() => {
    const props = {
      color,
      sx: { fontSize: size, transition: 'color .15s', ...sx },
    }

    switch (true) {
      case rating >= 4.5:
        return <VerySatisfiedIcon {...props} />

      case rating >= 4:
        return <SatisfiedIcon {...props} />

      case rating >= 3:
        return <NeutralIcon {...props} />

      case rating >= 2:
        return <DissatisfiedIcon {...props} />

      case rating >= 1:
        return <VeryDissatisfiedIcon {...props} />

      default:
        throw new Error(
          `Invalid rating: expected float between 1 and 5, received: ${rating}`,
        )
    }
  }, [color, size, sx, rating])

  return (
    <Tooltip arrow placement="right" title={`${rating} / 5`} enterDelay={250}>
      {icon}
    </Tooltip>
  )
}

export default RatingIcon
