import { graphql, addressDetail } from '@bedbug/networking'
import { redirectWhenUserIsUnauthenticated } from '../../../../ssr/redirectWhenUserIsUnauthenticated'

import type { NextPageContext } from 'next'
import type { Rating } from '@bedbug/types'

export const getServerSideProps = async (ctx: NextPageContext) => {
  const authResponse = await redirectWhenUserIsUnauthenticated(ctx)
  if (authResponse.redirect) return authResponse

  const addressResults = await graphql({
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
  })

  if (!addressResults.address)
    return {
      notFound: true,
    }

  return {
    props: {
      user: authResponse.props.user,
      address: addressResults.address,
      ratingsCount: addressResults.ratingsCount,

      /** Users can only have one rating per rental address; if one is found, put them into edit mode */
      editingRating:
        addressResults.address.ratings.find(
          ({ createdBy }: Rating) =>
            createdBy?.id === authResponse.props.user.id,
        ) ?? null,
    },
  }
}
