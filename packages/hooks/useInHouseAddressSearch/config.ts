export const DEBOUNCE_INTERVAL = 500
export const MAX_RESULTS = 10

export const searchConfig = ({
  line1,
  line2,
  city,
  state,
  zip,
}: {
  line1?: string
  line2?: string
  city?: string
  state?: string
  zip?: string
}) => ({
  where: {
    AND: [
      {
        isVerified: {
          equals: true,
        },
      },
      ...[
        /**
         * Only include each search if they have a truthy value
         */

        ...(line1 ? [line1] : []),
        ...(line2 ? [line2] : []),
        ...(city ? [city] : []),
        ...(state ? [state] : []),
        ...(zip ? [zip] : []),
      ].map((value) => ({
        full: {
          contains: value,
          mode: 'insensitive',
        },
      })),

      /**
       * Only include each search if they have a truthy value
       */

      ...(line1
        ? [
            {
              line1: {
                contains: line1,
                mode: 'insensitive',
              },
            },
          ]
        : []),
      ...(line2
        ? [
            {
              line2: {
                contains: line2,
                mode: 'insensitive',
              },
            },
          ]
        : []),
      ...(city
        ? [
            {
              city: {
                contains: city,
                mode: 'insensitive',
              },
            },
          ]
        : []),
      ...(state
        ? [
            {
              state: {
                contains: state,
                mode: 'insensitive',
              },
            },
          ]
        : []),
      ...(zip
        ? [
            {
              zip: {
                contains: zip,
                mode: 'insensitive',
              },
            },
          ]
        : []),
    ],
  },
  take: MAX_RESULTS,
  orderBy: [
    {
      line1: 'desc',
    },
  ],
})

export const states = [
  'AL',
  'AK',
  'AS',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'DC',
  'FM',
  'FL',
  'GA',
  'GU',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MH',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'MP',
  'OH',
  'OK',
  'OR',
  'PW',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VI',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
]
