'use client'
import React, { Fragment, useState } from 'react'
import { BsDash, BsPlus } from 'react-icons/bs' // Import plus and minus icons from React Icons

import { Gutter } from '../Gutter'
import { HR } from '../HR'

import classes from './index.module.scss'

const Accordion = ({ accordion }) => {
  const [visibleAccordions, setVisibleAccordions] = useState(5) // Initial number of visible accordions
  const [showAll, setShowAll] = useState(false) // State to control whether to show all accordions or not
  const [accordionActive, setAccordionActive] = useState(null) // State to store active accordion

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  const handleClick = index => {
    setAccordionActive(prevState => (prevState === index ? null : index))
  }

  return (
    <Fragment>
      <Gutter>
        <h3 className={classes.faqHeader}>Frequently Asked Questions</h3>
        <ul className={classes.itineraryList}>
          {accordion
            ?.slice(0, showAll ? accordion.length : visibleAccordions)
            .map((item, index) => (
              <li key={item.id}>
                <button
                  className={`${classes.accordion} ${
                    accordionActive === index ? classes.active : ''
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <span className={classes.icon}>
                    {accordionActive === index ? <BsDash /> : <BsPlus />}{' '}
                    {/* Render plus or minus icon */}
                  </span>
                  {item.Heading}
                </button>
                {accordionActive === index && (
                  <p className={classes.description}>{item.Description}</p>
                )}
              </li>
            ))}
        </ul>
        {accordion?.length > visibleAccordions && !showAll && (
          <button className={classes.expandButton} onClick={toggleShowAll}>
            Show More
          </button>
        )}
        <HR />
      </Gutter>
    </Fragment>
  )
}

export default Accordion
