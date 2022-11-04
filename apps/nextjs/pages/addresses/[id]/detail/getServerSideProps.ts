import { graphql, addressDetail } from '@bedbug/networking'

import type { NextPageContext } from 'next'
import { getCurrentUser } from '../../../../ssr/getCurrentUser'

export const getServerSideProps = async (ctx: NextPageContext) => {
  const [user, results] = await Promise.all([
    getCurrentUser(ctx),
    graphql({
      query: addressDetail,
      headers: { cookie: ctx.req?.headers.cookie },
      variables: {
        where: {
          id: ctx.query.id,
        },
        ratingsCountWhere: {
          address: {
            id: {
              equals: ctx.query.id,
            },
          },
        },
      },
    }),
  ])

  if (!results?.address) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user,
      address: results.address,
      ratingsCount: results.ratingsCount,
    },
  }
}
