'use client'
import React from 'react'
import NextImage, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { Category, Media } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'

type CategoryCardProps = {
  category: Category
}

const getImageUrl = (media: Media): string | undefined => {
  console.log('media', media)
  if (!media || typeof media === 'string') {
    return undefined
  }

  const imagekitUrl = media?.imagekit?.url
  console.log('categoryimage', imagekitUrl)

  return imagekitUrl || undefined
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const media = category.media as Media
  const { setCategoryFilters } = useFilter()

  const imageUrl = getImageUrl(media) || ''

  return (
    <Link href="/products" onClick={() => setCategoryFilters([category.id])}>
      <div className={`${classes.card} ${classes.cardWithBackground}`}>
        <NextImage alt={'category image'} src={imageUrl} width={500} height={500} />
        {/* <p className={classes.title}>{category.title}</p> */}
      </div>
    </Link>
  )
}

export default CategoryCard
