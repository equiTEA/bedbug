import dayjs from 'dayjs'
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

  const ratingsCount = await keystoneContext.db.Rating.count()

  if (ratingsCount !== 0) {
    process.stdout.write('Ratings exist, skipping\n')
    return []
  }

  const ratings: Rating[] = []

  // Create 10 ratings per address
  for (let i = 0; i < seedCount * 10; i++) {
    const possibleSentiments = Object.values(sentiments)

    /** Sentiments are 1-indexed to avoid potential falsiness pitfalls with 0 */
    const randomIndex = Math.ceil(Math.random() * possibleSentiments.length)
    const bodySentenceCount = Math.ceil(Math.random() * 20)

    const rating = {
      sentiment: randomIndex,
      body: [
        {
          type: 'paragraph' as const,
          children: [{ text: faker.lorem.sentence(bodySentenceCount) }],
        },
      ],
      rentPrice: parseFloat(faker.finance.amount(900, 3000, 2)),

      tenancyStartDate: dayjs()
        .subtract(seedCount - Math.floor(i / 10), 'year')
        .toDate(),

      tenancyEndDate: dayjs()
        .subtract(seedCount - 1 - Math.floor(i / 10), 'year')
        .toDate(),
    }

    ratings.push(rating)
  }

  const createdRatings = await keystoneContext.db.Rating.createMany({
    data: ratings,
  })

  process.stdout.write(`Seeded ${seedCount * 10} ratings \n`)

  return createdRatings
}
