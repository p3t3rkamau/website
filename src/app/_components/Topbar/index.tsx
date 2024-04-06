import React from 'react'
import { IoIosMail } from 'react-icons/io'
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
            <IoIosMail />
          </span>
          <span>tours@berleensafaris.com</span>
        </div>
        <div className={classes.phoneIcon}>
          <span>
            <MdPhoneCallback />
          </span>
          <span className={classes.callback}>Request a Callback</span>
        </div>
      </div>
    </div>
  )
}

export default TopBar
