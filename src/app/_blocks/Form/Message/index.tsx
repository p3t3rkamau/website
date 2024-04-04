import React from 'react'
import { MessageField } from 'payload-plugin-form-builder/dist/types'

import RichText from '../../../_components/RichText'
import { Width } from '../Width'

import classes from './index.module.scss'

export const Message: React.FC<MessageField> = ({ message }) => {
  return (
    <Width width="100">
      <RichText content={message} className={classes.message} />
    </Width>
  )
}
