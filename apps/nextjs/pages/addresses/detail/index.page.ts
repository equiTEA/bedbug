import AddressDetail from './AddressDetail'

export { getServerSideProps } from './getServerSideProps'
import { getLayout } from './getLayout'

AddressDetail.getLayout = getLayout

export default AddressDetail
