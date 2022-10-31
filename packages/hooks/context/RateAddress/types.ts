import type {
  Rating,
  Landlord,
  Business,
  PropertyManagementCompany,
} from '@bedbug/types'
import type { FormEvent } from 'react'
import type { Descendant } from 'slate'

export type StepperState = {
  activeStep: number
  handleNextStep: () => void
  handlePreviousStep: () => void
}

export type CommonFields = {
  loading: boolean
  errorsExist: boolean
  didAttemptSubmit: boolean
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
}

export type CommonErrorFields = {
  form: string | null
}

export type CreateModeFields = {
  createMode: boolean
  setCreateMode: (createMode: boolean) => void
}

export type RatingFormFields = CommonFields & {
  body: Descendant[]
  rentPrice: number | null
  sentiment: number | null
  setBody: (ratingBody: Descendant[]) => void
  setSentiment: (ratingSentiment: number) => void
  setRentPrice: (rentPrice: number | null) => void
  errors: CommonErrorFields & {
    body: string | null
    rentPrice: string | null
    sentiment: string | null
  }
}

export type LandlordFormFields = CommonFields &
  CreateModeFields & {
    landlordName: string
    landlord: Landlord | null
    knowsLandlordName: boolean
    setLandlord: (landlord: Landlord | null) => void
    setLandlordName: (landlordName: string) => void
    setKnowsLandlordName: (knowsLandlordName: boolean) => void
    errors: CommonErrorFields & {
      landlord: string | null
      landlordName: string | null
    }
  }

export type DBAFormFields = CommonFields &
  CreateModeFields & {
    dbaName: string
    dba: Business | null
    knowsDBAName: boolean
    setDBAName: (dbaName: string) => void
    setDBA: (dba: Business | null) => void
    setKnowsDBAName: (knowsDBAName: boolean) => void
    errors: CommonErrorFields & {
      dba: string | null
      dbaName: string | null
    }
  }

export type PropertyManagerFormFields = CommonFields &
  CreateModeFields & {
    propertyManagerName: string
    propertyManager: PropertyManagementCompany | null
    knowsPropertyManagerName: boolean
    setPropertyManagerName: (propertyManagerName: string) => void
    setKnowsPropertyManagerName: (knowsPropertyManagerName: boolean) => void
    setPropertyManager: (
      propertyManager: PropertyManagementCompany | null,
    ) => void
    errors: CommonErrorFields & {
      propertyManager: string | null
      propertyManagerName: string | null
    }
  }

export type RateAddressContextValue = {
  /** Whether the user is editing the provided Rating or creating a new one (undefined) */
  editingRating?: Rating

  addressId: string
  stepper: StepperState

  ratingForm: RatingFormFields
  landlordForm: LandlordFormFields
  dbaForm: DBAFormFields
  propertyManagerForm: PropertyManagerFormFields
}
