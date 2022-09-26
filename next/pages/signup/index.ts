import { redirectWhenUserIsAuthenticated } from '../../ssr/redirectWhenUserIsAuthenticated'
import SignUp from './SignUp'

export default SignUp
export const getServerSideProps = redirectWhenUserIsAuthenticated
