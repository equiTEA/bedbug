import dayjs from 'dayjs'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Card from '../../../../../components/library/Card'
import Body1 from '../../../../../components/library/Body1'
import RatingIcon from '../../../../../components/library/RatingIcon'

import type { Rating } from '../../../../../types/data/Rating'

type Props = {
  /** The list of Ratings to display */
  ratings: Rating[]

  /** The computed vertical space allotted to the layout under the header. */
  allottedHeight: number
}

const Ratings = ({ ratings, allottedHeight }: Props) => {
  return (
    <>
      {ratings.map((rating, index) => (
        <Fade in timeout={index * 1000} appear key={rating.id}>
          <Box>
            <Card>
              <Card.DataPoint>
                <Box>
                  <Card.Subheading>
                    {dayjs(rating.createdAt).format('MMMM DD, YYYY')}
                  </Card.Subheading>

                  <Card.DataPoint>
                    <Card.DataPointValue sx={{ mb: 0 }}>
                      Submitted by: {rating.createdBy.username}
                    </Card.DataPointValue>
                  </Card.DataPoint>
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
              <Card.SectionHeading>Rental Info</Card.SectionHeading>

              <Card.DataPoint>
                <Card.DataPointLabel>
                  Landlord At Time of Rating:
                </Card.DataPointLabel>
                <Card.DataPointValue>
                  {rating.landlordAtDateOfRating.name}
                </Card.DataPointValue>
              </Card.DataPoint>

              <Card.DataPoint>
                <Card.DataPointLabel>
                  Property Management Company At Time of Rating:
                </Card.DataPointLabel>
                <Card.DataPointValue>
                  {rating.propertyManagementCompanyAtDateOfRating.name}
                </Card.DataPointValue>
              </Card.DataPoint>

              <Card.DataPoint>
                <Card.DataPointLabel>
                  Doing Business As At Time of Rating:
                </Card.DataPointLabel>
                <Card.DataPointValue>
                  {rating.doingBusinessAsAtDateOfRating.name}
                </Card.DataPointValue>
              </Card.DataPoint>
            </Card>
          </Box>
        </Fade>
      ))}
    </>
  )
}

export default Ratings
