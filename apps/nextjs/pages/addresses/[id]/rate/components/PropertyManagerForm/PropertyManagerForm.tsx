// TODO: auto populate DBA from landlord / previous rating
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
import PropertyManagerAutocomplete from '../../../../../../assemblies/PropertyManagerAutocomplete'

import type { ChangeEvent } from 'react'
import type { PropertyManagementCompany } from '@bedbug/types'

const PropertyManagerForm = () => {
  const {
    addressId,
    propertyManagerForm: {
      errors,
      createMode,
      setCreateMode,
      propertyManager,
      didAttemptSubmit,
      setPropertyManager,
      propertyManagerName,
      setPropertyManagerName,
      knowsPropertyManagerName,
      setKnowsPropertyManagerName,
    },
  } = useRateAddress()

  const [searchTerm, setSearchTerm] = useState('')

  const handleSelection = useCallback(
    (
      selection:
        | 'Create New Property Manager'
        | PropertyManagementCompany
        | null,
    ) => {
      if (selection === null) {
        return setCreateMode(false)
      }

      if (selection === 'Create New Property Manager') {
        return setCreateMode(true)
      }

      setPropertyManager(selection)
    },
    [setPropertyManager, setCreateMode],
  )

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Body1 sx={{ mb: 2 }}>
          Often, property managers or property management companies play a large
          part in the rental experience.
        </Body1>
        <Body1 sx={{ mb: 2 }}>
          If you don&apos;t know your property manager, you can skip this step.
        </Body1>

        <FormControlLabel
          label="I know the name of the property manager or property management company"
          sx={(theme) => sharedCheckboxLabelStyles({ theme })}
          control={
            <Checkbox
              sx={(theme) => ({ color: theme.palette.secondary.main })}
              color="secondary"
              checked={knowsPropertyManagerName}
              onChange={(_: ChangeEvent<HTMLInputElement>, checked: boolean) =>
                setKnowsPropertyManagerName(checked)
              }
            />
          }
        />
      </Box>

      <Collapse in={!knowsPropertyManagerName}>
        <Fade in={!knowsPropertyManagerName}>
          <Box>
            <Card sx={{ px: 2, mb: 3 }}>
              <Body1 sx={{ mt: 1 }}>
                <HelpOutlineIcon sx={{ mb: -1, mr: 1 }} color="secondary" />
                Even if you don&apos;t know the address&apos;s property manager,
                you&apos;re already helping thousands of other renters by
                sharing your experience.
              </Body1>
            </Card>
          </Box>
        </Fade>
      </Collapse>

      <Collapse in={knowsPropertyManagerName}>
        <Fade in={knowsPropertyManagerName}>
          <Box>
            <H3>Select A Property Manager</H3>
            <Body1 sx={{ mb: 1, fontSize: '12px', lineHeight: '20px' }}>
              Use the typeahead dropdown to select your address&apos;s property
              manager or property management company from the list in our
              system. This helps us build a profile of each property manager
              accross multiple properties.
            </Body1>
            <Body1 sx={{ mb: 2, fontSize: '12px', lineHeight: '20px' }}>
              If the property manager is not listed, you can add it by selecting
              &quot;Create New Property Manager&quot;
            </Body1>

            <PropertyManagerAutocomplete
              addressId={addressId}
              searchTerm={searchTerm}
              onSelect={handleSelection}
              setSearchTerm={setSearchTerm}
              error={errors.propertyManager}
              propertyManager={propertyManager}
              didAttemptSubmit={didAttemptSubmit}
            />
          </Box>
        </Fade>
      </Collapse>

      <Collapse in={createMode}>
        <Fade in={createMode}>
          <Box sx={{ my: 3 }}>
            <H3>New Property Manager</H3>
            <Body1 sx={{ mb: 2, fontSize: '12px', lineHeight: '20px' }}>
              Enter the name of your address&apos;s property manager or property
              management company. Check your spelling, so that other renters can
              find it in the future.
            </Body1>

            <TextField
              fullWidth
              size="small"
              sx={{ mb: 2 }}
              value={propertyManagerName}
              label="Property Manager Name"
              onChange={(e) => setPropertyManagerName(e.target.value)}
              helperText={didAttemptSubmit && errors.propertyManagerName}
              error={didAttemptSubmit && errors.propertyManagerName !== null}
            />
          </Box>
        </Fade>
      </Collapse>
    </>
  )
}

export default PropertyManagerForm
