// TODO: extract styles

import { H3 } from '@bedbug/ui'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import { useRouter } from 'next/router'
import { Body1, Card } from '@bedbug/ui'
import Button from '@mui/material/Button'
import { useCallback, useState } from 'react'
import { resultsContainerStyles } from './styles'
import ButtonGroup from '@mui/material/ButtonGroup'
import InfoOutlined from '@mui/icons-material/InfoOutlined'
import EdgeCaseAddressModal from './components/EdgeCaseAddressModal'

import type { Address } from '@bedbug/types'

type Props = {
  /** The Address results to display */
  results: Address[] | null
  /** The number of results to display */
  resultsCount: number | null
  /** The original user-entered address */
  userEnteredAddress: Address
  /** Callback for when the user selects the "Back" button */
  onBack: () => void
  /** Callback for when the user confirms their validated address selection */
  onConfirmSelection: (address: Address) => void
}

const AddressValidationResults = ({
  results,
  onBack,
  userEnteredAddress,
  onConfirmSelection,
}: Props) => {
  const { push } = useRouter()

  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [
    shouldDisplayEdgeCaseAddressModal,
    setShouldDisplayEdgeCaseAddressModal,
  ] = useState(false)

  const handleAddAddress = useCallback(
    (address: Address) => {
      if (!results) return

      /** Verify that an identical address will not be added */
      const existentAddressIndex = results.findIndex(
        ({ full }) => full === address.full,
      )

      if (existentAddressIndex !== -1)
        return setSelectedIndex(existentAddressIndex)

      results?.push(address)
      setSelectedIndex(results?.length - 1)
    },
    [results],
  )

  const handleConfirmSelection = useCallback(() => {
    if (!results) return
    onConfirmSelection(results[selectedIndex])
  }, [results, selectedIndex, onConfirmSelection])

  return (
    <>
      {results && results.length > 0 && (
        <EdgeCaseAddressModal
          validatedAddresses={results}
          onAddAddress={handleAddAddress}
          userEnteredAddress={userEnteredAddress}
          selectedAddressIndex={selectedIndex}
          open={shouldDisplayEdgeCaseAddressModal}
          onClose={() => setShouldDisplayEdgeCaseAddressModal(false)}
        />
      )}

      <Fade in={true} timeout={1000} style={{ transitionDelay: '200ms' }}>
        <Box sx={(theme) => resultsContainerStyles({ theme })}>
          <Card sx={{ px: 2, mb: 1 }}>
            <Body1 sx={{ display: 'inline-block' }}>
              <InfoOutlined
                sx={{
                  display: 'inline-block',
                  color: 'secondary.main',
                  mr: 1,
                  transform: 'translateY(6px)',
                }}
              />
              Addresses are normalized to ensure that we can reliably pin them
              on the map, and so that renters can easily search for them.
            </Body1>
          </Card>

          <H3 sx={{ color: 'textColor.main', mt: 1, mb: 2 }}>
            Select the best match for your address:
          </H3>
          <Fade in={true} timeout={1000}>
            <Box sx={{ mb: 2 }}>
              <ButtonGroup
                fullWidth
                color="secondary"
                variant="outlined"
                orientation="vertical"
                aria-label="vertical contained button group"
              >
                {results?.map(({ full }, index) => (
                  <Button
                    onClick={() => setSelectedIndex(index)}
                    key={full}
                    disabled={selectedIndex === index}
                    sx={(theme) => ({
                      textTransform: 'none !important',
                      ...(selectedIndex === index
                        ? {
                            backgroundColor: 'secondary.main',
                            color: `${theme.palette.backgroundColor.main} !important`,
                          }
                        : {}),
                    })}
                  >
                    <Box>{full}</Box>
                  </Button>
                ))}
              </ButtonGroup>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button
                  onClick={() => setShouldDisplayEdgeCaseAddressModal(true)}
                  color="secondary"
                >
                  None of these
                </Button>
              </Box>

              <Box
                sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}
              >
                <Button
                  type="button"
                  variant="text"
                  onClick={onBack}
                  color="secondary"
                >
                  Back
                </Button>
                <Button
                  onClick={handleConfirmSelection}
                  type="button"
                  variant="contained"
                  color="secondary"
                >
                  Confirm Selection
                </Button>
              </Box>
            </Box>
          </Fade>
        </Box>
      </Fade>
    </>
  )
}

export default AddressValidationResults
