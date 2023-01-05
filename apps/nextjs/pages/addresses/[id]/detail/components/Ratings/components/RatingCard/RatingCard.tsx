import {
  H3,
  Card,
  Avatar,
  RatingIcon,
  CollapseButton,
  RichTextEditor,
} from '@bedbug/ui'
import dayjs from 'dayjs'
import Link from 'next/link'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useAuthUser } from '@bedbug/hooks'
import Collapse from '@mui/material/Collapse'
import { userInfoContainerStyles } from './styles'

import type { Rating } from '@bedbug/types'

type Props = {
  /** The Rating to display */
  rating: Rating
  /** Id of the associated Address */
  addressId: string
}

const RatingCard = ({ addressId, rating }: Props) => {
  const { user } = useAuthUser()
  const [isCollapsed, setIsCollapsed] = useState(true)

  if (!rating.sentiment || !rating.createdBy?.username) return null

  return (
    <Card>
      <Card.DataPoint>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 1 }}>
          <CollapseButton
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />

          <Box>
            <Box sx={userInfoContainerStyles}>
              <Avatar size={24} name={rating.createdBy?.username} />
              <H3 sx={{ display: 'inline', fontSize: 14 }}>
                {rating.createdBy?.username}
              </H3>
            </Box>

            <Card.Subheading sx={{ px: 0, fontSize: 12 }}>
              {dayjs(rating.createdAt).format('MMMM D, YYYY')}
            </Card.Subheading>
          </Box>
        </Box>

        <Card.Subheading sx={{ px: 0 }}>
          <RatingIcon
            size={40}
            tooltipPlacement="left"
            rating={rating.sentiment}
          />
        </Card.Subheading>
      </Card.DataPoint>

      <Collapse in={!isCollapsed}>
        <Card.Divider />
        <Card.SectionHeading sx={{ px: 2 }}>Review</Card.SectionHeading>

        {rating.body && (
          <Box sx={{ px: 2 }}>
            <RichTextEditor readonly chromeless document={rating.body} />
          </Box>
        )}

        <Card.Divider />
        <Card.SectionHeading sx={{ px: 2 }}>Rental Price</Card.SectionHeading>

        <Card.DataPoint sx={{ px: 2 }}>
          <Card.DataPointLabel>Price (at time of rating)</Card.DataPointLabel>
          <Card.DataPointValue>${rating.rentPrice}</Card.DataPointValue>
        </Card.DataPoint>

        {(rating.landlordAtDateOfRating ||
          rating.doingBusinessAsAtDateOfRating ||
          rating.propertyManagementCompanyAtDateOfRating) && (
          <>
            <Card.Divider />
            <Card.SectionHeading sx={{ px: 2 }}>
              Rental Info
            </Card.SectionHeading>
          </>
        )}

        {rating.landlordAtDateOfRating && (
          <Card.DataPoint sx={{ px: 2 }}>
            <Card.DataPointLabel>
              Landlord At Time of Rating:
            </Card.DataPointLabel>
            <Card.DataPointValue>
              {rating.landlordAtDateOfRating?.name}
            </Card.DataPointValue>
          </Card.DataPoint>
        )}

        {rating.doingBusinessAsAtDateOfRating && (
          <Card.DataPoint sx={{ px: 2 }}>
            <Card.DataPointLabel>
              Doing Business As At Time of Rating:
            </Card.DataPointLabel>
            <Card.DataPointValue>
              {rating.doingBusinessAsAtDateOfRating?.name}
            </Card.DataPointValue>
          </Card.DataPoint>
        )}

        {rating.propertyManagementCompanyAtDateOfRating && (
          <Card.DataPoint sx={{ px: 2 }}>
            <Card.DataPointLabel>
              Property Management Company At Time of Rating:
            </Card.DataPointLabel>
            <Card.DataPointValue>
              {rating.propertyManagementCompanyAtDateOfRating?.name}
            </Card.DataPointValue>
          </Card.DataPoint>
        )}

        {user?.id === rating.createdBy.id && (
          <>
            <Card.Divider />
            <Card.DataPoint sx={{ px: 2, mb: -1, justifyContent: 'flex-end' }}>
              <Card.DataPointValue>
                <Link passHref href={`/addresses/${addressId}/rate`}>
                  <Button variant="outlined" color="secondary">
                    Edit Rating
                  </Button>
                </Link>
              </Card.DataPointValue>
            </Card.DataPoint>
          </>
        )}
      </Collapse>
    </Card>
  )
}

export default RatingCard
