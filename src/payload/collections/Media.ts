import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
  access: {
    read: (): boolean => true,
  },
}
