import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import { useRouter } from 'next/router'
import { containerStyles } from './styles'
import RatingCard from './components/RatingCard'
import CTACard from '../../../../../../components/CTACard'
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation'

import type { Rating } from '@bedbug/types'
import { useAuthUser } from '@bedbug/hooks'

type Props = {
  /** The list of Ratings to display */
  ratings: Rating[]

  /** The computed vertical space allotted to the layout under the header. */
  allottedHeight: number

  /** The id of the address for which to display ratings */
  addressId: string
}

const Ratings = ({ addressId, ratings, allottedHeight }: Props) => {
  const user = useAuthUser()
  const { query } = useRouter()

  return (
    <Box sx={(theme) => containerStyles({ theme, allottedHeight })}>
      {ratings.length === 0 && (
        <Fade in appear>
          <Box>
            {user ? (
              <CTACard
                buttonText="Give it a rating"
                text="No ratings exist for this address yet! Be the first!"
                icon={
                  <NotListedLocationIcon fontSize="large" color="secondary" />
                }
                buttonHref={{
                  pathname: `/addresses/${addressId}/rate`,
                  query,
                }}
              />
            ) : (
              <CTACard
                buttonText="Sign Up"
                text="No ratings exist for this address yet. Sign up to be the first!"
                icon={
                  <NotListedLocationIcon fontSize="medium" color="secondary" />
                }
                buttonHref={{
                  query,
                  pathname: '/signup',
                }}
              />
            )}
          </Box>
        </Fade>
      )}

      {ratings.map((rating, index) => (
        <Fade
          in
          appear
          key={rating.id}
          timeout={1000}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <Box>
            <RatingCard rating={rating} />
          </Box>
        </Fade>
      ))}
    </Box>
  )
}
export default Ratings
