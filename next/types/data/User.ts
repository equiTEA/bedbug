export const Roles = {
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  TENANT: 'TENANT',
  LANDLORD: 'LANDLORD',
  PROPERTY_MANAGEMENT_COMPANY: 'PROPERTY_MANAGEMENT_COMPANY',
}

type Scalars = {
  id: string
  username: string
  email: string
  role: typeof Roles
  banned: boolean
  password: {
    isSet: boolean
  }
}

export type Associations = {
  /** TODO: */
}

export type User = Partial<Associations & Scalars>
