import type { Address } from '@bedbug/types'

export const testAddress: Address = {
  full: '123 Main St, Anytown, CA 12345',
  line1: '123 Main St',
  city: 'Anytown',
  state: 'CA',
  zip: '12345',
  countryCode: 'US',
  latitude: 37.7749295,
  longitude: -122.4194155,

  isVerified: true,
}
