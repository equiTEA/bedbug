import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isEqual from 'lodash/isEqual'
import {
  GraphQLError,
  updateRating as updateRatingMutation,
  createRating as createRatingMutation,
} from '@bedbug/networking'
import { useCallback, useEffect, useMemo, useState, FormEvent } from 'react'

import type { Descendant } from 'slate'
import type { Rating } from '@bedbug/types'
import { graphql } from '@bedbug/networking'

type Props = {
  addressId: string
  onSuccess: () => void
  editingRating?: Rating
}

type CreateRatingResponse = Promise<void | Rating | { errors: GraphQLError[] }>
type EditRatingResponse = Promise<void | Rating | { errors: GraphQLError[] }>

dayjs.extend(customParseFormat)

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

  const [tenancyStartDate, setTenancyStartDate] = useState<Date | null>(
    editingRating?.tenancyStartDate
      ? dayjs(editingRating.tenancyStartDate).toDate() ?? null
      : null,
  )

  const [tenancyEndDate, setTenancyEndDate] = useState<Date | null>(
    editingRating?.tenancyEndDate
      ? dayjs(editingRating.tenancyEndDate).toDate() ?? null
      : null,
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
      ? 'Please explain why you selected your rating'
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

  const tenancyStartDateError = useMemo(() => {
    if (!tenancyStartDate) return 'Please select a start date'
    if (!dayjs(tenancyStartDate).isValid()) return 'Please enter a valid date'
    if (dayjs(tenancyStartDate).isBefore(dayjs().subtract(20, 'years')))
      return `Please enter a date after ${dayjs()
        .subtract(20, 'years')
        .format('M/D/YYYY')}`

    return null
  }, [tenancyStartDate])

  const tenancyEndDateError = useMemo(() => {
    if (!tenancyEndDate) return 'Please select an end date'
    if (!dayjs(tenancyEndDate).isValid()) return 'Please enter a valid date'
    if (dayjs(tenancyEndDate).isBefore(dayjs().subtract(20, 'years')))
      return `Please enter a date after ${dayjs()
        .subtract(20, 'years')
        .format('M/D/YYYY')}`

    return null
  }, [tenancyEndDate])

  const tenancyDateRangeError = useMemo(() => {
    const startDate = dayjs(tenancyStartDate)
    const endDate = dayjs(tenancyEndDate)

    if (startDate.isAfter(endDate)) return 'End date must be after start date'
    if (startDate.isSame(endDate)) return 'End date must be after start date'

    return null
  }, [tenancyStartDate, tenancyEndDate])

  const errors = useMemo(
    () => ({
      form: formError,
      body: ratingBodyError,
      rentPrice: rentPriceError,
      sentiment: ratingSentimentError,
      tenancyStartDate: tenancyStartDateError,
      tenancyEndDate: tenancyEndDateError,
      tenancyDateRange: tenancyDateRangeError,
    }),
    [
      rentPriceError,
      ratingBodyError,
      ratingSentimentError,
      tenancyStartDateError,
      tenancyEndDateError,
      tenancyDateRangeError,
      formError,
    ],
  )

  console.log({ errors })

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
            tenancyStartDate,
            tenancyEndDate,
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
    [addressId, body, sentiment, rentPrice, tenancyStartDate, tenancyEndDate],
  )

  const updateRating = useCallback((): EditRatingResponse => {
    if (!editingRating) return Promise.resolve()

    console.log(
      sentiment !== editingRating?.sentiment,
      rentPrice !== editingRating?.rentPrice,
      tenancyStartDate?.toISOString() !== editingRating?.tenancyStartDate,
      tenancyEndDate?.toISOString() !== editingRating?.tenancyEndDate,
      !isEqual(body, editingRating?.body),
    )

    console.log(tenancyStartDate, editingRating?.tenancyStartDate)
    console.log(tenancyEndDate, editingRating?.tenancyEndDate)

    /** Prevent unecessary network requests if values not changed */
    const valuesHaveChanged =
      sentiment !== editingRating?.sentiment ||
      rentPrice !== editingRating?.rentPrice ||
      tenancyStartDate?.toISOString() !== editingRating?.tenancyStartDate ||
      tenancyEndDate?.toISOString() !== editingRating?.tenancyEndDate ||
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
          tenancyStartDate,
          tenancyEndDate,
          address: {
            connect: {
              id: addressId,
            },
          },
        },
      },
      handleErrors: (errors) => {
        if (process.env.NEXT_PUBLIC_DEPLOYMENT_TARGET !== 'production')
          console.log({ errors })

        setFormError('An unexpected error occurred.')
      },
    })
  }, [
    body,
    addressId,
    rentPrice,
    rating?.id,
    sentiment,
    editingRating,
    tenancyEndDate,
    tenancyStartDate,
  ])

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

    tenancyStartDate,
    setTenancyStartDate,

    tenancyEndDate,
    setTenancyEndDate,

    errors,
    loading,
    errorsExist,
    handleSubmit,
    didAttemptSubmit,
  }
}
