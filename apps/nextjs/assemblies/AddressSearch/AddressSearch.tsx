import {
  useAddressSearchForm,
  useAddressFormHeight,
  useInHouseAddressSearch,
  useAddressQueryParamsEffect,
} from '@bedbug/hooks'
import Box from '@mui/material/Box'
import { Body1, H1 } from '@bedbug/ui'
import { useRouter } from 'next/router'
import AddressResults from '../AddressResults'
import AddressSearchForm from '../AddressSearchForm'
import { headingStyles, resultsContainerStyles } from './styles'
import { sharedAnimatedContainerStyles } from '../../styles/shared/animatedContainerStyles'

/** The sum total of vertical padding influencing the form layout  */
const VERTICAL_PADDING = 104

const AddressSearch = () => {
  const { query } = useRouter()

  const {
    line1Debounced,
    line2Debounced,
    cityDebounced,
    stateDebounced,
    zipDebounced,
    ...addressFormProps
  } = useAddressSearchForm({
    initialState: {
      line1: query.line1 as string,
      line2: query.line2 as string,
      city: query.city as string,
      state: query.state as string,
      zip: query.zip as string,
    },
  })

  const { results, resultsCount, loading } = useInHouseAddressSearch({
    line1: line1Debounced,
    line2: line2Debounced,
    city: cityDebounced,
    state: stateDebounced,
    zip: zipDebounced,
  })

  const { formRef, formHeight } = useAddressFormHeight()

  return (
    <Box sx={(theme) => sharedAnimatedContainerStyles({ theme })}>
      <Box sx={(theme) => headingStyles({ theme })}>
        <H1>Search for an address</H1>
        <Body1 sx={{ mb: 2 }} gutterBottom>
          If somebody has rated it, we&apos;ll present it below.
        </Body1>
      </Box>

      <AddressSearchForm ref={formRef} {...addressFormProps} />

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

export default AddressSearch
