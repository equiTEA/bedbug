import type { BaseEntity } from './BaseEntity'

type Scalars = {
  name: string
  isVerified: boolean
}

type Associations = {
  /** TODO: */
}

type Virtuals = {
  avgRating: number
}

export type Business = Partial<Associations & Scalars & BaseEntity & Virtuals>
