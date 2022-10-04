import Link from 'next/link'
import H3 from '../../library/H3'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Body1 from '../../library/Body1'
import Button from '@mui/material/Button'
import AddressCard from '../AddressCard'
import CircularProgress from '@mui/material/CircularProgress'

import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { resultsContainerStyles } from './styles'

import type { Address } from '@bedbug/types'

type Props = {
  /** The Address results to display */
  results: Address[] | null
  /** The number of results to display */
  resultsCount: number | null
  /** Whether the request for Address results is loading */
  loading: boolean
  /** A CSS height value representing the vertical space allowed for the results' bounding box */
  allottedHeight: string
}

const AddressResults = ({
  results,
  resultsCount,
  loading,
  allottedHeight,
}: Props) => {
  const { push } = useRouter()

  const noResultsFound = useMemo(
    () => !loading && Array.isArray(results) && results.length === 0,
    [results, loading],
  )

  if (loading)
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
        <CircularProgress size={16} />{' '}
        <Body1 gutterBottom={false}>Loading results...</Body1>
      </Box>
    )

  if (noResultsFound)
    return (
      <Box
        sx={(theme) =>
          resultsContainerStyles({
            theme,
            resultsLoaded: false,
            height: allottedHeight,
          })
        }
      >
        <Body1 gutterBottom={false}>
          Couldn&apos;t find any address matches.{' '}
          <Link passHref href="/signup">
            <Button color="secondary" component="a" type="text">
              Sign up
            </Button>
          </Link>{' '}
          to add a review for this address!
        </Body1>
      </Box>
    )

  if (Array.isArray(results))
    return (
      <Box
        sx={(theme) =>
          resultsContainerStyles({
            theme,
            height: allottedHeight,
            resultsLoaded: !noResultsFound,
          })
        }
      >
        <H3 sx={{ color: 'textColor.main', mb: 2 }}>
          Results ({resultsCount})
        </H3>
        {results.map((address, index) => (
          <Fade in={true} timeout={index * 2000} key={address.id}>
            <Box sx={{ mb: 2 }}>
              <AddressCard
                index={index}
                onClick={() => push(`/addresses/${address.id}`)}
                address={address}
              />
            </Box>
          </Fade>
        ))}
      </Box>
    )

  return (
    <Box
      sx={(theme) =>
        resultsContainerStyles({
          theme,
          height: allottedHeight,
        })
      }
    >
      <Body1 gutterBottom={false}>
        Search for an address above to get started!
      </Body1>
    </Box>
  )
}

export default AddressResults
