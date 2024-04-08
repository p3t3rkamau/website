'use client'
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import AddReview from './AddReview'

import classes from './index.module.scss' // Import your CSS file for animations

function Reviews() {
  const [showAddReview, setShowAddReview] = useState(false)

  const toggleAddReview = () => {
    setShowAddReview(!showAddReview)
  }

  return (
    <div className={classes.AddReviewWrapper}>
      <button className={classes.addreviewBtn} onClick={toggleAddReview}>
        {showAddReview ? 'Close Review' : 'Add Review'}
      </button>
      <CSSTransition in={showAddReview} timeout={300} classNames="add-review" unmountOnExit>
        <div className="add-review-overlay">
          <div className="add-review-modal">
            <AddReview />
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Reviews
