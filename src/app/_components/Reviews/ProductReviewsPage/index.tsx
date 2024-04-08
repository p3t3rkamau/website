import React from 'react'

import classes from './index.module.scss' // Assuming you name your CSS module file as ProductReviewsPage.module.scss

function ProductReviewsPage() {
  return (
    <div className={classes.container}>
      <h2>Reviews</h2>
      <hr className={classes.hr} />
      <div className={`${classes['no-reviews']} ${classes['text-center']}`}>
        <p>There are currently no reviews for this product.</p>
        <button className={classes.btn}>Write a Review</button>
      </div>
      <div className={classes.row}>
        {/* Left side with filter and write a review button */}
        <div className={classes['col-sm-4']}>
          <div className={classes['form-group']}>
            <h5>Filter Reviews</h5>
            <ul className={classes['list-group']}>
              <li className={classes['list-group-item']}>
                <a href="#">★☆☆☆☆ (1247)</a>
              </li>
              <li className={classes['list-group-item']}>
                <a href="#">★★☆☆☆ (47)</a>
              </li>
              <li className={classes['list-group-item']}>
                <a href="#">★★★☆☆ (27)</a>
              </li>
              <li className={classes['list-group-item']}>
                <a href="#">★★★★☆ (24)</a>
              </li>
              <li className={classes['list-group-item']}>
                <a href="#">★★★★★ (1)</a>
              </li>
            </ul>
          </div>
          <div className={classes['form-group']}>
            <button className={classes.btn}>Write a Review</button>
          </div>
        </div>
        {/* Right side with sorting and reviews */}
        <div className={classes['col-sm-8']}>
          <form name="form" method="post" action="#">
            <div className={classes.row}>
              <div className={classes['col-sm-6']}>
                <select className={classes['form-control']}>
                  <option value="new">Sort newest to oldest</option>
                  <option value="old">Sort oldest to newest</option>
                  <option value="good">Sort best to worst</option>
                  <option value="bad">Sort worst to best</option>
                </select>
              </div>
              <div className={classes['col-sm-6']}>
                <h5>Showing 1230 - 1235 of 1346</h5>
              </div>
            </div>
          </form>
          <div className={classes.review}>
            <div className={classes.row}>
              <div className={classes['col-sm-3']}>
                <h4>★★★★☆</h4>
              </div>
              <div className={classes['col-sm-9']}>
                <h4>Lorem ipsum dolor sit</h4>
                <h5>Malcolm Reynolds</h5>
                <p>
                  Lorem ipsum dolor sit amet, ut suas temporibus his. Te noster dolorum luptatum
                  pri. Duo erroribus incorrupte at.
                </p>
              </div>
            </div>
          </div>
          {/* Add more reviews here */}
          <div className={classes.pagination}>
            <ul>
              <li>
                <a href="#">Previous</a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              {/* Add more page numbers here */}
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductReviewsPage
