import { redirectWhenUserIsUnauthenticated } from '../../../ssr/redirectWhenUserIsUnauthenticated'

export const getServerSideProps = redirectWhenUserIsUnauthenticated
