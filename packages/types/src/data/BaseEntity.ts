import type { User } from './User'

export type BaseEntity = {
  id: string

  createdAt: Date
  createdBy?: User

  updatedAt: Date
  updatedBy?: User

  isDeleted: boolean
  deletedAt: Date
  deletedBy?: User
}
