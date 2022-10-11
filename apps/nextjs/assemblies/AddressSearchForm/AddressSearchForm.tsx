import {
  formStyles,
  multiInputLineStyles,
  stateFormControlStyles,
} from './styles'
import Box from '@mui/material/Box'
import { ChangeEvent } from 'react'
import { TextField } from '@bedbug/ui'
import { useTheme } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import Autocomplete from '@mui/material/Autocomplete'
import { useAddressQueryParamsEffect, states } from '@bedbug/hooks'
import { forwardRef, ForwardedRef, ReactNode, FormEvent } from 'react'

type Props = {
  line1: string
  line1Blurred: boolean
  setLine1: (value: string) => void
  setLine1Blurred: (value: boolean) => void

  city: string
  cityBlurred: boolean
  setCity: (value: string) => void
  setCityBlurred: (value: boolean) => void

  state: { label: string; value: string } | null
  stateBlurred: boolean
  setState: (value: { label: string; value: string } | null) => void
  setStateBlurred: (value: boolean) => void

  zip: string
  zipBlurred: boolean
  setZip: (value: string) => void
  setZipBlurred: (value: boolean) => void

  submitUI?: ReactNode
  submitHandler?: (event: FormEvent<HTMLFormElement>) => void
  didAttemptSubmit?: boolean
  errors?: {
    line1: string | null
    city: string | null
    state: string | null
    zip: string | null
  }
}

const AddressSearchForm = forwardRef(
  (
    {
      line1,
      line1Blurred,
      setLine1,
      setLine1Blurred,

      city,
      cityBlurred,
      setCity,
      setCityBlurred,

      state,
      stateBlurred,
      setState,
      setStateBlurred,

      zip,
      zipBlurred,
      setZip,
      setZipBlurred,

      submitUI,
      submitHandler,
      didAttemptSubmit,
      errors,
    }: Props,
    ref: ForwardedRef<HTMLFormElement>,
  ) => {
    const theme = useTheme()

    useAddressQueryParamsEffect({
      line1,
      city,
      state,
      zip,
    })

    const submissionEnabled = !!(submitUI && submitHandler)

    return (
      <>
        <Box
          ref={ref}
          component="form"
          sx={(theme) => formStyles({ theme })}
          onSubmit={submitHandler ?? undefined}
        >
          <FormControl fullWidth>
            <TextField
              size="small"
              value={line1}
              label="Street"
              color="secondary"
              name="address-line-1"
              id="unauthed-form-address-line-1"
              error={
                (didAttemptSubmit || line1Blurred) &&
                submissionEnabled &&
                !!errors?.line1
              }
              helperText={
                (didAttemptSubmit || line1Blurred) &&
                submissionEnabled &&
                errors?.line1
              }
              onChange={({
                target: { value },
              }: ChangeEvent<HTMLInputElement>) => setLine1(value)}
              onBlur={() => setLine1Blurred(true)}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              size="small"
              label="City"
              value={city}
              color="secondary"
              name="address-city"
              id="unauthed-form-address-city"
              error={
                (didAttemptSubmit || cityBlurred) &&
                submissionEnabled &&
                !!errors?.city
              }
              helperText={
                (didAttemptSubmit || cityBlurred) &&
                submissionEnabled &&
                errors?.city
              }
              onChange={({
                target: { value },
              }: ChangeEvent<HTMLInputElement>) => setCity(value)}
              onBlur={() => setCityBlurred(true)}
            />
          </FormControl>

          <Box sx={multiInputLineStyles}>
            <FormControl sx={(theme) => stateFormControlStyles({ theme })}>
              <Autocomplete
                fullWidth
                size="small"
                disablePortal
                value={state}
                options={states.map((state) => ({
                  label: state,
                  value: state,
                }))}
                isOptionEqualToValue={(option, value) =>
                  option.value === value.value
                }
                onChange={(_, selection) => {
                  setState(selection as { label: string; value: string })
                }}
                onBlur={() => setStateBlurred(true)}
                ListboxProps={{
                  style: {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
                renderInput={(params) => (
                  <TextField
                    label="State"
                    color="secondary"
                    name="address-state"
                    error={
                      (didAttemptSubmit || stateBlurred) &&
                      submissionEnabled &&
                      !!errors?.state
                    }
                    helperText={
                      (didAttemptSubmit || stateBlurred) &&
                      submissionEnabled &&
                      errors?.state
                    }
                    {...params}
                  />
                )}
              />
            </FormControl>

            <FormControl sx={{ width: '62%' }}>
              <TextField
                value={zip}
                size="small"
                label="Zip Code"
                color="secondary"
                name="address-zip"
                id="unauthed-form-address-zip"
                error={
                  (didAttemptSubmit || zipBlurred) &&
                  submissionEnabled &&
                  !!errors?.zip
                }
                helperText={
                  (didAttemptSubmit || zipBlurred) &&
                  submissionEnabled &&
                  errors?.zip
                }
                onChange={({
                  target: { value },
                }: ChangeEvent<HTMLInputElement>) => setZip(value)}
                onBlur={() => setZipBlurred(true)}
                inputProps={{ maxLength: 5 }}
              />
            </FormControl>
          </Box>

          {submitUI ?? null}
        </Box>
      </>
    )
  },
)

AddressSearchForm.displayName = 'AddressSearchForm'
export default AddressSearchForm
