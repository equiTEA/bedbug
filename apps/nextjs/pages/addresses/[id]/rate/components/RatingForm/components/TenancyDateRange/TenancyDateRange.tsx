import { H3, Body1 } from '@bedbug/ui'
import { useState } from 'react'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import DatePicker from '../../../../../../../../assemblies/RatingDatePicker'

type Props = {
  error: string | null
  didAttemptSubmit: boolean
  tenancyEndDate: Date | null
  tenancyStartDate: Date | null
  tenancyEndDateError: string | null
  tenancyStartDateError: string | null
  onEndDateChange: (year: Date | null) => void
  onStartDateChange: (year: Date | null) => void
}

const TenancyDateRange = ({
  error,
  tenancyEndDate,
  onEndDateChange,
  didAttemptSubmit,
  tenancyStartDate,
  onStartDateChange,
  tenancyEndDateError,
  tenancyStartDateError,
}: Props) => {
  const theme = useTheme()

  const [tenancyStartDateBlurred, setTenancyStartDateBlurred] = useState(false)
  const [tenancyEndDateBlurred, setTenancyEndDateBlurred] = useState(false)

  return (
    <Box sx={{ mt: 4 }}>
      <>
        <H3 sx={{ mb: 2 }}>When did your lease or tenancy start?</H3>

        <DatePicker
          disableFuture
          value={tenancyStartDate}
          onBlur={() => setTenancyStartDateBlurred(true)}
          onChange={(value: Date | null, keyboardInputValue?: string) =>
            onStartDateChange(value)
          }
          error={
            (tenancyStartDateBlurred || didAttemptSubmit) &&
            !!tenancyStartDateError
          }
          helperText={
            ((tenancyStartDateBlurred || didAttemptSubmit) &&
              tenancyStartDateError) ||
            ''
          }
        />

        <H3 sx={{ mb: 2 }}>When did / will your lease or tenancy end?</H3>
        <DatePicker
          value={tenancyEndDate}
          onBlur={() => setTenancyEndDateBlurred(true)}
          onChange={(value: Date | null, keyboardInputValue?: string) =>
            onEndDateChange(value)
          }
          error={
            (tenancyEndDateBlurred || didAttemptSubmit) && !!tenancyEndDateError
          }
          helperText={
            ((tenancyEndDateBlurred || didAttemptSubmit) &&
              tenancyEndDateError) ||
            ''
          }
        />

        {error && (
          <Body1
            sx={{
              mb: 0,
              mt: 0,
              color: 'error.main',
              fontWeight: 700,
              fontSize: '0.75rem',
            }}
          >
            {error}
          </Body1>
        )}
      </>
    </Box>
  )
}

export default TenancyDateRange
