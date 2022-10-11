import {
  forwardGeocode,
  typedefs as forwardGeocodeTypeDefs,
} from './forwardGeocode'

export const typedefs = /* GraphQL */ `
  ${forwardGeocodeTypeDefs}
`

const Query = {
  forwardGeocode,
}

export default Query
