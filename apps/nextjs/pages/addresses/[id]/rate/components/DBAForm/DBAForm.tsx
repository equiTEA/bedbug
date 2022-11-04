import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Collapse from '@mui/material/Collapse'
import Checkbox from '@mui/material/Checkbox'
import { useCallback, useState } from 'react'
import { useRateAddress } from '@bedbug/hooks'
import { H3, Body1, Card, TextField } from '@bedbug/ui'
import FormControlLabel from '@mui/material/FormControlLabel'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import DBAAutocomplete from '../../../../../../assemblies/DBAAutocomplete'
import { sharedCheckboxLabelStyles } from '../../../../../../styles/shared/checkboxStyles'

import type { ChangeEvent } from 'react'
import type { Landlord } from '@bedbug/types'

const DBAForm = () => {
  const {
    addressId,
    dbaForm: {
      dba,
      errors,
      setDBA,
      dbaName,
      createMode,
      setDBAName,
      knowsDBAName,
      setCreateMode,
      setKnowsDBAName,
      didAttemptSubmit,
    },
  } = useRateAddress()

  const [searchTerm, setSearchTerm] = useState('')

  const handleSelection = useCallback(
    (selection: 'Create New Business' | Landlord | null) => {
      if (selection === null) {
        setCreateMode(false)
        return setDBA(null)
      }

      if (selection === 'Create New Business') {
        setCreateMode(true)
        return setDBA(null)
      }

      setDBA(selection)
    },
    [setDBA, setCreateMode],
  )

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Body1 sx={{ mb: 2 }}>
          More often than not, landlords limit their liability by doing business
          as an LLC or corporation.
        </Body1>
        <Body1 sx={{ mb: 2 }}>
          If you don&apos;t know your landlord&apos;s DBA, you can often look
          them up via the property taxation parcel records for your city.
        </Body1>

        <Card sx={{ px: 2, mb: 2 }}>
          <Body1>
            <HelpOutlineIcon color="secondary" sx={{ mr: 1, mb: -1 }} />
            Note that this is not the same thing as if the landlord hires a
            property management company (we&apos;ll handle that in the next
            step).
          </Body1>
        </Card>

        <FormControlLabel
          label="I know the name of the business my landlord operates as"
          sx={(theme) => sharedCheckboxLabelStyles({ theme })}
          control={
            <Checkbox
              color="secondary"
              checked={knowsDBAName}
              sx={(theme) => ({ color: theme.palette.secondary.main })}
              onChange={(_: ChangeEvent<HTMLInputElement>, checked: boolean) =>
                setKnowsDBAName(checked)
              }
            />
          }
        />
      </Box>

      <Collapse in={!knowsDBAName}>
        <Fade in={!knowsDBAName}>
          <Box>
            <Card sx={{ px: 2, mb: 3 }}>
              <Body1 sx={{ mt: 1 }}>
                <HelpOutlineIcon sx={{ mb: -1, mr: 1 }} color="secondary" />
                Even if you don&apos;t know the landlord&apos;s DBA, you&apos;re
                already helping thousands of other renters by sharing your
                experience.
              </Body1>
            </Card>
          </Box>
        </Fade>
      </Collapse>

      <Collapse in={knowsDBAName}>
        <Fade in={knowsDBAName}>
          <Box>
            <H3>Select A DBA</H3>
            <Body1 sx={{ mb: 1, fontSize: '12px', lineHeight: '20px' }}>
              Use the typeahead dropdown to select your landlord&apos;s business
              from the list of businesses in our system. This helps us build a
              profile of the landlord&apos;s business across multiple
              properties, even if it changes hands.
            </Body1>
            <Body1 sx={{ mb: 2, fontSize: '12px', lineHeight: '20px' }}>
              If the business is not listed, you can add it by selecting
              &quot;Create New Business&quot;
            </Body1>

            <DBAAutocomplete
              dba={dba}
              error={errors.dba}
              addressId={addressId}
              searchTerm={searchTerm}
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
            <H3>New Business</H3>
            <Body1 sx={{ mb: 2, fontSize: '12px', lineHeight: '20px' }}>
              Enter the name of your landlord&apos;s DBA. Check your spelling,
              so that other renters can find it in the future.
            </Body1>

            <TextField
              fullWidth
              size="small"
              sx={{ mb: 2 }}
              value={dbaName}
              label="Doing Business As"
              onChange={(e) => setDBAName(e.target.value)}
              helperText={didAttemptSubmit && errors.dbaName}
              error={didAttemptSubmit && errors.dbaName !== null}
            />
          </Box>
        </Fade>
      </Collapse>
    </>
  )
}

export default DBAForm
