import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Collapse from '@mui/material/Collapse'
import Checkbox from '@mui/material/Checkbox'
import { useCallback, useState } from 'react'
import { useRateAddress } from '@bedbug/hooks'
import { H3, Body1, Card, TextField } from '@bedbug/ui'
import { sharedCheckboxLabelStyles } from '../../styles'
import FormControlLabel from '@mui/material/FormControlLabel'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import LandlordAutocomplete from '../../../../../../assemblies/LandlordAutocomplete'

import type { ChangeEvent } from 'react'
import type { Landlord } from '@bedbug/types'
import InfoOutlined from '@mui/icons-material/InfoOutlined'

const LandlordForm = () => {
  const {
    addressId,
    landlordForm: {
      errors,
      landlord,
      createMode,
      setLandlord,
      landlordName,
      setCreateMode,
      setLandlordName,
      didAttemptSubmit,
      knowsLandlordName,
      setKnowsLandlordName,
    },
  } = useRateAddress()

  const [searchTerm, setSearchTerm] = useState('')

  const handleSelection = useCallback(
    (selection: 'Create New Landlord' | Landlord | null) => {
      if (selection === null) {
        setCreateMode(false)
        return setLandlord(null)
      }

      if (selection === 'Create New Landlord') {
        setCreateMode(true)
        return setLandlord(null)
      }

      setLandlord(selection)
    },
    [setLandlord, setCreateMode],
  )

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Box>
          <Card sx={{ px: 2, pb: 0, my: 2 }}>
            <Body1 sx={{ mb: 2 }}>
              <InfoOutlined
                sx={(theme) => ({
                  mr: 1,
                  mb: -0.5,
                  fontSize: '1.2rem',
                  color: theme.palette.secondary.main,
                })}
              />
              If you don&apos;t know your landlord, you can often look them up
              via the property taxation parcel records for your city.
            </Body1>
          </Card>
          <Body1>
            You can leave this unchecked and skip this step if your landlord is
            a company.
          </Body1>
        </Box>

        <FormControlLabel
          label="My landlord is a person and I know their name"
          sx={(theme) => sharedCheckboxLabelStyles({ theme })}
          control={
            <Checkbox
              sx={(theme) => ({ color: theme.palette.secondary.main })}
              color="secondary"
              checked={knowsLandlordName}
              onChange={(_: ChangeEvent<HTMLInputElement>, checked: boolean) =>
                setKnowsLandlordName(checked)
              }
            />
          }
        />
      </Box>

      <Collapse in={!knowsLandlordName}>
        <Fade in={!knowsLandlordName}>
          <Box>
            <Card sx={{ px: 2, mb: 3 }}>
              <Body1 sx={{ mt: 1 }}>
                <HelpOutlineIcon sx={{ mb: -1, mr: 1 }} color="secondary" />
                Even if you don&apos;t know who the landlord is for this
                address, you&apos;re already helping thousands of other renters
                by sharing your experience.
              </Body1>
            </Card>
          </Box>
        </Fade>
      </Collapse>

      <Collapse in={knowsLandlordName}>
        <Fade in={knowsLandlordName}>
          <Box>
            <H3>Select A Landlord</H3>
            <Body1 sx={{ mb: 1, fontSize: '12px', lineHeight: '20px' }}>
              Use the typeahead dropdown to select your landlord from the list
              of landlords in our system. This helps us build a profile of the
              landlord if they rent out multiple properties.
            </Body1>
            <Body1 sx={{ mb: 2, fontSize: '12px', lineHeight: '20px' }}>
              If the landlord is not listed, you can add them by selecting
              &quot;Create New Landlord&quot;
            </Body1>

            <LandlordAutocomplete
              landlord={landlord}
              addressId={addressId}
              searchTerm={searchTerm}
              error={errors.landlord}
              onSelect={handleSelection}
              setSearchTerm={setSearchTerm}
              didAttemptSubmit={didAttemptSubmit}
            />
          </Box>
        </Fade>
      </Collapse>

      <Collapse in={createMode}>
        <Fade in={createMode}>
          <Box sx={{ my: 3 }}>
            <H3>New Landlord</H3>
            <Body1 sx={{ mb: 2, fontSize: '12px', lineHeight: '20px' }}>
              Enter the name of your landlord. Check your spelling, so that
              other renters can find this landlord in the future.
            </Body1>

            <TextField
              fullWidth
              size="small"
              sx={{ mb: 2 }}
              label="Landlord Name"
              value={landlordName}
              onChange={(e) => setLandlordName(e.target.value)}
              helperText={didAttemptSubmit && errors.landlordName}
              error={didAttemptSubmit && errors.landlordName !== null}
            />
          </Box>
        </Fade>
      </Collapse>
    </>
  )
}
export default LandlordForm
