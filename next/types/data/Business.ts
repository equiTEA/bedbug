import type { BaseEntity } from './BaseEntity'

type Scalars = {
  name: string
}

type Associations = {
  /** TODO: */
}

type Virtuals = {
  avgRating: number
}

export type Business = Partial<Associations & Scalars & BaseEntity & Virtuals>
