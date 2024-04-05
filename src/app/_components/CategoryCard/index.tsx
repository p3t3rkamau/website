import React from 'react'
import Image from 'next/image'

import { Gutter } from '../Gutter'

import classes from './index.module.scss'

const CardComponent = ({ categories }) => {
  return (
    <Gutter>
      <h3 className={classes.categoryHeader}>Popular Categories</h3>
      <div className={classes.CardComponent}>
        {categories.map(category => (
          <div className={classes.card} key={category.title}>
            {category.media && category.media.imagekit && (
              <Image
                src={category.media.imagekit.url}
                width={200}
                height={200}
                alt={category.title}
                className={classes.image}
              />
            )}
            <h5>{category.title}</h5>
          </div>
        ))}
      </div>
    </Gutter>
  )
}

export default CardComponent