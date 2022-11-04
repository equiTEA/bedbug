import type { Rating } from './Rating'
import type { Landlord } from './Landlord'
import type { BaseEntity } from './BaseEntity'

export type Scalars = {
  name: string
  isVerified: boolean
}

export type Associations = {
  ratings: Rating[]
  landlords: Landlord[]
}

export type Virtuals = {
  avgRating: number
}

export type Business = Partial<Associations & Scalars & BaseEntity & Virtuals>
