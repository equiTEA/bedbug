import { redirectWhenUserIsAuthenticated } from '../../ssr/redirectWhenUserIsAuthenticated'
export const getServerSideProps = redirectWhenUserIsAuthenticated
