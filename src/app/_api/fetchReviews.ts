import type { Post, Review, User } from '../../payload/payload-types'
import { REVIEWS_BY_DOC, REVIEWS_BY_USER } from '../_graphql/reviews'
import { GRAPHQL_API_URL } from './shared'

export const fetchReviews = async (args: {
  user?: User['id']
  doc?: Post['id']
}): Promise<Review[]> => {
  const { user, doc } = args || {}

  const reviews: Review[] = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({
      query: user ? REVIEWS_BY_USER : REVIEWS_BY_DOC,
      variables: {
        user,
        doc,
      },
    }),
  })
    .then(res => res.json())
    .then(res => {
      if (res.errors) throw new Error(res.errors[0]?.message ?? 'Error fetching reviews')
      return res.data?.Reviews?.docs
    })

  return reviews
}
