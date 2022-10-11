import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import { ContentOptions } from './types'
import Button from '@mui/material/Button'
import { H1, H3, Body1 } from '@bedbug/ui'
import Collapse from '@mui/material/Collapse'
import RadioGroup from '@mui/material/RadioGroup'
import { ChangeEvent, useState, useCallback } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import { radioInputStyles, actionsRowStyles } from './styles'

import type { Address } from '@bedbug/types'

enum EdgeCaseAddressRadioOptions {
  Specificity = 'specificity',
  Accuracy = 'accuracy',
}

type Props = {
  setMode: (mode: ContentOptions) => void

  userEnteredAddress: Address
  onAddAddress: (address: Address) => void
  onClose: () => void
}

const MainContent = ({
  setMode,
  onClose,
  onAddAddress,
  userEnteredAddress,
}: Props) => {
  const [selectedOption, setSelectedOption] =
    useState<EdgeCaseAddressRadioOptions | null>(null)

  const handleAddUserEnteredAddress = useCallback(() => {
    onAddAddress({ ...userEnteredAddress, isVerified: false })
    onClose()
  }, [onAddAddress, userEnteredAddress, onClose])

  return (
    <>
      <H1 gutterBottom>Not Finding The Correct Address?</H1>
      <Body1>Tell us what&apos;s wrong with the suggestions:</Body1>

      <RadioGroup
        name="reason-for-issue-radio-group"
        aria-labelledby="Reason for issue"
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
          setSelectedOption(value as EdgeCaseAddressRadioOptions)
        }
      >
        <FormControlLabel
          control={<Radio />}
          value={EdgeCaseAddressRadioOptions.Specificity}
          sx={(theme) => radioInputStyles({ theme })}
          label={
            <>
              <H3 sx={{ mt: 1.25 }}>
                The correct address is listed, but it&apos;s not specific enough
              </H3>

              <Collapse
                sx={{ mt: 1 }}
                in={selectedOption === EdgeCaseAddressRadioOptions.Specificity}
              >
                <>
                  <Body1 sx={{ mb: 2 }} gutterBottom>
                    In general, don&apos;t worry if the suggested addresses
                    don&apos;t include a unit number, such as if you live in an
                    apartment complex, or duplex / triplex.
                  </Body1>
                  <Body1 sx={{ mb: 2 }}>
                    This is only an issue if the landlord or property manager
                    doesn&apos;t operate all units at the address. You can elect
                    to add a unit number if this is the case.
                  </Body1>

                  <Box sx={actionsRowStyles}>
                    <Button
                      onClick={() => setMode(ContentOptions.UnitNumber)}
                      color="secondary"
                      variant="text"
                    >
                      Add A Unit Number
                    </Button>
                    <Button color="secondary" variant="contained">
                      I can settle
                    </Button>
                  </Box>
                </>
              </Collapse>
            </>
          }
        />
        <FormControlLabel
          control={<Radio />}
          sx={(theme) => radioInputStyles({ theme })}
          value={EdgeCaseAddressRadioOptions.Accuracy}
          label={
            <>
              <H3 sx={{ mt: 1.25 }}>My address isn&apos;t listed at all</H3>

              <Collapse
                sx={{ mt: 1 }}
                in={selectedOption === EdgeCaseAddressRadioOptions.Accuracy}
              >
                <Body1 gutterBottom>
                  That&apos;s okay! We can&apos;t guarantee that the address
                  will be pinnable to the map, but we can use the address as you
                  entered it.
                </Body1>

                <Box sx={actionsRowStyles}>
                  <Button
                    onClick={handleAddUserEnteredAddress}
                    color="secondary"
                    variant="text"
                  >
                    Use The Address I Entered
                  </Button>
                  <Button
                    onClick={onClose}
                    color="secondary"
                    variant="contained"
                  >
                    Nevermind
                  </Button>
                </Box>
              </Collapse>
            </>
          }
        />
      </RadioGroup>
    </>
  )
}

export default MainContent
