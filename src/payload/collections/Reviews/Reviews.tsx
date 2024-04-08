import type { CollectionConfig } from 'payload/types'

const Reviews: CollectionConfig = {
  slug: 'Reviews',
  admin: {
    useAsTitle: 'Reviews',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: false,
    },
    {
      name: 'message',
      label: 'Review',
      type: 'textarea',
      required: false,
    },
    {
      name: 'rating',
      label: 'Rating',
      type: 'radio',
      required: true,
      options: [
        {
          value: '0',
          label: '0.0',
        },
        {
          value: '0.5',
          label: '0.5',
        },
        {
          value: '1',
          label: '1.0',
        },
        {
          value: '1.5',
          label: '1.5',
        },
        {
          value: '2',
          label: '2.0',
        },
        {
          value: '2.5',
          label: '2.5',
        },
        {
          value: '3',
          label: '3.0',
        },
        {
          value: '3.5',
          label: '3.5',
        },
        {
          value: '4',
          label: '4.0',
        },
        {
          value: '4.5',
          label: '4.5',
        },
        {
          value: '5',
          label: '5.0',
        },
      ],
    },
  ],
}

export default Reviews
