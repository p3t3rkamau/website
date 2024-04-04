'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { Category } from '../../../payload/payload-types'
import CategoryCard from './CategoryCard'

import classes from './index.module.scss'

// Fisher-Yates shuffle algorithm
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const Categories = ({ categories }: { categories: Category[] }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      // Check the window width and update the isSmallScreen state
      setIsSmallScreen(window.innerWidth <= 767)
    }

    // Initial check on component mount
    handleResize()

    // Attach resize event listener
    window.addEventListener('resize', handleResize)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  if (!categories) {
    // Handle the case where categories is null or undefined
    console.error("Categories is null or undefined. Please make sure it's properly initialized.")
    // You can either return early, throw an error, or handle this case based on your requirements
    return // or throw new Error("Categories is null or undefined");
  }

  // Shuffle the categories array
  const shuffledCategories = shuffleArray([...categories])
  // console.log(shuffledCategories)

  // Adjust the number of displayed categories based on screen size
  const numberOfCategories = isSmallScreen ? 6 : 12

  // Take the first `numberOfCategories` elements
  const randomCategories = shuffledCategories.slice(0, numberOfCategories)

  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>Shop by Categories</h3>
        <Link href="/products">Show All</Link>
      </div>

      <div className={classes.list}>
        {randomCategories.map((category: Category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}

export default Categories
