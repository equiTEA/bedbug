import {
  updateRating as updateRatingMutation,
  createRating as createRatingMutation,
  GraphQLError,
} from '@bedbug/networking'
import isEqual from 'lodash/isEqual'
import { useCallback, useEffect, useMemo, useState, FormEvent } from 'react'

import type { Descendant } from 'slate'
import { graphql } from '@bedbug/networking'
import type { Rating } from '@bedbug/types'

type Props = {
  addressId: string
  onSuccess: () => void
  editingRating?: Rating
}

type CreateRatingResponse = Promise<void | Rating | { errors: GraphQLError[] }>
type EditRatingResponse = Promise<void | Rating | { errors: GraphQLError[] }>

const bodyInitialState = [
  {
    type: 'paragraph' as const,
    children: [{ text: '' }],
  },
]

export const useRatingForm = ({
  addressId,
  onSuccess,
  editingRating,
}: Props) => {
  const [rating, setRating] = useState<Rating | null>(
    editingRating ? editingRating : null,
  )
  const [sentiment, setSentiment] = useState<number | null>(
    editingRating ? editingRating.sentiment ?? null : null,
  )
  const [rentPrice, setRentPrice] = useState<number | null>(
    editingRating ? editingRating.rentPrice ?? null : null,
  )
  const [body, setBody] = useState<Descendant[]>(
    editingRating ? editingRating.body ?? bodyInitialState : bodyInitialState,
  )

  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [didAttemptSubmit, setDidAttemptSubmit] = useState(false)

  useEffect(() => {
    setFormError(null)
  }, [rating, sentiment, rentPrice, body])

  const ratingSentimentError = useMemo(() => {
    if (sentiment === null) {
      return 'Please select a rating by clicking a button above'
    }

    return null
  }, [sentiment])

  const ratingBodyError = useMemo(() => {
    /**
     * Because the rating body is a rich text editor, it's not just
     * a matter of checking an empty string. We need to recursively check if
     * each node is empty.
     */
    const ratingBodyIsEmpty = (node: Descendant): boolean => {
      if ('children' in node) {
        return node.children.every((node) => ratingBodyIsEmpty(node))
      }

      return node.text.trim() === ''
    }

    return body.every((node) => ratingBodyIsEmpty(node))
      ? 'Please explain why you selected this rating'
      : null
  }, [body])

  const rentPriceError = useMemo(() => {
    if (rentPrice === null) {
      return 'Please enter a rent price'
    }

    if (rentPrice <= 0) return 'Please enter a rent price greater than $0'
    if (rentPrice > 9999.99)
      return 'Please enter a rent price less than $10,000'

    return null
  }, [rentPrice])

  const errors = useMemo(
    () => ({
      form: formError,
      body: ratingBodyError,
      rentPrice: rentPriceError,
      sentiment: ratingSentimentError,
    }),
    [rentPriceError, ratingBodyError, ratingSentimentError, formError],
  )

  const errorsExist = useMemo(
    () => Object.values(errors).some((error) => error !== null),
    [errors],
  )

  const createRating = useCallback(
    (): CreateRatingResponse =>
      graphql({
        query: createRatingMutation,
        operationName: 'createRating',
        variables: {
          data: {
            body,
            sentiment,
            rentPrice,
            address: {
              connect: {
                id: addressId,
              },
            },
          },
        },
        handleErrors: (errors) => {
          console.log('errors', errors)
        },
      }),
    [addressId, body, sentiment, rentPrice],
  )

  const updateRating = useCallback((): EditRatingResponse => {
    if (!editingRating) return Promise.resolve()

    /** Prevent unecessary network requests if values not changed */
    const valuesHaveChanged =
      sentiment !== editingRating?.sentiment ||
      rentPrice !== editingRating?.rentPrice ||
      !isEqual(body, editingRating?.body)

    if (!valuesHaveChanged) return Promise.resolve(editingRating)

    return graphql({
      query: updateRatingMutation,
      operationName: 'updateRating',
      variables: {
        where: {
          id: rating?.id,
        },
        data: {
          body,
          sentiment,
          rentPrice,
          address: {
            connect: {
              id: addressId,
            },
          },
        },
      },
      handleErrors: (errors) => {
        console.log({ errors })
        setFormError('An unexpected error occurred.')
      },
    })
  }, [editingRating, body, sentiment, rentPrice, rating?.id, addressId])

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setDidAttemptSubmit(true)
      if (errorsExist) return

      setLoading(true)

      const response = await (async () => {
        switch (true) {
          case !!editingRating:
            return await updateRating()
          default:
            return await createRating()
        }
      })()

      setLoading(false)

      if (!response) return
      if ('errors' in response) return

      setRating(response)

      // Notify parent that submission has finished successfully
      onSuccess()
    },
    [errorsExist, onSuccess, editingRating, updateRating, createRating],
  )

  return {
    rating,
    setRating,

    rentPrice,
    setRentPrice,

    body,
    setBody,

    sentiment,
    setSentiment,

    errors,
    loading,
    errorsExist,
    handleSubmit,
    didAttemptSubmit,
  }
}
