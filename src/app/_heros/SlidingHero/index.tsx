'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import classes from './index.module.scss'

const SlidingHero = ({ slidingImages }) => {
  // State to track the index of the currently displayed image
  const [currentSlide, setCurrentSlide] = useState(0)

  // Function to move to the next slide
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slidingImages?.length - 1 ? 0 : currentSlide + 1)
  }

  useEffect(() => {
    // Automatically move to the next slide after 20 seconds
    const interval = setInterval(nextSlide, 20000)

    // Cleanup function to clear the interval when component unmounts or changes
    return () => clearInterval(interval)
  }, [currentSlide, nextSlide]) // Re-run effect when currentSlide changes

  return (
    <div className={classes.SliderContainer}>
      {slidingImages?.map((slider, index) => (
        <div
          className={`${classes.card} ${index === currentSlide ? classes.active : ''}`}
          key={slider.title}
        >
          {slider.media && slider.media.imagekit && (
            <Image
              src={slider.media.imagekit.url}
              width={1200}
              height={800}
              alt={slider.title}
              className={classes.image}
            />
          )}
          {/* <h5>{slider.title}</h5> */}
        </div>
      ))}
      <p>Sliding Hero</p>
    </div>
  )
}

export default SlidingHero
