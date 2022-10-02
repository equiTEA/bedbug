import Box from '@mui/material/Box'
import H1 from '../components/library/H1'
import Body1 from '../components/library/Body1'
import FormControl from '@mui/material/FormControl'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '../components/library/TextField'
import UnauthenticatedLayout from '../components/layouts/Unauthenticated'
import AddressResults from '../components/assemblies/AddressResults/AddressResults'

import { states } from './home/config'
import { useRef, useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import { getCurrentUser } from '../ssr/getCurrentUser'
import { useUnauthenticatedAddressForm } from './home/useUnauthenticatedAddressForm'
import { sharedAnimatedContainerStyles } from '../styles/shared/animatedContainerStyles'

import type { ReactElement } from 'react'
import type { NextPageContext } from 'next'
import type { NextPageWithLayout } from './_app'

import {
  formStyles,
  multiInputLineStyles,
  resultsContainerStyles,
  stateFormControlStyles,
} from './home/styles'

/** The sum total of vertical padding influencing the form layout  */
const VERTICAL_PADDING = 88

export const getServerSideProps = async (ctx: NextPageContext) => ({
  props: {
    user: await getCurrentUser(ctx),
  },
})

const Home: NextPageWithLayout = () => {
  const theme = useTheme()
  const formRef = useRef<HTMLFormElement>(null)

  const [formHeight, setFormHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (formRef.current?.clientHeight)
        setFormHeight(formRef.current.clientHeight)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const {
    line1,
    setLine1,

    line2,
    setLine2,

    city,
    setCity,

    state,
    setState,

    zip,
    setZip,

    loading,
    results,
    resultsCount,
  } = useUnauthenticatedAddressForm()

  return (
    <Box sx={(theme) => sharedAnimatedContainerStyles({ theme })}>
      <Box
        ref={formRef}
        component="form"
        onSubmit={(e) => e.preventDefault()}
        sx={(theme) => formStyles({ theme })}
      >
        <H1>Search for an address</H1>
        <Body1 sx={{ mb: 2 }} gutterBottom>
          Enter an address below to search for it. If it has been rated, we'll
          present it below.
        </Body1>

        <FormControl fullWidth>
          <TextField
            size="small"
            label="Line 1"
            color="secondary"
            id="unauthed-form-address-line-1"
            name="address-line-1"
            onChange={({ target: { value } }) => setLine1(value)}
            value={line1}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            size="small"
            label="Line 2"
            color="secondary"
            id="unauthed-form-address-line-2"
            name="address-line-2"
            onChange={({ target: { value } }) => setLine2(value)}
            value={line2}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            size="small"
            label="City"
            color="secondary"
            id="unauthed-form-address-city"
            name="address-city"
            onChange={({ target: { value } }) => setCity(value)}
            value={city}
          />
        </FormControl>

        <Box sx={multiInputLineStyles}>
          <FormControl sx={(theme) => stateFormControlStyles({ theme })}>
            <Autocomplete
              size="small"
              disablePortal
              fullWidth
              options={states.map((state) => ({ label: state, value: state }))}
              value={state}
              isOptionEqualToValue={(option, value) =>
                option.value === value.value
              }
              onChange={(_, selection) => {
                setState(selection as { label: string; value: string })
              }}
              ListboxProps={{
                style: {
                  backgroundColor: theme.palette.secondary.main,
                },
              }}
              renderInput={(params) => (
                <TextField
                  size="small"
                  label="State"
                  color="secondary"
                  id="unauthed-form-address-state"
                  name="address-state"
                  {...params}
                />
              )}
            />
          </FormControl>

          <FormControl
            sx={{
              width: '62%',
            }}
          >
            <TextField
              size="small"
              label="Zip Code"
              color="secondary"
              id="unauthed-form-address-zip"
              name="address-zip"
              onChange={({ target: { value } }) => setZip(value)}
              value={zip}
            />
          </FormControl>
        </Box>
      </Box>

      <Box sx={resultsContainerStyles}>
        <AddressResults
          resultsCount={resultsCount}
          results={results}
          loading={loading}
          allottedHeight={`calc(100vh - ${formHeight}px - ${VERTICAL_PADDING}px)`}
        />
      </Box>
    </Box>
  )
}

Home.getLayout = (page: ReactElement) => (
  <>
    {page.props.user ? (
      <>TODO: Authenticated Map</>
    ) : (
      <UnauthenticatedLayout user={page.props.user}>
        {page}
      </UnauthenticatedLayout>
    )}
  </>
)

export default Home
