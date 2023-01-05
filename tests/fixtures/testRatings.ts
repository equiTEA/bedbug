import { testBusiness } from './testDBA'
import { testAddress } from './testAddress'
import { testLandlord1 } from './testLandlord'
import { testPropertyManagementCompany } from './testPropertyManagementCompany'

import type { Rating } from '@bedbug/types'

export const testRatings: Rating[] = [
  {
    sentiment: 5,
    body: [{ type: 'paragraph', children: [{ text: 'Good' }] }],
    rentPrice: 1000,
    tenancyStartDate: new Date('2020-01-01'),
    tenancyEndDate: new Date('2020-12-31'),
  },
  {
    sentiment: 4,
    body: [{ type: 'paragraph', children: [{ text: 'Fine' }] }],
    rentPrice: 1000,
    tenancyStartDate: new Date('2020-01-01'),
    tenancyEndDate: new Date('2020-12-31'),
  },
  {
    sentiment: 3,
    body: [{ type: 'paragraph', children: [{ text: 'Meh' }] }],
    rentPrice: 1000,
    tenancyStartDate: new Date('2020-01-01'),
    tenancyEndDate: new Date('2020-12-31'),
  },
  {
    sentiment: 2,
    body: [{ type: 'paragraph', children: [{ text: 'Sucked' }] }],
    rentPrice: 1000,
    tenancyStartDate: new Date('2020-01-01'),
    tenancyEndDate: new Date('2020-12-31'),
  },
  {
    sentiment: 1,
    body: [{ type: 'paragraph', children: [{ text: 'Really sucked' }] }],
    rentPrice: 1000,
    tenancyStartDate: new Date('2020-01-01'),
    tenancyEndDate: new Date('2020-12-31'),
  },
]
