import type { Descendant } from 'slate'
import type { Address } from './Address'
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

export type Scalars = {
  sentiment: RatingSentiments
  body: Descendant[]
  rentPrice: number
}

export type Associations = {
  landlordAtDateOfRating?: Landlord
  propertyManagementCompanyAtDateOfRating?: PropertyManagementCompany
  doingBusinessAsAtDateOfRating?: Business
  address?: Address
}

export type Rating = Partial<Associations & Scalars & BaseEntity>
