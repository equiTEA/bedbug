import type { Rating } from './Rating'
import type { BaseEntity } from './BaseEntity'

export type Scalars = {
  name: string
}

export type Associations = {
  ratings?: Rating[]
}

export type Virtuals = {
  avgRating: number
}

export type PropertyManagementCompany = Partial<
  Associations & Scalars & BaseEntity & Virtuals
>
