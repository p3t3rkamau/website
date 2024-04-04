'use client'
import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Post } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'
import { formatDateTime } from '../../_utilities/formatDateTime'

import classes from './index.module.scss'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const {
    id,
    title,
    categories,
    meta: { image: metaImage, description } = {},
    publishedAt,
    populatedAuthors,
    Itinary,
    HighlightImages,
    GoodToKnowExample,
    Days,
    Price,
  } = post

  const [accordionActive, setAccordionActive] = useState<string | null>(null)

  return (
    <Fragment>
      <Gutter className={classes.postHero}>
        <div className={classes.content}>
          <div className={classes.leader}>
            <div className={classes.categories}>
              {categories?.map((category, index) => {
                if (typeof category === 'object' && category !== null) {
                  const { title: categoryTitle } = category

                  const titleToUse = categoryTitle || 'Untitled category'

                  const isLast = index === categories.length - 1

                  return (
                    <Fragment key={index}>
                      {titleToUse}
                      {!isLast && <Fragment>, &nbsp;</Fragment>}
                    </Fragment>
                  )
                }
                return null
              })}
            </div>
          </div>
          <h1 className={classes.title}>{title}</h1>
          <p className={classes.meta}>
            {populatedAuthors && (
              <Fragment>
                {'By '}
                {populatedAuthors.map((author, index) => {
                  const { name } = author

                  const isLast = index === populatedAuthors.length - 1
                  const secondToLast = index === populatedAuthors.length - 2

                  return (
                    <Fragment key={index}>
                      {name}
                      {secondToLast && populatedAuthors.length > 2 && <Fragment>, </Fragment>}
                      {secondToLast && populatedAuthors.length === 2 && <Fragment> </Fragment>}
                      {!isLast && populatedAuthors.length > 1 && <Fragment>and </Fragment>}
                    </Fragment>
                  )
                })}
              </Fragment>
            )}
            {publishedAt && (
              <Fragment>
                {' on '}
                {formatDateTime(publishedAt)}
              </Fragment>
            )}
          </p>
        </div>
        <div className={classes.media}>
          <div className={classes.mediaWrapper}>
            {!metaImage && <div className={classes.placeholder}>No image</div>}
            {metaImage && typeof metaImage !== 'string' && (
              <Media imgClassName={classes.image} resource={metaImage} fill />
            )}
          </div>
        </div>
      </Gutter>
      <Gutter>
        <div className={classes.additionalData}>
          <div className={classes.priceFlex}>
            <div>
              <h4>Price: {Price}</h4>
            </div>
            <div>
              <h4>Days: {Days}</h4>
            </div>
          </div>
          <h4 className={classes.imageHighlight}>Highlight</h4>
          <div className={classes.imageFlex}>
            <ul className="images">
              {HighlightImages.map((image, index) => (
                <li key={index}>
                  <div className={classes.imageWrapper}>
                    <Image
                      src={image.media.imagekit.url}
                      width={200}
                      height={150}
                      alt={image.title}
                    />
                  </div>
                  <div>{image.title}</div>
                </li>
              ))}
            </ul>
          </div>

          <h3 className={classes.imageHighlight}>Itinerary</h3>
          <ul className={classes.itineraryList}>
            {Itinary.map((item, index) => (
              <li key={index}>
                <button
                  className={classes.accordion}
                  onClick={() =>
                    setAccordionActive(
                      accordionActive === `itinerary-${index}` ? null : `itinerary-${index}`,
                    )
                  }
                >
                  {item.Heading}
                </button>
                {accordionActive === `itinerary-${index}` && <p>{item.Description}</p>}
              </li>
            ))}
          </ul>
          <h3 className={classes.imageHighlight}>Good to Know </h3>
          <ul className={classes.itineraryList}>
            {GoodToKnowExample.map((item, index) => (
              <li key={index}>
                <button
                  className={classes.accordion}
                  onClick={() =>
                    setAccordionActive(
                      accordionActive === `goodToKnow-${index}` ? null : `goodToKnow-${index}`,
                    )
                  }
                >
                  {item.Heading}
                </button>
                {accordionActive === `goodToKnow-${index}` && <p>{item.Description}</p>}
              </li>
            ))}
          </ul>
        </div>
      </Gutter>
    </Fragment>
  )
}
