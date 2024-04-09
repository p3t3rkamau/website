import type { Page } from '../payload-types'

export const staticHome: Page = {
  id: '',
  title: 'Home',
  slug: 'home',
  createdAt: '',
  updatedAt: '',
  meta: {
    title: 'Berleen Safaris',
    description: '404 page.',
  },
  hero: {
    type: 'lowImpact',
    links: null,
    richText: [
      {
        children: [
          {
            text: 'Oh deer! It seems weve hit a snag...',
          },
        ],
        type: 'h1',
      },
      {
        children: [
          {
            text: 'Welcome to your website! ',
          },
          {
            text: 'Looks like our website is on a safari of its own and got lost in the wilderness',
            bold: true,
          },
          {
            text: 'Our team of tech-savvy explorers is working fur-ociously to get things back on track!',
          },
          {
            text: 'In the meantime, why not take a virtual hike through our social media jungle? Follow us for some wild updates and adorable animal antics!',
            bold: true,
          },
          {
            text: 'Remember, even the wildest adventures have a few unexpected twists and turns. We appreciate your patience as we navigate through this jungle of technical difficulties!',
          },
        ],
      },
    ],
    media: '',
  },
  layout: [
    {
      richText: [
        {
          children: [
            {
              text: '404',
            },
          ],
          type: 'h4',
        },
        {
          children: [
            {
              text: 'Connection to the server failed',
            },
            {
              type: 'link',
              linkType: 'custom',
              url: '/home',
              children: [
                {
                  text: 'Back To Homepage',
                },
              ],
            },
            {
              text: 'And click Refresh page".',
            },
          ],
        },
      ],
      links: [
        {
          link: {
            type: 'custom',
            url: '/home',
            label: 'Go to Homepage',
            appearance: 'primary',
            reference: null,
          },
        },
      ],
      blockName: 'CTA',
      blockType: 'cta',
    },
  ],
  Categories: [],
}
