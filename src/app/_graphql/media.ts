export const MEDIA_FIELDS = `
  mimeType
  filename
  width
  height
  alt
  imagekit {
    fileId
    thumbnailUrl
    url
  }
`

export const MEDIA = `media {
  ${MEDIA_FIELDS}
}`
