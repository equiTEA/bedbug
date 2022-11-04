import type { Address } from '@bedbug/types'
import { env } from '../../../helpers/verifyEnv'
import type { KeystoneContext } from '@keystone-6/core/types'

type PositionStackAPIResult = {
  type?: string
  confidence?: number
  label?: string
  name?: string
  locality?: string
  region_code?: string
  postal_code?: string
  latitude?: number
  longitude?: number
  neighbourhood?: string
  country_code?: string
}

export const forwardGeocode = async (
  _: any,
  { address }: { address: string },
  context: KeystoneContext,
) => {
  /** Ensure only logged-in, non-banned users may access this API */
  if (!context.session?.data || context.session.data.banned)
    throw new Error('Unauthorized')

  /** Comma-separate the desired fields in the form: results.[field], */
  const fields = [
    'label' /* full */,
    'type' /* needed to filter out venues, counties (stuff that isn't addresses) - filtering not available from the API */,
    'confidence' /** 0 - 1 */,

    'name' /* Line 1 */,
    'locality' /* City */,
    'region_code' /* State */,
    'postal_code',

    'neighbourhood' /* Neighborhood */,
    'country_code' /* Country */,

    'latitude',
    'longitude',
  ].reduce(
    (acc, field, index) => `${acc}${index === 0 ? '' : ','}results.${field}`,
    '',
  )

  const API_KEY = env.POSITIONSTACK_API_ACCESS_KEY
  const URL = `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${address}&limit=10&output=json&fields=${fields}`

  try {
    const response = await fetch(URL)
    const deserialized = await response.json()

    const processed = deserialized.data
      .reduce(
        (
          acc: PositionStackAPIResult[],
          {
            type,
            confidence,
            label,
            name,
            locality,
            region_code,
            postal_code,
            latitude,
            longitude,
            neighbourhood,
            country_code,
          }: PositionStackAPIResult,
        ) => {
          const shouldIgnoreResult =
            type !== 'address' || // Filter out non-address results (i.e., venues) */
            !name ||
            !locality ||
            !region_code ||
            !label ||
            !postal_code ||
            !latitude ||
            !longitude ||
            !confidence // (no way to sort values, if not present)

          /** Ignore results where fields are missing */
          if (shouldIgnoreResult) return acc

          return [
            ...acc,
            {
              latitude,
              longitude,

              full: `${name}, ${locality}, ${region_code} ${postal_code}, ${country_code}`,
              line1: name,
              city: locality,
              state: region_code,
              zip: postal_code,

              neighborhood: neighbourhood,
              countryCode: country_code,
              confidence,
            },
          ]
        },
        [],
      )
      .sort(
        (
          a: Address & { confidence: number },
          b: Address & { confidence: number },
        ) =>
          /** Sort by confidence, descending; if no difference, sort by full address */
          b.confidence - a.confidence ||
          (b.full as string).localeCompare(a.full as string),
      )

    return processed
  } catch (error) {
    console.error(error)

    // TODO: Handle errors

    throw new Error(
      'An error occurred while attempting to forward-geocode address',
    )
  }
}
