import {
  chipIconStyles,
  listItemStyles,
  landlordChipStyles,
  listItemTitleStyles,
  doingBusinessAsChipStyles,
  doingBusinessAsLabelStyles,
  createNewLandlordIconStyles,
  selectedLandlordChipStyles,
  createNewLandlordListItemStyles,
} from './styles'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import { useEffect, useState } from 'react'
import { Body1, TextField } from '@bedbug/ui'
import { useTheme } from '@mui/material/styles'
import Autocomplete from '@mui/material/Autocomplete'
import HistoryIcon from '@mui/icons-material/History'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import CheckedPinIcon from '@mui/icons-material/WhereToVote'
import CircularProgress from '@mui/material/CircularProgress'
import { useLandlordAutocompleteOptions } from '@bedbug/hooks'
import { sharedAutocompleteStyles } from '../../styles/shared/autocompleteStyles'

import type { ChangeEvent } from 'react'
import type { Landlord } from '@bedbug/types'

type Props = {
  addressId: string
  searchTerm: string
  error: string | null
  landlord: Landlord | null
  didAttemptSubmit: boolean
  setSearchTerm: (searchTerm: string) => void
  onSelect: (landlord: Landlord | 'Create New Landlord' | null) => void
}

const LandlordAutocomplete = ({
  error,
  landlord,
  onSelect,
  addressId,
  searchTerm,
  setSearchTerm,
  didAttemptSubmit,
}: Props) => {
  const theme = useTheme()

  const [selection, setSelection] = useState<
    (Landlord | 'Create New Landlord')[]
  >(landlord ? [landlord] : [])
  const [focused, setFocused] = useState(false)
  const [didAttemptSearch, setDidAttemptSearch] = useState(false)

  useEffect(() => {
    if (!landlord) setSelection([])
  }, [landlord])

  const {
    landlordOptions,
    loading: landlordOptionsLoading,
    landlordIsCurrentLandlordForThisAddress,
    landlordHasBeenPreviouslyRatedForThisAddress,
  } = useLandlordAutocompleteOptions({
    addressId,
    searchTerm,
  })

  const handleSelect = (value: (Landlord | string | null)[]) => {
    /** Place the new value in the 0th for deterministic access */
    value.reverse()

    setFocused(false)

    /** Replace the previous value with the new one */
    setSelection(value[0] ? [value[0] as Landlord | 'Create New Landlord'] : [])
    onSelect((value[0] as Landlord | 'Create New Landlord') ?? null)
  }

  return (
    <Autocomplete
      multiple // Does not actually accept multiple values, but allows for a Chip to be rendered
      disablePortal
      value={selection}
      forcePopupIcon={false}
      onChange={(_, value) => handleSelect(value)}
      onFocus={() => setFocused(true)}
      loading={landlordOptionsLoading}
      filterOptions={(options) => options}
      sx={(theme) => sharedAutocompleteStyles({ theme })}
      onBlur={() => {
        setFocused(false)
        setSearchTerm('')
      }}
      isOptionEqualToValue={(option, value) => {
        if (selection.length === 1) return true
        if (value === 'Create New Landlord' || typeof option === 'string')
          return option === (value as 'Create New Landlord')

        return option.name === value.name
      }}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            sx={(theme) => selectedLandlordChipStyles({ theme })}
            label={typeof option === 'string' ? option : option.name}
            {...getTagProps({ index })}
            onDelete={() => {
              setSearchTerm('')
              handleSelect([null])
            }}
          />
        ))
      }
      open={
        focused &&
        !landlordOptionsLoading &&
        ((didAttemptSearch && searchTerm === '') ||
          landlordOptions.length > 0 ||
          (didAttemptSearch && landlordOptions.length === 0))
      }
      options={
        [
          ...landlordOptions,

          /** Make the user at least look at the existing landlords before prompting them to create a new one. */
          ...(searchTerm === '' && !didAttemptSearch
            ? []
            : ['Create New Landlord']),
        ] as (Landlord | 'Create New Landlord')[]
      }
      getOptionLabel={(option: Landlord | string) => {
        if (typeof option === 'string') return option as 'Create New Landlord'
        return option.name as string
      }}
      ListboxProps={{
        style: {
          backgroundColor: theme.palette.secondary.main,
        },
      }}
      renderOption={(props, option, { selected }) => {
        if (option === 'Create New Landlord') {
          return (
            <Box
              key="Create New Landlord"
              {...props}
              component="li"
              sx={(theme) =>
                createNewLandlordListItemStyles({ theme, selected })
              }
            >
              <AddCircleIcon
                sx={(theme) => createNewLandlordIconStyles({ theme, selected })}
              />{' '}
              Create New Landlord
            </Box>
          )
        }

        return (
          <Box
            {...props}
            component="li"
            sx={(theme) => listItemStyles({ selected, theme })}
          >
            <Body1 sx={listItemTitleStyles({ theme, selected })}>
              {typeof option === 'string' ? option : option.name}{' '}
              {landlordHasBeenPreviouslyRatedForThisAddress(option) && (
                <>
                  {landlordIsCurrentLandlordForThisAddress(option) ? (
                    <Tooltip
                      enterDelay={500}
                      title="The most recent rating for this address reported that the address was owned by this landlord. If this is no longer the case, please select or add the new landlord."
                      PopperProps={{
                        sx: { lineHeight: '16px !important' },
                      }}
                    >
                      <Chip
                        component="span"
                        variant="outlined"
                        label="Current Landlord"
                        sx={(theme) => landlordChipStyles({ theme, selected })}
                        icon={
                          <CheckedPinIcon
                            sx={(theme) => chipIconStyles({ theme, selected })}
                          />
                        }
                      />
                    </Tooltip>
                  ) : (
                    <Tooltip
                      enterDelay={500}
                      title="This landlord has been previously rated for this address."
                      PopperProps={{
                        sx: { lineHeight: '16px !important' },
                      }}
                    >
                      <Chip
                        component="span"
                        variant="outlined"
                        label="Previous Landlord"
                        sx={(theme) => landlordChipStyles({ theme, selected })}
                        icon={
                          <HistoryIcon
                            sx={(theme) => chipIconStyles({ theme, selected })}
                          />
                        }
                      />
                    </Tooltip>
                  )}
                </>
              )}
            </Body1>

            <Body1 sx={doingBusinessAsLabelStyles({ theme, selected })}>
              <strong>Doing Business As: </strong>
              {typeof option === 'string' ? (
                'Unknown'
              ) : option.doingBusinessAs &&
                option.doingBusinessAs.length > 0 ? (
                option.doingBusinessAs.map((dba) => (
                  <Chip
                    key={dba.id}
                    component="span"
                    label={dba.name}
                    sx={(theme) =>
                      doingBusinessAsChipStyles({ theme, selected })
                    }
                  />
                ))
              ) : (
                <Box
                  component="span"
                  sx={{
                    display: 'inline-block',
                    fontFamily: '"Albert Sans", sans-serif',
                    color: theme.palette.secondary.contrastText,
                  }}
                >
                  Unknown
                </Box>
              )}
            </Body1>
          </Box>
        )
      }}
      renderInput={(props) => (
        <TextField
          {...props}
          fullWidth
          size="small"
          color="secondary"
          value={searchTerm}
          onFocus={() => setFocused(true)}
          helperText={didAttemptSubmit && error}
          error={(didAttemptSubmit || didAttemptSearch) && !!error}
          placeholder={
            selection.length === 0
              ? 'Begin typing to search for your landlord'
              : undefined
          }
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFocused(true)
            setSearchTerm(e.target.value)
            setDidAttemptSearch(true)
          }}
          InputProps={{
            ...props.InputProps,
            endAdornment: (
              <>
                {landlordOptionsLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {props.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  )
}

export default LandlordAutocomplete
