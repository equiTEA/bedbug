import type { Rating } from './Rating'
import type { Landlord } from './Landlord'
import type { BaseEntity } from './BaseEntity'
import type { PropertyManagementCompany } from './PropertyManagementCompany'

type Scalars = {
  full: string
  line1: string
  line2?: string
  line3?: string
  city: string
  state: string
  zip: string

  isVerified: boolean
}

type Associations = {
  ratings?: Rating[]
}

type Virtuals = {
  mostRecentLandlord?: Landlord
  mostRecentDoingBusinessAs?: Landlord
  mostRecentPropertyManagementCompany?: PropertyManagementCompany
  mostRecentRentPrice?: number

  avgRating?: number
  ratingCount?: number
}

export type Address = Partial<Associations & Scalars & BaseEntity & Virtuals>
