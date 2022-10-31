import { useMemo } from 'react'
import { H3 } from '@bedbug/ui'
import { Body1 } from '@bedbug/ui'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import { useRouter } from 'next/router'
import AddressCard from '../AddressCard'
import { useAuthUser } from '@bedbug/hooks'
import CTACard from '../../components/CTACard'
import { resultsContainerStyles } from './styles'
import NewAddressCTACard from '../NewAddressCTACard'
import SignUpCTACard from '../../assemblies/SignUpCTACard'
import CircularProgress from '@mui/material/CircularProgress'
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation'

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
  const { push, query } = useRouter()
  const { user } = useAuthUser()

  const noResultsFound = useMemo(
    () => !loading && Array.isArray(results) && results.length === 0,
    [results, loading],
  )

  if (loading)
    return (
      <Fade in={true} timeout={1000} style={{ transitionDelay: '200ms' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
          <CircularProgress size={16} />{' '}
          <Body1 gutterBottom={false}>Loading results...</Body1>
        </Box>
      </Fade>
    )

  if (noResultsFound)
    return (
      <Fade in={true} timeout={1000} style={{ transitionDelay: '200ms' }}>
        <Box
          sx={(theme) =>
            resultsContainerStyles({
              theme,
              resultsLoaded: false,
              height: allottedHeight,
            })
          }
        >
          <Body1 sx={{ mb: 2 }} gutterBottom={!!user}>
            Couldn&apos;t find any address matches.
          </Body1>

          {user ? (
            <CTACard
              text="Not finding the address you're looking for? Add it and rate it to advocate for yourself and protect other renters!"
              buttonText="Add it to our system"
              icon={
                <NotListedLocationIcon fontSize="large" color="secondary" />
              }
              buttonHref={{
                query,
                pathname: '/addresses/new',
              }}
            />
          ) : (
            <SignUpCTACard />
          )}
        </Box>
      </Fade>
    )

  if (Array.isArray(results))
    return (
      <Fade in={true} timeout={1000} style={{ transitionDelay: '200ms' }}>
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
            <Fade
              in={true}
              timeout={1000}
              key={address.id}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Box sx={{ mb: 2 }}>
                <AddressCard
                  index={index}
                  onClick={() => push(`/addresses/${address.id}`)}
                  address={address}
                />
              </Box>
            </Fade>
          ))}

          <Fade
            in={true}
            timeout={1000}
            style={{ transitionDelay: `${results.length * 200}ms` }}
          >
            <Box sx={{ color: 'textColor.main' }}>
              {user ? <NewAddressCTACard /> : <SignUpCTACard />}
            </Box>
          </Fade>
        </Box>
      </Fade>
    )

  return (
    <Fade in={true} timeout={1000} style={{ transitionDelay: '200ms' }}>
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
    </Fade>
  )
}

export default AddressResults
