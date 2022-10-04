import dayjs from 'dayjs'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Card from '../../../../../components/library/Card'
import RatingIcon from '../../../../../components/library/RatingIcon'
import Body1 from '../../../../../library/Body1'
import H3 from '../../../../../library/H3'

import type { Rating } from '@bedbug/types'

type Props = {
  /** The list of Ratings to display */
  ratings: Rating[]

  /** The computed vertical space allotted to the layout under the header. */
  allottedHeight: number
}

const Ratings = ({ ratings, allottedHeight }: Props) => {
  return (
    <Box sx={{ height: `${allottedHeight}px`, overflowY: 'auto' }}>
      {ratings.map((rating, index) => {
        if (!rating.sentiment || !rating.createdBy?.username) return null

        return (
          <Fade in timeout={index * 1000} appear key={rating.id}>
            <Box sx={{ mt: 3 }}>
              <Card>
                <Card.DataPoint>
                  <Box>
                    <Card.Subheading>
                      {dayjs(rating.createdAt).format('MMMM DD, YYYY')}
                    </Card.Subheading>

                    <Box>
                      <Body1 sx={{ display: 'inline' }}>Submitted by:</Body1>{' '}
                      <H3 sx={{ display: 'inline' }}>
                        {rating.createdBy?.username}
                      </H3>
                    </Box>
                  </Box>

                  <Card.Subheading>
                    <RatingIcon
                      tooltipPlacement="left"
                      size={40}
                      rating={rating.sentiment}
                    />
                  </Card.Subheading>
                </Card.DataPoint>

                <Card.Divider />
                <Card.SectionHeading>Review</Card.SectionHeading>

                <Body1>{rating.body}</Body1>

                <Card.Divider />
                <Card.SectionHeading>Rental Price</Card.SectionHeading>

                <Card.DataPoint>
                  <Card.DataPointLabel>
                    Price (at time of rating)
                  </Card.DataPointLabel>
                  <Card.DataPointValue>${rating.rentPrice}</Card.DataPointValue>
                </Card.DataPoint>

                <Card.Divider />
                <Card.SectionHeading>Rental Info</Card.SectionHeading>

                <Card.DataPoint>
                  <Card.DataPointLabel>
                    Landlord At Time of Rating:
                  </Card.DataPointLabel>
                  <Card.DataPointValue>
                    {rating.landlordAtDateOfRating?.name}
                  </Card.DataPointValue>
                </Card.DataPoint>

                <Card.DataPoint>
                  <Card.DataPointLabel>
                    Doing Business As At Time of Rating:
                  </Card.DataPointLabel>
                  <Card.DataPointValue>
                    {rating.doingBusinessAsAtDateOfRating?.name}
                  </Card.DataPointValue>
                </Card.DataPoint>

                <Card.DataPoint>
                  <Card.DataPointLabel>
                    Property Management Company At Time of Rating:
                  </Card.DataPointLabel>
                  <Card.DataPointValue>
                    {rating.propertyManagementCompanyAtDateOfRating?.name}
                  </Card.DataPointValue>
                </Card.DataPoint>
              </Card>
            </Box>
          </Fade>
        )
      })}
    </Box>
  )
}

export default Ratings
