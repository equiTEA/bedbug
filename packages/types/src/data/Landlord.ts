import type { Rating } from './Rating'
import type { Business } from './Business'
import type { BaseEntity } from './BaseEntity'

export type Scalars = {
  name: string
  isVerified: boolean
}

export type Associations = {
  doingBusinessAs?: Business[]
  ratings?: Rating[]
}

export type Virtuals = {
  avgRating: number
}

export type Landlord = Partial<Associations & Scalars & BaseEntity & Virtuals>
