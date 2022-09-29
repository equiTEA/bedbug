import { graphql } from '../../../graphql'
import { addressDetail } from '../../../graphql/addressDetail'

import type { NextPageContext } from 'next'

export const getServerSideProps = async (ctx: NextPageContext) => {
  const results = await graphql({
    query: addressDetail,
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
  })

  return {
    props: {
      address: results.address,
      ratingsCount: results.ratingsCount,
    },
  }
}
