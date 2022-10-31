import {
  dbaChipStyles,
  chipIconStyles,
  listItemStyles,
  addressChipStyles,
  addressLabelStyles,
  autocompleteStyles,
  listItemTitleStyles,
  selectedDBAChipStyles,
  createNewDBAIconStyles,
  createNewDBAListItemStyles,
} from './styles'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import { Body1, TextField } from '@bedbug/ui'
import { useTheme } from '@mui/material/styles'
import Autocomplete from '@mui/material/Autocomplete'
import HistoryIcon from '@mui/icons-material/History'
import { useEffect, useState, ChangeEvent } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import CheckedPinIcon from '@mui/icons-material/WhereToVote'
import CircularProgress from '@mui/material/CircularProgress'
import { useBusinessAutocompleteOptions } from '@bedbug/hooks'

import type { Business } from '@bedbug/types'

type Props = {
  addressId: string
  searchTerm: string
  dba: Business | null
  error: string | null
  didAttemptSubmit: boolean
  setSearchTerm: (searchTerm: string) => void
  onSelect: (landlord: Business | 'Create New Business' | null) => void
}

const DBAAutocomplete = ({
  dba,
  error,
  onSelect,
  addressId,
  searchTerm,
  setSearchTerm,
  didAttemptSubmit,
}: Props) => {
  const theme = useTheme()

  const [selection, setSelection] = useState<
    (Business | 'Create New Business')[]
  >(dba ? [dba] : [])
  const [focused, setFocused] = useState(false)
  const [didAttemptSearch, setDidAttemptSearch] = useState(false)

  useEffect(() => {
    if (!dba) setSelection([])
  }, [dba])

  const {
    businessOptions,
    loading: businessOptionsLoading,
    businessIsCurrentDBAForThisAddress,
    businessHasBeenPreviouslyRatedForThisAddress,
  } = useBusinessAutocompleteOptions({
    addressId,
    searchTerm,
  })

  const handleSelect = (value: (Business | string | null)[]) => {
    /** Place the new value in the 0th for deterministic access */
    value.reverse()

    setFocused(false)

    /** Replace the previous value with the new one */
    setSelection(value[0] ? [value[0] as Business | 'Create New Business'] : [])
    onSelect((value[0] as Business | 'Create New Business') ?? null)
  }

  return (
    <Autocomplete
      multiple // Does not actually accept multiple values, but allows for a Chip to be rendered
      disablePortal
      value={selection}
      forcePopupIcon={false}
      onChange={(_, value) => handleSelect(value)}
      onFocus={() => setFocused(true)}
      loading={businessOptionsLoading}
      filterOptions={(options) => options}
      sx={(theme) => autocompleteStyles({ theme })}
      onBlur={() => {
        setFocused(false)
        setSearchTerm('')
      }}
      isOptionEqualToValue={(option, value) => {
        if (selection.length === 1) return true

        if (value === 'Create New Business' || typeof option === 'string')
          return option === (value as 'Create New Business')

        return option.name === value.name
      }}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            sx={(theme) => selectedDBAChipStyles({ theme })}
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
        !businessOptionsLoading &&
        ((didAttemptSearch && searchTerm === '') ||
          businessOptions.length > 0 ||
          (didAttemptSearch && businessOptions.length === 0))
      }
      options={
        [
          ...businessOptions,

          /** Make the user at least look at the existing landlords before prompting them to create a new one. */
          ...(searchTerm === '' && !didAttemptSearch
            ? []
            : ['Create New Business']),
        ] as (Business | 'Create New Business')[]
      }
      getOptionLabel={(option: Business | string) => {
        if (typeof option === 'string') return option as 'Create New Business'
        return option.name as string
      }}
      ListboxProps={{
        style: {
          backgroundColor: theme.palette.secondary.main,
        },
      }}
      renderOption={(props, option, { selected }) => {
        if (option === 'Create New Business') {
          return (
            <Box
              key="Create New Business"
              {...props}
              component="li"
              sx={(theme) => createNewDBAListItemStyles({ theme, selected })}
            >
              <AddCircleIcon
                sx={(theme) => createNewDBAIconStyles({ theme, selected })}
              />{' '}
              Create New Business
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
              {businessHasBeenPreviouslyRatedForThisAddress(option) && (
                <>
                  {businessIsCurrentDBAForThisAddress(option) ? (
                    <Tooltip
                      enterDelay={500}
                      title="The most recent rating for this address reported that the address was owned by this business. If this is no longer the case, please select or add the new business."
                      PopperProps={{
                        sx: { lineHeight: '16px !important' },
                      }}
                    >
                      <Chip
                        component="span"
                        variant="outlined"
                        label="Current DBA"
                        sx={(theme) => dbaChipStyles({ theme, selected })}
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
                      title="This business has been previously rated for this address."
                      PopperProps={{
                        sx: { lineHeight: '16px !important' },
                      }}
                    >
                      <Chip
                        component="span"
                        variant="outlined"
                        label="Previous DBA"
                        sx={(theme) => dbaChipStyles({ theme, selected })}
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

            <Body1 sx={addressLabelStyles({ theme, selected })}>
              <strong>Owned Addresses: </strong>
              {typeof option !== 'string' &&
              option.ratings &&
              option.ratings.length > 0
                ? // Addresses can be rated more than once: remove duplicates
                  Array.from(
                    new Set(
                      option.ratings.map(
                        ({ address }) =>
                          `${address?.line1}${
                            address?.line2 ? ` ${address.line2}` : ''
                          }, ${address?.city}, ${address?.state}`,
                      ),
                    ),
                  ).map((address) => (
                    <Chip
                      key={address}
                      component="span"
                      label={address}
                      sx={(theme) => addressChipStyles({ theme, selected })}
                    />
                  ))
                : 'No known addresses'}
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
              ? "Begin typing to search for your landlord's business"
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
                {businessOptionsLoading ? (
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

export default DBAAutocomplete
