import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { Archive } from '../../blocks/ArchiveBlock'
import { CallToAction } from '../../blocks/CallToAction'
import { Content } from '../../blocks/Content'
import { MediaBlock } from '../../blocks/MediaBlock'
import { hero } from '../../fields/hero'
import { slugField } from '../../fields/slug'
import { populateArchiveBlock } from '../../hooks/populateArchiveBlock'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidatePost } from './hooks/revalidatePost'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: doc => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/posts/${doc?.slug}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
  },
  hooks: {
    beforeChange: [populatePublishedAt],
    afterChange: [revalidatePost],
    afterRead: [populateArchiveBlock, populateAuthors],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'Days',
      type: 'text',
      required: true,
    },
    {
      name: 'Price',
      label: 'Price In Usd',
      type: 'number',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [hero],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [CallToAction, Content, MediaBlock, Archive],
            },
          ],
        },
      ],
    },
    {
      name: 'relatedPosts',
      type: 'relationship',
      relationTo: 'posts',
      hasMany: true,
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        }
      },
    },
    slugField(),
    {
      name: 'HighlightImages',
      label: 'Highlight Images',
      labels: {
        singular: 'image',
        plural: 'Images',
      },
      type: 'array',
      minRows: 4,
      maxRows: 6,
      fields: [
        {
          type: 'upload',
          name: 'media',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'Itinary',
      label: 'Itinary',
      labels: {
        singular: 'itinary',
        plural: 'itinaries',
      },
      type: 'array',
      minRows: 2,
      maxRows: 20,
      fields: [
        {
          label: ({ data }) => data?.title || 'Untitled',
          type: 'collapsible', // required
          fields: [
            // required
            {
              name: 'Heading',
              type: 'text',
              required: true,
            },
            {
              name: 'Description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'DescriptionImages',
              label: 'Description Images',
              labels: {
                singular: 'image',
                plural: 'Images',
              },
              type: 'array',
              minRows: 2,
              maxRows: 4,
              fields: [
                {
                  type: 'upload',
                  name: 'media',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'GoodToKnowExample',
      label: 'Good To Know',
      labels: {
        singular: 'goodtoknow',
        plural: 'goodtoknow',
      },
      type: 'array',
      minRows: 2,
      maxRows: 20,
      fields: [
        {
          label: ({ data }) => data?.title || 'Untitled',
          type: 'collapsible', // required
          fields: [
            // required
            {
              name: 'Heading',
              type: 'text',
              required: true,
            },
            {
              name: 'Description',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'authors',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    {
      name: 'populatedAuthors',
      type: 'array',
      admin: {
        readOnly: true,
        disabled: true,
      },
      access: {
        update: () => false,
      },
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
  ],
}
