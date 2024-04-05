'use client'
import React, { Fragment, useState } from 'react'
import { BsDash, BsPlus } from 'react-icons/bs' // Import plus and minus icons from React Icons

import { Gutter } from '../Gutter'

// import { HR } from '../HR'
import classes from './index.module.scss'

const Accordion = ({ accordion }) => {
  const [accordionActive, setAccordionActive] = useState<string | null>(null)

  const handleClick = (index: number) => {
    setAccordionActive(prevState =>
      // eslint-disable-next-line prettier/prettier
      prevState === `itinerary-${index}` ? null : `itinerary-${index}`,)
  }
  return (
    <Fragment>
      <Gutter>
        <ul className={classes.itineraryList}>
          {accordion.map((item, index) => (
            <li key={item.id}>
              <button
                className={`${classes.accordion} ${
                  accordionActive === `itinerary-${index}` ? classes.active : ''
                }`}
                onClick={() => handleClick(index)}
              >
                <span className={classes.icon}>
                  {accordionActive === `itinerary-${index}` ? <BsDash /> : <BsPlus />}{' '}
                  {/* Render plus or minus icon */}
                </span>
                {item.Heading}
              </button>
              {accordionActive === `itinerary-${index}` && (
                <p className={classes.description}>{item.Description}</p>
              )}
            </li>
          ))}
        </ul>
      </Gutter>
    </Fragment>
  )
}

export default Accordion
