import dayjs from 'dayjs'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import { userInfoContainerStyles } from './styles'
import { Avatar, H3, Body1, RatingIcon, Card, CollapseButton } from '@bedbug/ui'

import type { Rating } from '@bedbug/types'

type Props = {
  /** The Rating to display */
  rating: Rating
}

const RatingCard = ({ rating }: Props) => {
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
            tooltipPlacement="left"
            size={40}
            rating={rating.sentiment}
          />
        </Card.Subheading>
      </Card.DataPoint>

      <Collapse in={!isCollapsed}>
        <Card.Divider />
        <Card.SectionHeading sx={{ px: 2 }}>Review</Card.SectionHeading>

        <Body1 sx={{ px: 2 }}>{rating.body}</Body1>

        <Card.Divider />
        <Card.SectionHeading sx={{ px: 2 }}>Rental Price</Card.SectionHeading>

        <Card.DataPoint sx={{ px: 2 }}>
          <Card.DataPointLabel>Price (at time of rating)</Card.DataPointLabel>
          <Card.DataPointValue>${rating.rentPrice}</Card.DataPointValue>
        </Card.DataPoint>

        <Card.Divider />
        <Card.SectionHeading sx={{ px: 2 }}>Rental Info</Card.SectionHeading>

        <Card.DataPoint sx={{ px: 2 }}>
          <Card.DataPointLabel>Landlord At Time of Rating:</Card.DataPointLabel>
          <Card.DataPointValue>
            {rating.landlordAtDateOfRating?.name}
          </Card.DataPointValue>
        </Card.DataPoint>

        <Card.DataPoint sx={{ px: 2 }}>
          <Card.DataPointLabel>
            Doing Business As At Time of Rating:
          </Card.DataPointLabel>
          <Card.DataPointValue>
            {rating.doingBusinessAsAtDateOfRating?.name}
          </Card.DataPointValue>
        </Card.DataPoint>

        <Card.DataPoint sx={{ px: 2 }}>
          <Card.DataPointLabel>
            Property Management Company At Time of Rating:
          </Card.DataPointLabel>
          <Card.DataPointValue>
            {rating.propertyManagementCompanyAtDateOfRating?.name}
          </Card.DataPointValue>
        </Card.DataPoint>
      </Collapse>
    </Card>
  )
}

export default RatingCard
