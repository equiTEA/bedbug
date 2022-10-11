import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import RatingCard from './components/RatingCard'
import type { Rating } from '@bedbug/types'

import { containerStyles } from './styles'

type Props = {
  /** The list of Ratings to display */
  ratings: Rating[]

  /** The computed vertical space allotted to the layout under the header. */
  allottedHeight: number
}

const Ratings = ({ ratings, allottedHeight }: Props) => (
  <Box sx={(theme) => containerStyles({ theme, allottedHeight })}>
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

export default Ratings
