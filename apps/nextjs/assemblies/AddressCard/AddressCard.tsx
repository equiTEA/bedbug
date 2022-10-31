import {
  headingStyles,
  subheadingStyles,
  headerContainerStyles,
  sharedRatingIconStyles,
} from './styles'
import NextLink from 'next/link'
import Box from '@mui/material/Box'
import MuiLink from '@mui/material/Link'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import { useEffect, useRef, useState, MouseEvent } from 'react'
import { Card, H3, RatingIcon, CollapseButton } from '@bedbug/ui'

import type { Address } from '@bedbug/types'

type Props = {
  /** The Address for which to render information */
  address: Address
  /** If rendered in a list, the ordinal index position of this AddressCard */
  index: number
  /** If provided, a callback to call when the card is clicked;  */
  onClick?: () => unknown
}

const AddressCard = ({
  onClick,
  address: {
    full,
    line1,
    line2,
    city,
    state,
    zip,
    id,
    avgRating,
    ratingCount,
    mostRecentDoingBusinessAs,
    mostRecentPropertyManagementCompany,
  },
}: Props) => {
  const collapsibleRef = useRef<HTMLDivElement>(null)

  const [headerHeight, setHeaderHeight] = useState(0)
  const [isCollapsed, setIsCollapsed] = useState(true)

  useEffect(() => {
    if (collapsibleRef.current) {
      setHeaderHeight(collapsibleRef.current.clientHeight)
    }
  }, [])

  return (
    <Card key={id} onClick={onClick}>
      <>
        <Box sx={headerContainerStyles} ref={collapsibleRef}>
          {(mostRecentDoingBusinessAs ||
            mostRecentPropertyManagementCompany) && (
            <CollapseButton
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
            />
          )}

          <Box sx={{ flexGrow: 1 }}>
            <Card.Heading sx={headingStyles}>
              {full ? full : `${line1} ${line2} ${city} ${state} ${zip}`}
            </Card.Heading>
          </Box>
        </Box>
        {ratingCount !== undefined && ratingCount > 0 && avgRating && (
          <Card.Subheading>
            <Box sx={subheadingStyles}>
              <H3>Average Property Rating: </H3>
              <RatingIcon
                rating={avgRating}
                sx={{ transform: 'translate(4px, 0px)' }}
              />
            </Box>
          </Card.Subheading>
        )}

        {ratingCount === 0 && (
          <Box sx={{ px: 3 }}>
            <NextLink href={`/addresses/${id}/rate`} passHref>
              <Button
                onClick={(e: MouseEvent<HTMLButtonElement>) =>
                  e.stopPropagation()
                }
                variant="contained"
                color="primary"
              >
                No ratings yet - be the first!
              </Button>
            </NextLink>
          </Box>
        )}

        <Card.DataPoint>
          <Card.DataPointLabel sx={{ mb: 0, px: 1 }}>
            {ratingCount !== undefined && ratingCount > 0 && (
              <NextLink href={`/addresses/${id}?tab=Ratings`} passHref>
                <Button variant="text" color="secondary">
                  {ratingCount} Rating{ratingCount === 1 ? '' : 's'}
                </Button>
              </NextLink>
            )}
          </Card.DataPointLabel>
        </Card.DataPoint>
        <Collapse in={!isCollapsed}>
          {mostRecentDoingBusinessAs && (
            <>
              <Card.Divider />
              <Card.SectionHeading sx={{ px: 1.5 }}>
                Landlord
              </Card.SectionHeading>

              <Card.DataPoint>
                <Card.DataPointLabel sx={{ px: 0.5 }}>
                  Doing Business As:
                </Card.DataPointLabel>

                <Card.DataPointValue key={id} sx={{ mb: 0, px: 0.5 }}>
                  <NextLink href={`/landlords/${id}`} passHref>
                    <MuiLink underline="hover" sx={{ color: 'secondary.main' }}>
                      {mostRecentDoingBusinessAs.name}
                    </MuiLink>
                  </NextLink>
                </Card.DataPointValue>
              </Card.DataPoint>

              {mostRecentDoingBusinessAs.avgRating && (
                <Card.DataPoint>
                  <Card.DataPointLabel sx={{ mb: 0, px: 0.5 }}>
                    Average Rating:
                  </Card.DataPointLabel>
                  <Card.DataPointValue sx={{ mb: 0, px: 0.5 }}>
                    <RatingIcon
                      size={10}
                      sx={sharedRatingIconStyles}
                      rating={mostRecentDoingBusinessAs.avgRating}
                    />
                  </Card.DataPointValue>
                </Card.DataPoint>
              )}
            </>
          )}

          {mostRecentPropertyManagementCompany && (
            <>
              <Card.Divider />
              <Card.SectionHeading sx={{ px: 1.5 }}>
                Property Manager
              </Card.SectionHeading>
              <Card.DataPoint>
                <Card.DataPointLabel sx={{ px: 0.5 }}>
                  Property Mgmt. Company:
                </Card.DataPointLabel>

                <Card.DataPointValue key={id}>
                  <NextLink
                    href={`/property-management-companies/${mostRecentPropertyManagementCompany.id}`}
                    passHref
                  >
                    <MuiLink sx={{ color: 'secondary.main' }} underline="hover">
                      {mostRecentPropertyManagementCompany.name}
                    </MuiLink>
                  </NextLink>
                </Card.DataPointValue>
              </Card.DataPoint>

              {mostRecentPropertyManagementCompany.avgRating && (
                <Card.DataPoint>
                  <Card.DataPointLabel sx={{ mb: 0, px: 0.5 }}>
                    Average Rating:
                  </Card.DataPointLabel>
                  <Card.DataPointValue sx={{ mb: 0, px: 0.5 }}>
                    <RatingIcon
                      size={10}
                      sx={sharedRatingIconStyles}
                      rating={mostRecentPropertyManagementCompany.avgRating}
                    />
                  </Card.DataPointValue>
                </Card.DataPoint>
              )}
            </>
          )}
        </Collapse>
      </>
    </Card>
  )
}

export default AddressCard
