import { faker } from '@faker-js/faker'
import { RatingSentiments } from '@bedbug/types'

import type { Rating } from '@bedbug/types'
import type { SeedProps } from './types/SeedProps'

const sentiments: { [key in RatingSentiments]: number } = {
  [RatingSentiments.EXTREMELY_NEGATIVE]: 1,
  [RatingSentiments.NEGATIVE]: 2,
  [RatingSentiments.NEUTRAL]: 3,
  [RatingSentiments.POSITIVE]: 4,
  [RatingSentiments.EXTREMELY_POSITIVE]: 5,
}

export const seedRatings = async ({
  keystoneContext,
  seedCount,
}: SeedProps) => {
  process.stdout.write('Seeding ratings...\n')

  const ratingsCount = await keystoneContext.query.Rating.count()

  if (ratingsCount !== 0) {
    process.stdout.write('Ratings exist, skipping\n')
    return []
  }

  const ratings: Rating[] = []
  for (let i = 0; i < seedCount; i++) {
    const possibleSentiments = Object.values(sentiments)

    /** Sentiments are 1 indexed */
    const randomIndex = Math.ceil(Math.random() * possibleSentiments.length)
    const bodySentenceCount = Math.ceil(Math.random() * 20)

    const rating = {
      sentiment: randomIndex,
      body: faker.lorem.paragraph(bodySentenceCount),
    }

    ratings.push(rating)
  }

  return await keystoneContext.query.Rating.createMany({
    data: ratings,
  })
}
