import { useCallback, useState, useMemo, FormEvent, useEffect } from 'react'

import {
  graphql,
  GraphQLError,
  updateRating as updateRatingMutation,
  createBusiness as createBusinessMutation,
} from '@bedbug/networking'
import type { Business, Rating, Landlord } from '@bedbug/types'

type Props = {
  onSuccess: () => void
  rating: Rating | null
  editingRating?: Rating
  landlord: Landlord | null
  setRating: (rating: Rating) => void
}

export const useDBAForm = ({
  rating,
  landlord,
  onSuccess,
  setRating,
  editingRating,
}: Props) => {
  const [knowsDBAName, setKnowsDBAName] = useState(true)
  const [dba, setDBA] = useState<Business | null>(
    editingRating ? editingRating.doingBusinessAsAtDateOfRating ?? null : null,
  )
  const [dbaName, setDBAName] = useState('')
  const [createMode, setCreateMode] = useState(false)

  const [loading, setLoading] = useState(false)
  const [didAttemptSubmit, setDidAttemptSubmit] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  useEffect(() => {
    setFormError(null)
  }, [knowsDBAName, dbaName, dba])

  useEffect(() => {
    if (!knowsDBAName) {
      setDBA(null)
      setDBAName('')
    }
  }, [knowsDBAName])

  useEffect(() => {
    if (!!dba) setCreateMode(false)
  }, [dba])

  useEffect(() => {
    if (createMode) setDBAName('')
  }, [createMode])

  const dbaNameError = useMemo(() => {
    if (createMode && knowsDBAName && dbaName.length === 0) {
      return 'Business name is required'
    }

    return null
  }, [dbaName, createMode, knowsDBAName])

  const dbaError = useMemo(() => {
    if (!createMode && knowsDBAName && dba === null) {
      return 'Business is required'
    }

    return null
  }, [dba, createMode, knowsDBAName])

  const errors = useMemo(() => {
    return {
      dbaName: dbaNameError,
      dba: dbaError,
      form: formError,
    }
  }, [dbaNameError, dbaError, formError])

  const errorsExist = useMemo(() => {
    return Object.values(errors).some((error) => error !== null)
  }, [errors])

  const createBusiness = useCallback(
    async () =>
      graphql({
        query: createBusinessMutation,
        variables: {
          data: {
            name: dbaName,
            landlords: {
              connect: [
                {
                  id: landlord?.id,
                },
              ],
            },
          },
        },
        handleErrors: (errors: GraphQLError[]) => {
          if (process.env.NEXT_PUBLIC_DEPLOYMENT_TARGET !== 'production')
            console.error({ errors })

          setFormError(
            'An unexpected error occurred while creating the business',
          )
        },
      }),
    [dbaName, landlord],
  )

  const associateDBAWithRating = useCallback(
    async (dba: Business) => {
      if (!landlord || !rating || !dba) return

      const dbaHasChanged = dba.id !== rating.doingBusinessAsAtDateOfRating?.id

      if (!dbaHasChanged) return dba

      const response = await graphql({
        query: updateRatingMutation,
        variables: {
          where: {
            id: rating.id,
          },
          data: {
            ...(!knowsDBAName
              ? {
                  ...(editingRating ? { disconnect: true } : {}),
                }
              : {
                  doingBusinessAsAtDateOfRating: {
                    connect: {
                      id: dba.id,
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
        return response.updateRating.doingBusinessAsAtDateOfRating
    },
    [rating, editingRating, landlord, knowsDBAName],
  )

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setDidAttemptSubmit(true)

      if (!knowsDBAName) return onSuccess()
      if (errorsExist) return

      setLoading(true)

      const response = await (async () => {
        switch (true) {
          case createMode: {
            const dbaResponse = await createBusiness()

            if (!dbaResponse || !('createBusiness' in dbaResponse)) return

            await associateDBAWithRating(dbaResponse.createBusiness)

            return dbaResponse.createBusiness
          }
          default: {
            if (!dba) return
            return await associateDBAWithRating(dba)
          }
        }
      })()

      setLoading(false)

      if (!response) return
      setDBA(response)
      setRating({ ...rating, doingBusinessAsAtDateOfRating: response })

      onSuccess()
    },
    [
      dba,
      rating,
      setRating,
      onSuccess,
      createMode,
      errorsExist,
      knowsDBAName,
      createBusiness,
      associateDBAWithRating,
    ],
  )

  return {
    dba,
    setDBA,

    dbaName,
    setDBAName,

    createMode,
    setCreateMode,

    knowsDBAName,
    setKnowsDBAName,

    errors,
    loading,
    errorsExist,
    handleSubmit,
    didAttemptSubmit,
  }
}
