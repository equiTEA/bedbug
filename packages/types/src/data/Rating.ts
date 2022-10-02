import type { BaseEntity } from './BaseEntity'

export enum RatingSentiments {
  EXTREMELY_POSITIVE = 5,
  POSITIVE = 4,
  NEUTRAL = 3,
  NEGATIVE = 2,
  EXTREMELY_NEGATIVE = 1,
}

type Scalars = {
  sentiment: RatingSentiments
  body: string
}

type Associations = {
  /** TODO:  */
}

export type Rating = Partial<Associations & Scalars & BaseEntity>
