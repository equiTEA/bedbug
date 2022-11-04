import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import { useRouter } from 'next/router'
import { Body1, Card } from '@bedbug/ui'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { alpha } from '@mui/material/styles'
import { resultsContainerStyles } from './styles'
import { useAddressSearchForm } from '@bedbug/hooks'
import { useCallback, useState, FormEvent } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { graphql, forwardGeocodeAddress } from '@bedbug/networking'
import AddressSearchForm from '../../../../../assemblies/AddressSearchForm'

import type { Address } from '@bedbug/types'
import theme from '../../../../../theme'

type Props = {
  /** Lift the user-entered address for consumption by other steps */
  setUserEnteredAddress: (address: Address) => void
  /** Callback for when validation results come back from API */
  onReceiveValidationResults: (results: Address[]) => void
}

const NewAddressValidationForm = ({
  setUserEnteredAddress,
  onReceiveValidationResults,
}: Props) => {
  const { query, back } = useRouter()

  const [didAttemptSubmit, setDidAttemptSubmit] = useState(false)
  const [loading, setLoading] = useState(false)

  const [formError, setFormError] = useState<string | null>(null)

  const { errorsExist, ...addressSearchFormProps } = useAddressSearchForm({
    initialState: {
      line1: query.line1 as string,
      line2: query.line2 as string,
      city: query.city as string,
      state: query.state as string,
      zip: query.zip as string,
    },
  })

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      setDidAttemptSubmit(true)

      if (errorsExist) return

      setLoading(true)

      const { line1, city, state, zip } = addressSearchFormProps

      const response = await graphql({
        query: forwardGeocodeAddress,
        operationName: 'forwardGeocode',
        variables: {
          address: `${line1} ${city} ${state?.value} ${zip}`,
        },
        handleErrors: (errors) => {
          setFormError(
            'Something went wrong. Check the address you entered and try again.',
          )
        },
      })

      setLoading(false)

      if (response.length === 0) {
        return setFormError(
          'We were unable to geocode the address you entered. Check your input above and try again.',
        )
      }

      onReceiveValidationResults(
        response.map((addressResult: Address) => ({
          ...addressResult,
          isVerified: true,
        })),
      )

      setUserEnteredAddress({
        full: `${line1}, ${city} ${state?.value} ${zip}, USA`,
        line1,
        city,
        state: state?.value,
        zip,
        countryCode: 'USA',
        isVerified: false,
      })
    },
    [
      errorsExist,
      setUserEnteredAddress,
      addressSearchFormProps,
      onReceiveValidationResults,
    ],
  )

  return (
    <>
      <AddressSearchForm
        {...addressSearchFormProps}
        submitHandler={handleSubmit}
        didAttemptSubmit={didAttemptSubmit}
        submitUI={
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              type="button"
              variant="text"
              color="secondary"
              disabled={loading}
              onClick={() => back()}
              sx={(theme) => ({
                px: 2,
                backgroundColor: alpha(theme.palette.secondary.main, 0.04),
              })}
            >
              Cancel
            </Button>

            <Tooltip
              title={errorsExist && 'Errors were detected in the form above'}
            >
              <span>
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  disabled={loading || (didAttemptSubmit && errorsExist)}
                  sx={{
                    px: 2,
                    width: '183.77px', // prevent the button from resizing when the loading spinner is shown
                  }}
                >
                  {loading ? (
                    <CircularProgress color="secondary" size={24} />
                  ) : (
                    'Validate Address'
                  )}
                </Button>
              </span>
            </Tooltip>
          </Box>
        }
      />

      {formError && (
        <Fade in={true} timeout={1000} style={{ transitionDelay: '200ms' }}>
          <Box sx={(theme) => resultsContainerStyles({ theme })}>
            <Card sx={{ px: 2, color: theme.palette.primary.main }}>
              <Body1 sx={{ mb: 0, color: 'primary.light' }}>{formError}</Body1>
            </Card>
          </Box>
        </Fade>
      )}
    </>
  )
}

export default NewAddressValidationForm
