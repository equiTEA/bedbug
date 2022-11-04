import { useDBAForm } from './hooks/useDBAForm'
import { useRatingForm } from './hooks/useRatingForm'
import { useLandlordForm } from './hooks/useLandlordForm'
import { useStepperState } from './hooks/useStepperState'
import React, { Context, ReactNode, createContext } from 'react'
import { usePropertyManagerForm } from './hooks/usePropertyManagerForm'

import type { Rating } from '@bedbug/types'
import type { RateAddressContextValue } from './types'

export const RateAddressContext: Context<RateAddressContextValue | undefined> =
  createContext<RateAddressContextValue | undefined>(undefined)

type Props = {
  addressId: string
  children: ReactNode
  /** Users may only have one rating per address; place them into edit mode if they already have one */
  editingRating: Rating
}

export const RateAddressContextProvider = ({
  children,
  addressId,
  editingRating,
}: Props) => {
  const stepper = useStepperState()

  const ratingForm = useRatingForm({
    addressId,
    editingRating,
    onSuccess: stepper.handleNextStep,
  })

  const landlordForm = useLandlordForm({
    editingRating,
    rating: ratingForm.rating,
    setRating: ratingForm.setRating,
    onSuccess: stepper.handleNextStep,
  })

  const dbaForm = useDBAForm({
    editingRating,
    rating: ratingForm.rating,
    setRating: ratingForm.setRating,
    landlord: landlordForm.landlord,
    onSuccess: stepper.handleNextStep,
  })

  const propertyManagerForm = usePropertyManagerForm({
    editingRating,
    rating: ratingForm.rating,
    setRating: ratingForm.setRating,
    onSuccess: stepper.handleNextStep,
  })

  return (
    <RateAddressContext.Provider
      value={{
        dbaForm,
        stepper,
        addressId,
        ratingForm,
        landlordForm,
        editingRating,
        propertyManagerForm,
      }}
    >
      {children}
    </RateAddressContext.Provider>
  )
}
