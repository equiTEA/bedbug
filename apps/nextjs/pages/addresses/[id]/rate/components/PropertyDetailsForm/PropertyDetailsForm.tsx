import { ChangeEvent } from 'react'
import Box from '@mui/material/Box'
import { labelStyles } from './styles'
import Collapse from '@mui/material/Collapse'
import Checkbox from '@mui/material/Checkbox'
import { TextField, Body1 } from '@bedbug/ui'
import FormControlLabel from '@mui/material/FormControlLabel'

type Props = {
  addressId: string
  landlordName: string
  doingBusinessAs: string
  knowsLandlordName: boolean
  propertyManagerName: string
  knowsDoingBusinessAsName: boolean
  knowsPropertyManagerName: boolean
  setLandlordName: (landlordName: string) => void
  setDoingBusinessAs: (doingBusinessAs: string) => void
  setKnowsLandlordName: (knowsLandlordName: boolean) => void
  setPropertyManagerName: (propertyManagerName: string) => void
  setKnowsDoingBusinessAsName: (knowsDoingBusinessAsName: boolean) => void
  setKnowsPropertyManagerName: (knowsPropertyManagerName: boolean) => void
}

const PropertyDetailsForm = ({
  doingBusinessAs,
  setDoingBusinessAs,
  propertyManagerName,
  setPropertyManagerName,
  knowsDoingBusinessAsName,
  knowsPropertyManagerName,
  setKnowsDoingBusinessAsName,
  setKnowsPropertyManagerName,
}: Props) => {
  return (
    <>
      <Body1>Select all options that apply below:</Body1>

      <Box sx={{ mb: 2 }}>
        <FormControlLabel
          sx={(theme) => labelStyles({ theme })}
          label="I know the name of the entity my landlord does business as (i.e., LLC, Corporation)"
          control={
            <Checkbox
              sx={(theme) => ({ color: theme.palette.secondary.main })}
              color="secondary"
              checked={knowsDoingBusinessAsName}
              onChange={(_: ChangeEvent<HTMLInputElement>, checked: boolean) =>
                setKnowsDoingBusinessAsName(checked)
              }
            />
          }
        />

        <FormControlLabel
          sx={(theme) => labelStyles({ theme })}
          label="I know the name of my property manager or property management company"
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

      <Collapse in={knowsDoingBusinessAsName}>
        <TextField
          fullWidth
          size="small"
          color="secondary"
          value={doingBusinessAs}
          label="Doing Business As"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDoingBusinessAs(e.target.value)
          }
        />
      </Collapse>

      <Collapse in={knowsPropertyManagerName}>
        <TextField
          fullWidth
          size="small"
          color="secondary"
          value={propertyManagerName}
          label="Property Management Company"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPropertyManagerName(e.target.value)
          }
        />
      </Collapse>
    </>
  )
}
export default PropertyDetailsForm
