import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { TextField, H1, H3, Body1 } from '@bedbug/ui'
import { useState, useMemo, useCallback, FormEvent } from 'react'
import { sharedActionsRowStyles } from '../../../../styles/shared/actionsRowStyles'

import type { Address } from '@bedbug/types'
import { sharedAnimatedContainerStyles } from '../../../../styles/shared/animatedContainerStyles'

type Props = {
  unitNumber: string
  onSubmit: (address: Address) => void
  onClose: () => void

  /** The validated addresses originally displayed after forward-geocoding the user's search term */
  validatedAddresses: Address[]

  /** The index of validatedAddresses to access the selected validated address (initial state for selecting an address to which to add the line2) */
  selectedAddressIndex: number
}

const AddUnitNumberForm = ({
  unitNumber,
  selectedAddressIndex: initialSelectedAddressIndex,
  validatedAddresses,
  onSubmit,
  onClose,
}: Props) => {
  /**
   * Because the user could go through this flow multiple times, we need to
   * ensure that addresses presented for adding a unit number don't yet have
   * one.
   */
  const filteredAddresses = useMemo(
    () => validatedAddresses.filter(({ line2 }) => !line2),
    [validatedAddresses],
  )

  const [selectedAddressIndex, setSelectedAddressIndex] = useState<number>(
    filteredAddresses[initialSelectedAddressIndex]
      ? initialSelectedAddressIndex
      : 0,
  )

  const [didAttemptSubmit, setDidAttemptSubmit] = useState(false)
  const [line2, setLine2] = useState<string>('')
  const [line2Blurred, setLine2Blurred] = useState(false)
  const errorsExist = useMemo(() => !line2, [line2])

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setDidAttemptSubmit(true)

      if (errorsExist) return

      const address = filteredAddresses[selectedAddressIndex]
      onSubmit({
        ...address,
        line2,
        full: `${address.line1} ${line2}, ${address.city}, ${address.state} ${address.zip}, ${address.countryCode}`,
      })

      onClose()
    },
    [
      errorsExist,
      selectedAddressIndex,
      onSubmit,
      line2,
      onClose,
      filteredAddresses,
    ],
  )

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={(theme) => sharedAnimatedContainerStyles({ theme })}
    >
      <H1 gutterBottom>Add A Unit / Suite Number</H1>
      <Body1 sx={{ mb: 2 }}>
        This is only necessary if your landlord or property manager doesn&apos;t
        operate all units at the address. Skip this step if you&apos;re unsure.
      </Body1>

      <H3 sx={{ color: 'textColor.main', mb: 1 }}>
        Select the address to which you&apos;d like to add a Line 2:
      </H3>

      <ButtonGroup
        sx={{ mb: 2 }}
        fullWidth
        color="secondary"
        variant="outlined"
        orientation="vertical"
        aria-label="vertical contained button group"
      >
        {filteredAddresses?.map(({ full }, index) => (
          <Button
            onClick={() => setSelectedAddressIndex(index)}
            key={full}
            disabled={selectedAddressIndex === index}
            sx={(theme) => ({
              textTransform: 'none !important',
              ...(selectedAddressIndex === index
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

      <H3 sx={{ color: 'textColor.main', mb: 1 }}>
        Add Line 2 to the address you selected (i.e. Unit 123, Suite A):
      </H3>

      <TextField
        required
        fullWidth
        size="small"
        value={line2}
        label="Line 2"
        sx={{ mt: 1 }}
        onBlur={() => setLine2Blurred(true)}
        onChange={({ target: { value } }) => setLine2(value)}
        error={(didAttemptSubmit || line2Blurred) && errorsExist}
        helperText={
          (didAttemptSubmit || line2Blurred) &&
          errorsExist &&
          'Line 2 is required'
        }
      />

      <H3 sx={{ my: 1, color: 'textColor.main' }}>Preview</H3>
      <Body1 sx={{ mb: 0 }}>
        {validatedAddresses[selectedAddressIndex].line1}
      </Body1>
      <Body1 sx={{ mb: 0 }}>{line2}</Body1>
      <Body1 sx={{ mb: 0 }}>
        {validatedAddresses[selectedAddressIndex].city},{' '}
        {validatedAddresses[selectedAddressIndex].state}{' '}
        {validatedAddresses[selectedAddressIndex].zip}
      </Body1>

      <Box sx={sharedActionsRowStyles}>
        <Button
          type="submit"
          variant="text"
          color="secondary"
          disabled={didAttemptSubmit && errorsExist}
        >
          Select Address &amp; Add Unit Number
        </Button>
        <Button
          type="button"
          onClick={onClose}
          color="secondary"
          variant="contained"
        >
          Skip
        </Button>
      </Box>
    </Box>
  )
}

export default AddUnitNumberForm
