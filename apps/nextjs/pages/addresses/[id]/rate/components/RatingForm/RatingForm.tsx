import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Rating from './components/Rating'
import { H3, Body1, Card } from '@bedbug/ui'
import Collapse from '@mui/material/Collapse'
import { useRateAddress } from '@bedbug/hooks'
import RentPrice from './components/RentPrice'
import { useTheme } from '@mui/material/styles'
import RatingBody from './components/RatingBody'
import TenancyDateRange from './components/TenancyDateRange'

const RatingForm = () => {
  const theme = useTheme()
  const {
    ratingForm: {
      body,
      errors,
      setBody,
      rentPrice,
      sentiment,
      setRentPrice,
      setSentiment,
      tenancyEndDate,
      didAttemptSubmit,
      tenancyStartDate,
      setTenancyEndDate,
      setTenancyStartDate,
    },
  } = useRateAddress()

  return (
    <>
      <Rating
        error={errors.sentiment}
        onRatingChange={setSentiment}
        ratingInitialValue={sentiment}
        didAttemptSubmit={didAttemptSubmit}
      />

      <RentPrice
        rentPrice={rentPrice}
        error={errors.rentPrice}
        setRentPrice={setRentPrice}
        didAttemptSubmit={didAttemptSubmit}
      />

      <RatingBody
        error={errors.body}
        onDocumentChange={setBody}
        ratingBodyInitialValue={body}
        didAttemptSubmit={didAttemptSubmit}
      />

      <TenancyDateRange
        error={errors.tenancyDateRange}
        tenancyEndDate={tenancyEndDate}
        didAttemptSubmit={didAttemptSubmit}
        tenancyStartDate={tenancyStartDate}
        onEndDateChange={setTenancyEndDate}
        onStartDateChange={setTenancyStartDate}
        tenancyEndDateError={errors.tenancyEndDate}
        tenancyStartDateError={errors.tenancyStartDate}
      />

      <H3 sx={{ mt: 3, mb: 1 }}>
        Does your rating put your best foot forward?
      </H3>
      <Body1 sx={{ fontSize: '0.8rem', lineHeight: '1.25rem', mb: 1 }}>
        Note that others (including future landlords and property managers) will
        be able to see your rating history when considering your future tenancy.
      </Body1>
      <Body1 sx={{ fontSize: '0.8rem', lineHeight: '1.25rem', mb: 1 }}>
        Try to come across as level-headed and objective as possible in your
        rating.
      </Body1>

      <Collapse in={didAttemptSubmit && !!errors.form}>
        <Fade in={true} timeout={1000} style={{ transitionDelay: '200ms' }}>
          <Box>
            <Card sx={{ px: 2, color: theme.palette.primary.main }}>
              <Body1 sx={{ mb: 0, color: 'primary.light' }}>
                {errors.form}
              </Body1>
            </Card>
          </Box>
        </Fade>
      </Collapse>
    </>
  )
}

export default RatingForm
