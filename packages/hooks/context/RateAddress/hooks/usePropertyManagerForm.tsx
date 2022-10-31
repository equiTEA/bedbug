import { useCallback, useState, useMemo, FormEvent, useEffect } from 'react'

import type { PropertyManagementCompany, Rating } from '@bedbug/types'
import {
  graphql,
  GraphQLError,
  updateRating as updateRatingMutation,
  createPropertyManagementCompany as createPropertyManagementCompanyMutation,
} from '@bedbug/networking'

type Props = {
  onSuccess: () => void
  rating: Rating | null
  editingRating?: Rating
  setRating: (rating: Rating) => void
}

export const usePropertyManagerForm = ({
  rating,
  setRating,
  onSuccess,
  editingRating,
}: Props) => {
  const [knowsPropertyManagerName, setKnowsPropertyManagerName] = useState(true)
  const [propertyManager, setPropertyManager] =
    useState<PropertyManagementCompany | null>(
      editingRating
        ? editingRating.propertyManagementCompanyAtDateOfRating ?? null
        : null,
    )

  const [loading, setLoading] = useState(false)
  const [propertyManagerName, setPropertyManagerName] = useState('')
  const [createMode, setCreateMode] = useState(false)
  const [didAttemptSubmit, setDidAttemptSubmit] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  useEffect(() => {
    setFormError(null)
  }, [knowsPropertyManagerName, propertyManager])

  useEffect(() => {
    if (!knowsPropertyManagerName) {
      setPropertyManager(null)
      setPropertyManagerName('')
    }
  }, [knowsPropertyManagerName])

  useEffect(() => {
    if (!!propertyManager) setCreateMode(false)
  }, [propertyManager])

  useEffect(() => {
    if (createMode) setPropertyManagerName('')
  }, [createMode])

  const propertyManagerNameError = useMemo(() => {
    if (
      createMode &&
      knowsPropertyManagerName &&
      propertyManagerName.length === 0
    ) {
      return 'Property manager name is required'
    }

    return null
  }, [propertyManagerName, createMode, knowsPropertyManagerName])

  const propertyManagerError = useMemo(() => {
    if (!createMode && knowsPropertyManagerName && propertyManager === null) {
      return 'Property manager is required'
    }

    return null
  }, [propertyManager, createMode, knowsPropertyManagerName])

  const errors = useMemo(() => {
    return {
      form: formError,
      propertyManager: propertyManagerError,
      propertyManagerName: propertyManagerNameError,
    }
  }, [propertyManagerNameError, propertyManagerError, formError])

  const errorsExist = useMemo(() => {
    return Object.values(errors).some((error) => error !== null)
  }, [errors])

  const createPropertyManager = useCallback(
    async () =>
      graphql({
        query: createPropertyManagementCompanyMutation,
        variables: {
          data: {
            name: propertyManagerName,
          },
        },
        handleErrors: (errors: GraphQLError[]) => {
          if (process.env.NEXT_PUBLIC_DEPLOYMENT_TARGET !== 'production')
            console.error({ errors })

          setFormError(
            'An unexpected error occurred while creating the property management company',
          )
        },
      }),
    [propertyManagerName],
  )

  const associatePropertyManagerWithRating = useCallback(
    async (propertyManager: PropertyManagementCompany) => {
      if (!propertyManager || !rating) return

      const propertyManagerHasChanged =
        propertyManager.id !==
        rating.propertyManagementCompanyAtDateOfRating?.id

      if (!propertyManagerHasChanged) return propertyManager

      const response = await graphql({
        query: updateRatingMutation,
        variables: {
          where: {
            id: rating.id,
          },
          data: {
            ...(!knowsPropertyManagerName
              ? {
                  ...(editingRating ? { disconnect: true } : {}),
                }
              : {
                  propertyManagementCompanyAtDateOfRating: {
                    connect: {
                      id: propertyManager.id,
                    },
                  },
                }),
          },
        },
        handleErrors: (errors: GraphQLError[]) => {
          if (process.env.NEXT_PUBLIC_DEPLOYMENT_TARGET !== 'production')
            console.error({ errors })

          setFormError('An unexpected error occurred while updating the rating')
        },
      })

      if ('updateRating' in response)
        return response.updateRating.propertyManagementCompanyAtDateOfRating
    },
    [rating, editingRating, knowsPropertyManagerName],
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
            const createResponse = await createPropertyManager()

            if (
              !createResponse ||
              !('createPropertyManagementCompany' in createResponse)
            )
              return

            await associatePropertyManagerWithRating(
              createResponse.createPropertyManagementCompany,
            )

            return createResponse.createPropertyManagementCompany
          }
          default: {
            if (!propertyManager) return
            return await associatePropertyManagerWithRating(propertyManager)
          }
        }
      })()

      setLoading(false)

      if (!response) return
      setPropertyManager(response)
      setRating({
        ...rating,
        propertyManagementCompanyAtDateOfRating: response,
      })

      onSuccess()
    },
    [
      rating,
      setRating,
      onSuccess,
      createMode,
      errorsExist,
      propertyManager,
      createPropertyManager,
      associatePropertyManagerWithRating,
    ],
  )

  return {
    knowsPropertyManagerName,
    setKnowsPropertyManagerName,

    propertyManager,
    setPropertyManager,

    createMode,
    setCreateMode,

    propertyManagerName,
    setPropertyManagerName,

    errors,
    loading,
    errorsExist,
    handleSubmit,
    didAttemptSubmit,
  }
}
