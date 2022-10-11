import Box from '@mui/material/Box'
import MainContent from './MainContent'
import { ContentOptions } from './types'
import Dialog from '@mui/material/Dialog'
import { useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import AddUnitNumberForm from './AddUnitNumberForm'
import { useCallback, useState, useMemo } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { modalStyles, iconButtonStyles } from './styles'
import { sharedAnimatedContainerStyles } from '../../../../styles/shared/animatedContainerStyles'

import type { Address } from '@bedbug/types'

type Props = {
  open: boolean
  onClose: () => void

  userEnteredAddress: Address
  onAddAddress: (address: Address) => void
  validatedAddresses: Address[]
  selectedAddressIndex: number
}

const EdgeCaseAddressModal = ({
  open,
  onClose,
  onAddAddress,
  userEnteredAddress,
  validatedAddresses,
  selectedAddressIndex,
}: Props) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [mode, setMode] = useState<ContentOptions>(ContentOptions.Default)
  const [unitNumber, setUnitNumber] = useState('')

  const handleClose = useCallback(() => {
    onClose()

    /**
     * Prevent jarring reset of content: wait for the transition to
     * fade the modal offscreen before resetting state
     */
    setTimeout(() => {
      setMode(ContentOptions.Default)
      setUnitNumber('')
    }, theme.transitions.duration.leavingScreen)
  }, [onClose, theme.transitions.duration.leavingScreen])

  const content = useMemo(() => {
    switch (mode) {
      case ContentOptions.UnitNumber:
        return (
          <AddUnitNumberForm
            onClose={handleClose}
            unitNumber={unitNumber}
            onSubmit={onAddAddress}
            validatedAddresses={validatedAddresses}
            selectedAddressIndex={selectedAddressIndex}
          />
        )

      default:
        return (
          <MainContent
            setMode={setMode}
            onClose={handleClose}
            onAddAddress={onAddAddress}
            userEnteredAddress={userEnteredAddress}
          />
        )
    }
  }, [
    mode,
    unitNumber,
    handleClose,
    onAddAddress,
    validatedAddresses,
    userEnteredAddress,
    selectedAddressIndex,
  ])

  return (
    <Dialog
      open={open}
      sx={modalStyles}
      fullScreen={isMobile}
      onClose={(_, reason: 'backdropClick' | 'escapeKeyDown') => {
        if (reason === 'backdropClick') return
        handleClose()
      }}
    >
      <Box sx={(theme) => sharedAnimatedContainerStyles({ theme })}>
        <IconButton onClick={handleClose} sx={iconButtonStyles}>
          <CloseIcon color="primary" />
        </IconButton>
        {content}
      </Box>
    </Dialog>
  )
}

export default EdgeCaseAddressModal
