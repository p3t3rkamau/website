import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// import { Gutter } from '../Gutter'
import classes from './index.module.scss'

const CardComponent = ({ categories }) => {
  return (
    <>
      <h3 className={classes.categoryHeader}>Popular Categories</h3>
      <div className={classes.CardComponent}>
        {categories?.map(category => (
          <div className={classes.card} key={category.title}>
            <Link href="/posts" passHref>
              {category.media && category.media.imagekit && (
                <Image
                  src={category.media.imagekit.url}
                  width={200}
                  height={200}
                  alt={category.title}
                  className={classes.image}
                />
              )}
            </Link>
            <h5>{category.title}</h5>
          </div>
        ))}
      </div>
    </>
  )
}

export default CardComponent
