import {
  chipIconStyles,
  listItemStyles,
  addressChipStyles,
  addressLabelStyles,
  autocompleteStyles,
  listItemTitleStyles,
  propertyManagerChipStyles,
  selectedPropertyManagerChipStyles,
  createNewPropertyManagerIconStyles,
  createNewPropertyManagerListItemStyles,
} from './styles'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import { Body1, TextField } from '@bedbug/ui'
import { useTheme } from '@mui/material/styles'
import Autocomplete from '@mui/material/Autocomplete'
import HistoryIcon from '@mui/icons-material/History'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import CheckedPinIcon from '@mui/icons-material/WhereToVote'
import CircularProgress from '@mui/material/CircularProgress'
import { usePropertyManagerAutocompleteOptions } from '@bedbug/hooks'

import type { ChangeEvent } from 'react'
import type { PropertyManagementCompany } from '@bedbug/types'

type Props = {
  addressId: string
  searchTerm: string
  error: string | null
  didAttemptSubmit: boolean
  setSearchTerm: (searchTerm: string) => void
  propertyManager: PropertyManagementCompany | null
  onSelect: (
    propertyManager:
      | PropertyManagementCompany
      | 'Create New Property Manager'
      | null,
  ) => void
}

const PropertyManagerAutocomplete = ({
  error,
  onSelect,
  addressId,
  searchTerm,
  setSearchTerm,
  propertyManager,
  didAttemptSubmit,
}: Props) => {
  const theme = useTheme()

  const [selection, setSelection] = useState<
    (PropertyManagementCompany | 'Create New Property Manager')[]
  >(propertyManager ? [propertyManager] : [])
  const [focused, setFocused] = useState(false)
  const [didAttemptSearch, setDidAttemptSearch] = useState(false)

  const {
    propertyManagerOptions,
    loading: propertyManagerOptionsLoading,
    propertyManagerIsCurrentPropertyManagerForThisAddress,
    propertyManagerHasBeenPreviouslyRatedForThisAddress,
  } = usePropertyManagerAutocompleteOptions({
    addressId,
    searchTerm,
  })

  const handleSelect = (
    value: (PropertyManagementCompany | string | null)[],
  ) => {
    /** Place the new value in the 0th for deterministic access */
    value.reverse()

    setFocused(false)

    /** Replace the previous value with the new one */
    setSelection(
      value[0]
        ? [
            value[0] as
              | PropertyManagementCompany
              | 'Create New Property Manager',
          ]
        : [],
    )
    onSelect(
      (value[0] as PropertyManagementCompany | 'Create New Property Manager') ??
        null,
    )
  }

  return (
    <Autocomplete
      multiple // Does not actually accept multiple values, but allows for a Chip to be rendered
      disablePortal
      value={selection}
      forcePopupIcon={false}
      onChange={(_, value) => handleSelect(value)}
      onFocus={() => setFocused(true)}
      loading={propertyManagerOptionsLoading}
      filterOptions={(options) => options}
      sx={(theme) => autocompleteStyles({ theme })}
      onBlur={() => {
        setFocused(false)
        setSearchTerm('')
      }}
      isOptionEqualToValue={(option, value) => {
        if (selection.length === 1) return true

        if (
          value === 'Create New Property Manager' ||
          typeof option === 'string'
        )
          return option === (value as 'Create New Property Manager')

        return option.name === value.name
      }}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            sx={(theme) => selectedPropertyManagerChipStyles({ theme })}
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
        !propertyManagerOptionsLoading &&
        ((didAttemptSearch && searchTerm === '') ||
          propertyManagerOptions.length > 0 ||
          (didAttemptSearch && propertyManagerOptions.length === 0))
      }
      options={
        [
          ...propertyManagerOptions,

          /** Make the user at least look at the existing options before prompting them to create a new one. */
          ...(searchTerm === '' && !didAttemptSearch
            ? []
            : ['Create New Property Manager']),
        ] as (PropertyManagementCompany | 'Create New Property Manager')[]
      }
      getOptionLabel={(option: PropertyManagementCompany | string) => {
        if (typeof option === 'string')
          return option as 'Create New Property Manager'
        return option.name as string
      }}
      ListboxProps={{
        style: {
          backgroundColor: theme.palette.secondary.main,
        },
      }}
      renderOption={(props, option, { selected }) => {
        if (option === 'Create New Property Manager') {
          return (
            <Box
              key="Create New Property Manager"
              {...props}
              component="li"
              sx={(theme) =>
                createNewPropertyManagerListItemStyles({ theme, selected })
              }
            >
              <AddCircleIcon
                sx={(theme) =>
                  createNewPropertyManagerIconStyles({ theme, selected })
                }
              />{' '}
              Create New Property Manager
            </Box>
          )
        }

        // Prevent MUI from applying the key and instead apply the resource id
        const { key, ...rest } = props as any

        return (
          <Box
            key={option.id}
            component="li"
            sx={(theme) => listItemStyles({ selected, theme })}
            {...rest}
          >
            <Body1 sx={listItemTitleStyles({ theme, selected })}>
              {typeof option === 'string' ? option : option.name}{' '}
              {propertyManagerHasBeenPreviouslyRatedForThisAddress(option) && (
                <>
                  {propertyManagerIsCurrentPropertyManagerForThisAddress(
                    option,
                  ) ? (
                    <Tooltip
                      enterDelay={500}
                      title="The most recent rating for this address reported that the address was operated by this property manager. If this is no longer the case, please select or add the new property manager."
                      PopperProps={{
                        sx: { lineHeight: '16px !important' },
                      }}
                    >
                      <Chip
                        component="span"
                        variant="outlined"
                        label="Current"
                        sx={(theme) =>
                          propertyManagerChipStyles({ theme, selected })
                        }
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
                      title="This property manager has been previously rated for this address."
                      PopperProps={{
                        sx: { lineHeight: '16px !important' },
                      }}
                    >
                      <Chip
                        component="span"
                        variant="outlined"
                        label="Previous"
                        sx={(theme) =>
                          propertyManagerChipStyles({ theme, selected })
                        }
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
              {typeof option !== 'string' && option.ratings
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
                  ).map((address, index) => (
                    <Chip
                      key={`${address}-${index}`}
                      component="span"
                      label={address}
                      sx={(theme) => addressChipStyles({ theme, selected })}
                    />
                  ))
                : 'Unknown'}
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
              ? 'Begin typing to search for your property manager'
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
                {propertyManagerOptionsLoading ? (
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

export default PropertyManagerAutocomplete
