import NextLink from 'next/link'
import Box from '@mui/material/Box'
import Card from '../../library/Card'
import MuiLink from '@mui/material/Link'
import RatingIcon from '../../library/RatingIcon'

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
  index,
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
}: Props) => (
  <Card key={id} onClick={onClick}>
    <>
      <Card.Heading>
        {full ? full : `${line1} ${line2} ${city} ${state} ${zip}`}
      </Card.Heading>

      {ratingCount > 0 && avgRating && (
        <Card.Subheading>
          Average Property Rating:{' '}
          <RatingIcon
            rating={avgRating}
            sx={{ transform: 'translateY(10px)' }}
          />
        </Card.Subheading>
      )}

      <Card.DataPoint>
        <Card.DataPointLabel>
          {ratingCount} Rating{ratingCount === 1 ? '' : 's'}
        </Card.DataPointLabel>
      </Card.DataPoint>

      {mostRecentDoingBusinessAs && (
        <>
          <Card.Divider />
          <Card.SectionHeading>Landlord</Card.SectionHeading>

          <Card.DataPoint>
            <Card.DataPointLabel>Doing Business As:</Card.DataPointLabel>

            <Box sx={{ maxWidth: '60%' }}>
              <Card.DataPointValue key={id}>
                <NextLink href={`/landlords/${id}`} passHref>
                  <MuiLink sx={{ color: 'secondary.main' }} underline="hover">
                    {mostRecentDoingBusinessAs.name}
                  </MuiLink>
                </NextLink>
              </Card.DataPointValue>
            </Box>
          </Card.DataPoint>

          <Card.DataPoint>
            <Card.DataPointLabel>Average Rating:</Card.DataPointLabel>
            <Card.DataPointValue>
              <RatingIcon
                rating={mostRecentDoingBusinessAs.avgRating}
                size={24}
                sx={{ transform: 'translateX(4px)' }}
              />
            </Card.DataPointValue>
          </Card.DataPoint>
        </>
      )}

      {mostRecentPropertyManagementCompany && (
        <>
          <Card.Divider />
          <Card.SectionHeading>Property Manager</Card.SectionHeading>
          <Card.DataPoint>
            <Card.DataPointLabel>Property Mgmt. Company:</Card.DataPointLabel>

            <Box sx={{ maxWidth: '60%' }}>
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
            </Box>
          </Card.DataPoint>

          <Card.DataPoint>
            <Card.DataPointLabel>Average Rating:</Card.DataPointLabel>
            <Card.DataPointValue>
              <RatingIcon
                rating={mostRecentPropertyManagementCompany.avgRating}
                size={24}
                sx={{ transform: 'translateX(4px)' }}
              />
            </Card.DataPointValue>
          </Card.DataPoint>
        </>
      )}
    </>
  </Card>
)

export default AddressCard
