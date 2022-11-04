import {
  useState,
  useEffect,
  ChangeEvent,
  useCallback,
  KeyboardEvent,
} from 'react'
import Box from '@mui/material/Box'
import { MAX_RENT_PRICE } from './config'
import { H3, Body1, TextField } from '@bedbug/ui'

const useRentPriceState = ({
  rentPrice,
  setRentPrice,
  maxRentPrice,
}: {
  maxRentPrice: number
  rentPrice: number | null
  setRentPrice: (rentPrice: number | null) => void
}) => {
  const [rentPriceStr, setRentPriceStr] = useState<string>(
    rentPrice ? rentPrice.toString() : '',
  )

  useEffect(() => {
    const parsed = parseFloat(rentPriceStr)
    if (!isNaN(parsed)) return setRentPrice(parsed)
    if (rentPriceStr === '') setRentPrice(null)
  }, [rentPriceStr, setRentPrice])

  const handleKeydown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      // Allow arrow keys to be used to navigate the form
      if (
        e.key === 'ArrowUp' ||
        e.key === 'ArrowDown' ||
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowRight'
      )
        return

      // Always allow Tab for accessibility
      if (e.key === 'Tab') return

      // Always allow backspace
      if (e.key === 'Backspace') return

      if (e.key === 'Delete') return

      // Prevent non-numeric characters
      if (/[^0-9.]/.test(e.key)) return e.preventDefault()

      // Prevent more than four digits and two decimal places
      if (`${rentPriceStr}${e.key}`.match(/^[0-9]{1,4}\.[0-9]{3}$/))
        return e.preventDefault()

      // Prevent more than one decimal point
      if (rentPriceStr.includes('.') && e.key === '.') return e.preventDefault()

      // Prevent digits that would make the number greater than maxRentPrice
      if (
        e.key !== '.' &&
        (isNaN(parseFloat(e.key)) ||
        // Cap the rent price at $9,999
        rentPriceStr.includes('.')
          ? parseFloat(`${rentPriceStr}.${e.key}`) > maxRentPrice
          : parseFloat(`${rentPriceStr}${e.key}`) > maxRentPrice)
      )
        e.preventDefault()
    },
    [rentPriceStr, maxRentPrice],
  )

  return {
    rentPriceStr,
    handleKeydown,
    setRentPriceStr,
  }
}

const RentPrice = ({
  error,
  rentPrice,
  setRentPrice,
  didAttemptSubmit,
}: {
  error: string | null
  rentPrice: number | null
  didAttemptSubmit: boolean
  setRentPrice: (rentPrice: number | null) => void
}) => {
  const { rentPriceStr, setRentPriceStr, handleKeydown } = useRentPriceState({
    rentPrice,
    setRentPrice,
    maxRentPrice: MAX_RENT_PRICE,
  })

  return (
    <Box sx={{ mb: 3 }}>
      <H3 sx={{ mb: 1 }}>Rent Price</H3>
      <Body1 sx={{ mb: 1, fontSize: '0.8rem', lineHeight: '1.25rem' }}>
        What is the unit&apos;s monthly cost?
      </Body1>
      <Body1 sx={{ mb: 3, fontSize: '0.8rem', lineHeight: '1.25rem' }}>
        Help us flag overvalued rent prices based on location, upkeep,
        experiences with your landlord or property manager, or anything else
        factored into your rating.
      </Body1>

      <TextField
        sx={{ mb: 4 }}
        label="Rent Price"
        value={rentPriceStr}
        onKeyDown={handleKeydown}
        error={didAttemptSubmit && !!error}
        InputProps={{ startAdornment: '$' }}
        helperText={didAttemptSubmit && error}
        inputProps={{ inputMode: 'numeric' }}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
          setRentPriceStr(value)
        }
      />
    </Box>
  )
}

export default RentPrice
