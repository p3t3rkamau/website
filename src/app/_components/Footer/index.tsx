import React from 'react'
import Link from 'next/link'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter } from '../../_api/fetchGlobals'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import FooterComponent from './FooterComponent'

import classes from './index.module.scss'
export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.log(error)
  }

  const navItems = footer?.navItems || []
  const categories = footer?.Categories || []
  // console.log('footer Categories', categories)

  return (
    <>
      {/* <ThemeSelector className={classes.nav} /> */}

      <FooterComponent footer={footer} />
    </>
  )
}
