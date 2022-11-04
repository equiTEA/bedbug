import dayjs from 'dayjs'
import { TextField } from '@bedbug/ui'
import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { datePickerStyles, inputStyles } from './styles'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

type Props = {
  error: boolean
  helperText?: string
  value: Date | null
  onBlur: () => void
  disableFuture?: boolean
  onChange: (value: Date | null, keyboardInputValue: string | undefined) => void
}

const RatingDatePicker = ({
  error,
  value,
  onBlur,
  onChange,
  helperText,
  disableFuture = false,
}: Props) => {
  const theme = useTheme()

  const [didClientSideRender, setDidClientSideRender] = useState(false)

  /** Classnames don't match between SSR and CSR - suppress warning and only render on client */
  useEffect(() => setDidClientSideRender(true), [])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {didClientSideRender && (
        <DatePicker
          value={value}
          onChange={onChange}
          disableFuture={disableFuture}
          minDate={dayjs().subtract(20, 'years').toDate()}
          PaperProps={{
            sx: datePickerStyles({ theme }),
          }}
          renderInput={(props) => (
            <TextField
              {...props}
              onBlur={onBlur}
              sx={inputStyles({ theme })}
              error={error}
              helperText={helperText}
            />
          )}
        />
      )}
    </LocalizationProvider>
  )
}

export default RatingDatePicker
