import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import { ratingButtonStyles } from './styles'
import { Body1, RatingIcon } from '@bedbug/ui'
import IconButton from '@mui/material/IconButton'
import FormHelperText from '@mui/material/FormHelperText'

type Props = {
  error: string | null
  didAttemptSubmit: boolean
  ratingInitialValue: number | null
  onRatingChange: (rating: number) => void
}

const Rating = ({
  error,
  onRatingChange,
  didAttemptSubmit,
  ratingInitialValue,
}: Props) => {
  const [rating, setRating] = useState<number | null>(ratingInitialValue)

  useEffect(() => {
    if (!rating) return
    onRatingChange(rating)
  }, [rating, onRatingChange])

  return (
    <>
      <Body1 sx={{ mb: 2, fontSize: '0.75rem', lineHeight: '1.25rem' }}>
        How do you feel about the way this address is managed by the landlord
        and property manager?
      </Body1>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: error && didAttemptSubmit ? 1 : 4,
        }}
      >
        <IconButton
          onClick={() => setRating(1)}
          sx={(theme) =>
            ratingButtonStyles({ theme, isSelected: rating === 1 })
          }
        >
          <RatingIcon rating={1} />
        </IconButton>

        <IconButton
          onClick={() => setRating(2)}
          sx={(theme) =>
            ratingButtonStyles({ theme, isSelected: rating === 2 })
          }
        >
          <RatingIcon rating={2} />
        </IconButton>

        <IconButton
          onClick={() => setRating(3)}
          sx={(theme) =>
            ratingButtonStyles({ theme, isSelected: rating === 3 })
          }
        >
          <RatingIcon rating={3} />
        </IconButton>

        <IconButton
          onClick={() => setRating(4)}
          sx={(theme) =>
            ratingButtonStyles({ theme, isSelected: rating === 4 })
          }
        >
          <RatingIcon rating={4} />
        </IconButton>

        <IconButton
          onClick={() => setRating(5)}
          sx={(theme) =>
            ratingButtonStyles({ theme, isSelected: rating === 5 })
          }
        >
          <RatingIcon rating={5} />
        </IconButton>
      </Box>

      {error && didAttemptSubmit && (
        <FormHelperText
          error
          sx={{ mt: 1, mb: 1, fontFamily: '"Albert Sans", sans-serif' }}
        >
          {error}
        </FormHelperText>
      )}
    </>
  )
}

export default Rating
