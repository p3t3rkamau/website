'use client'
import React, { Fragment, useState } from 'react'
import { BsDash, BsPlus } from 'react-icons/bs'
import Image from 'next/image'

import { Post } from '../../../payload/payload-types'
import { Button } from '../../_components/Button'
import { Gutter } from '../../_components/Gutter'
import { HR } from '../../_components/HR'
import { Media } from '../../_components/Media'
import { formatDateTime } from '../../_utilities/formatDateTime'

import classes from './index.module.scss'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const {
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

  const handleAccordionClick = (index: number, type: string) => {
    setAccordionActive(prevState => (prevState === `${type}-${index}` ? null : `${type}-${index}`))
  }

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
              <h5>
                <span>From USD </span>
                {Price}
                <span> based on people sharing</span>
              </h5>
            </div>
            <div>
              <h6>
                {Days}
                <span> Days</span>
              </h6>
            </div>
            <Button />
          </div>
          <h4 className={classes.imageHighlight}>Highlights</h4>
          <HR />
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
          <HR />

          <h3 className={classes.imageHighlight}>Itinerary</h3>
          <ul className={classes.itineraryList}>
            {Itinary.map((item, index) => (
              <li key={index}>
                <button
                  className={`${classes.accordion} ${
                    accordionActive === `itinerary-${index}` ? classes.active : ''
                  }`}
                  onClick={() => handleAccordionClick(index, 'itinerary')}
                >
                  <span className={classes.icon}>
                    {accordionActive === `itinerary-${index}` ? <BsDash /> : <BsPlus />}{' '}
                  </span>
                  {item.Heading}
                </button>
                {accordionActive === `itinerary-${index}` && (
                  <Fragment>
                    <p>{item.Description}</p>
                    {item.DescriptionImages && item.DescriptionImages.length > 0 && (
                      <div className={classes.HighlightImg}>
                        {item.DescriptionImages.map((descImage, descIndex) => (
                          <Image
                            key={descIndex}
                            src={descImage.media.imagekit.url}
                            width={400}
                            height={350}
                            className={classes.img}
                            alt={`Image ${descIndex + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </Fragment>
                )}
              </li>
            ))}
          </ul>

          <HR />

          <div>
            <h3 className={classes.imageHighlight}>Good to Know</h3>
            <ul className={classes.itineraryList}>
              {GoodToKnowExample.map((item, index) => (
                <li key={index}>
                  <button
                    className={`${classes.accordion} ${
                      accordionActive === `goodToKnow-${index}` ? classes.active : ''
                    }`}
                    onClick={() => handleAccordionClick(index, 'goodToKnow')}
                  >
                    <span className={classes.icon}>
                      {accordionActive === `goodToKnow-${index}` ? <BsDash /> : <BsPlus />}{' '}
                    </span>
                    {item.Heading}
                  </button>
                  {accordionActive === `goodToKnow-${index}` && <p>{item.Description}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Gutter>
    </Fragment>
  )
}
