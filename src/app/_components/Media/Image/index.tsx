'use client'
import React from 'react'
import NextImage, { StaticImageData } from 'next/image'

import cssVariables from '../../../cssVariables'
import { Props as MediaProps } from '../types'

import classes from './index.module.scss'

const { breakpoints } = cssVariables
export const Image: React.FC<MediaProps> = props => {
  const {
    imgClassName,
    onClick,
    onLoad: onLoadFromProps,
    resource,
    priority,
    fill,
    alt: altFromProps,
  } = props

  const [isLoading, setIsLoading] = React.useState(true)

  let width: number | undefined
  let height: number | undefined
  let alt = altFromProps
  let src: string | undefined

  if (typeof resource !== 'string') {
    // Check if resource is of type MediaType
    if (resource?.imagekit && resource.imagekit.url) {
      // Use imagekit.url here
      src = resource.imagekit.url
      width = resource.width || undefined
      height = resource.height || undefined
    } else {
      // Set a default image URL if imagekit.url is not available
      src = '/beerleen.jpeg'
      width = 600
      height = 600
      alt = 'Beerleen Logo'
    }
  }
  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes = Object.entries(breakpoints)
    .map(([, value]) => `(max-width: ${value}px) ${value}px`)
    .join(', ')

  return (
    <NextImage
      className={[isLoading && classes.placeholder, classes.image, imgClassName]
        .filter(Boolean)
        .join(' ')}
      src={src || '/Easy-logo.svg'}
      alt={alt || 'product-image'}
      onClick={onClick}
      onLoad={() => {
        setIsLoading(false)
        if (typeof onLoadFromProps === 'function') {
          onLoadFromProps()
        }
      }}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      sizes={sizes}
      priority={priority}
    />
  )
}
