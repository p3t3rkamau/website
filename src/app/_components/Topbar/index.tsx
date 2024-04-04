import React from 'react'
import { IoCall } from 'react-icons/io5'
import { MdPhoneCallback } from 'react-icons/md'

import classes from './index.module.scss'
const TopBar = () => {
  return (
    <div className={classes.TopBarContainer}>
      <div className={classes.CurrencyWrapper}>
        <span>Currency: USD</span>
      </div>
      <div className={classes.callFLex}>
        <div>
          <span>
            <IoCall />
          </span>
          <span>+254 751 142 410</span>
        </div>
        <div>
          <span className={classes.phoneIcon}>
            <MdPhoneCallback />
          </span>
          <span>Request a Callback</span>
        </div>
      </div>
    </div>
  )
}

export default TopBar
