const REVIEW = `
  id
  rating
  name
  message
  createdAt
`

export const REVIEWS_BY_DOC = `
  query Reviews($doc: ID) {
    Reviews(where: { doc: { equals: $doc } }) {
      docs {
        ${REVIEW}
      }
    }
  }
`

export const REVIEWS_BY_USER = `
  query Reviews($user: ID) {
    Reviews(where: { user: { equals: $user } }) {
      docs {
        ${REVIEW}
      }
    }
  }
`
