import type { Business } from './Business'
import type { Landlord } from './Landlord'
import type { BaseEntity } from './BaseEntity'
import type { PropertyManagementCompany } from './PropertyManagementCompany'

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
  rentPrice: number
}

type Associations = {
  landlordAtDateOfRating?: Landlord
  propertyManagementCompanyAtDateOfRating?: PropertyManagementCompany
  doingBusinessAsAtDateOfRating?: Business
}

export type Rating = Partial<Associations & Scalars & BaseEntity>
