import {
  graphql,
  GraphQLError,
  updateRating as updateRatingMutation,
  createLandlord as createLandlordMutation,
} from '@bedbug/networking'
import { useCallback, useState, useMemo, FormEvent, useEffect } from 'react'

import type { Landlord, Rating } from '@bedbug/types'

type CreateLandlordResponse = Promise<
  void | { createLandlord: Landlord } | { errors: GraphQLError[] }
>

type Props = {
  rating: Rating | null
  editingRating?: Rating
  onSuccess: () => void
  setRating: (rating: Rating) => void
}

export const useLandlordForm = ({
  rating,
  setRating,
  onSuccess,
  editingRating,
}: Props) => {
  const [knowsLandlordName, setKnowsLandlordName] = useState(
    rating ? !!(rating.landlordAtDateOfRating?.name ?? true) : true,
  )

  const [landlord, setLandlord] = useState<Landlord | null>(
    rating ? rating.landlordAtDateOfRating ?? null : null,
  )

  const [landlordName, setLandlordName] = useState('')

  const [createMode, setCreateMode] = useState(false)

  const [loading, setLoading] = useState(false)
  const [didAttemptSubmit, setDidAttemptSubmit] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  useEffect(() => {
    setFormError(null)
  }, [landlord, landlordName])

  useEffect(() => {
    if (!knowsLandlordName) {
      setLandlord(null)
      setLandlordName('')
    }
  }, [knowsLandlordName])

  useEffect(() => {
    if (!!landlord) setCreateMode(false)
  }, [landlord])

  useEffect(() => {
    if (createMode) setLandlordName('')
  }, [createMode])

  const landlordNameError = useMemo(() => {
    if (createMode && knowsLandlordName && landlordName.length === 0) {
      return 'Landlord name is required'
    }

    return null
  }, [landlordName, createMode, knowsLandlordName])

  const landlordError = useMemo(() => {
    if (!createMode && knowsLandlordName && landlord === null) {
      return 'Landlord is required'
    }

    return null
  }, [landlord, createMode, knowsLandlordName])

  const errors = useMemo(
    () => ({
      landlordName: landlordNameError,
      landlord: landlordError,
      form: formError,
    }),
    [landlordNameError, landlordError, formError],
  )

  const errorsExist = useMemo(
    () => Object.values(errors).some((error) => error !== null),
    [errors],
  )

  const createLandlord = useCallback(
    (): CreateLandlordResponse =>
      graphql({
        query: createLandlordMutation,
        variables: {
          data: {
            name: landlordName,
          },
        },
        handleErrors: (errors: GraphQLError[]) => {
          if (process.env.NEXT_PUBLIC_DEPLOYMENT_TARGET !== 'production')
            console.error(errors)

          setFormError('An unexpected error occurred. Please try again.')
        },
      }),
    [landlordName],
  )

  const associateLandlordWithRating = useCallback(
    async (landlord: Landlord): Promise<Landlord | void> => {
      if (!landlord || !rating) return

      const landlordHasChanged =
        landlord.id !== rating.landlordAtDateOfRating?.id

      if (!landlordHasChanged) return landlord

      const response = await graphql({
        query: updateRatingMutation,
        variables: {
          where: {
            id: rating?.id,
          },
          data: {
            ...(!knowsLandlordName
              ? {
                  ...(editingRating ? { disconnect: true } : {}),
                }
              : {
                  landlordAtDateOfRating: {
                    connect: {
                      id: landlord?.id,
                    },
                  },
                }),
          },
        },
        handleErrors: (errors: GraphQLError[]) => {
          if (process.env.NEXT_PUBLIC_DEPLOYMENT_TARGET !== 'production')
            console.error(errors)

          setFormError('An unexpected error occurred. Please try again.')
        },
      })

      if ('updateRating' in response)
        return response.updateRating?.landlordAtDateOfRating
    },
    [rating, editingRating, knowsLandlordName],
  )

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setDidAttemptSubmit(true)

      if (errorsExist) return

      setLoading(true)

      const response = await (async () => {
        switch (true) {
          case createMode: {
            const landlordResponse = await createLandlord()

            if (!landlordResponse || !('createLandlord' in landlordResponse))
              return

            await associateLandlordWithRating(landlordResponse.createLandlord)

            return landlordResponse.createLandlord
          }
          default: {
            if (!landlord) return
            return await associateLandlordWithRating(landlord)
          }
        }
      })()

      setLoading(false)

      if (!response) return
      setLandlord(response)
      setRating({ ...rating, landlordAtDateOfRating: response })

      onSuccess()
    },
    [
      rating,
      landlord,
      setRating,
      onSuccess,
      createMode,
      errorsExist,
      createLandlord,
      associateLandlordWithRating,
    ],
  )

  return {
    knowsLandlordName,
    setKnowsLandlordName,

    landlord,
    setLandlord,

    createMode,
    setCreateMode,

    landlordName,
    setLandlordName,

    errors,
    loading,
    errorsExist,
    handleSubmit,
    didAttemptSubmit,
  }
}
