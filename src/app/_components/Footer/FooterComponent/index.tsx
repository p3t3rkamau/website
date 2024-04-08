'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Category, Footer, Media } from '../../../../payload/payload-types'
// import { ThemeSelector } from '../../../_providers/Theme/ThemeSelector'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import { Button } from '../../Button'
import { Gutter } from '../../Gutter'

// import { HR } from '../../HR'
// import { CMSLink } from '../../Link'
import classes from './index.module.scss'

type FooterComponentProps = {
  footer: Footer
  categories: Category[] // Specify that categories is an array of Category objects
}
// const FooterComponent = ({ footer, categories }: FooterComponentProps) => {
//   const pathname = usePathname()
//   const navItems = footer?.navItems || []
//   const category = footer?.Categories || []
//   console.log('cate', category)

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()
  const navItems = footer?.navItems || []
  const categories = footer?.Categories || []
  // console.log(categories)

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <ul className={classes.inclusions}>
        {inclusions.map(inclusion => (
          <li key={inclusion.title}>
            <Image
              src={inclusion.icon}
              alt={inclusion.title}
              width={36}
              height={36}
              className={classes.icon}
            />

            <h5 className={classes.title}>{inclusion.title}</h5>
            <p>{inclusion.description}</p>
          </li>
        ))}
      </ul>

      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            {/* <div className={classes.footerLogo}>
              <Link href="/">
                <Image src="/beerleen.jpeg" alt="logo" width={100} height={150} />
              </Link>
            </div> */}
            <div className={classes.footerWrapper}>
              <div>
                <h3>Our Website</h3>
                <hr />
                <ul>
                  <li>
                    <span className={classes.footerLabel}></span>All Holiday Ideas
                  </li>
                  <li>
                    <span className={classes.footerLabel}></span>About Us
                  </li>
                  <li>
                    <span className={classes.footerLabel}></span>Blog
                  </li>
                  <li>
                    <span className={classes.footerLabel}></span>Contact Us
                  </li>
                </ul>
                <div className={classes.Socials}>
                  <p>Follow US On</p>
                  <div className={classes.socialLinks}>
                    {navItems.map(item => {
                      const icon = item?.link?.icon as Media

                      return (
                        <Button
                          key={item.link.label}
                          el="link"
                          href={item.link.url}
                          newTab={true}
                          className={classes.socialLinkItem}
                        >
                          <Image
                            src={icon?.imagekit?.url}
                            alt={item.link.label}
                            width={24}
                            height={24}
                            className={classes.socialIcon}
                          />
                        </Button>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className={classes.Footercategories}>
                <h3>Tours</h3>
                <hr />
                {categories.map((category: Category, index: number) => (
                  <li className={classes.footerlist} key={index}>
                    <span>{category.title}</span>
                  </li>
                ))}
              </div>
              {/* <ThemeSelector /> */}
              <div className={classes.InformationSection}>
                <h3>Experiences</h3>
                <hr />
                <ul>
                  <li>Big 5 Safari</li>
                  <li>Beach</li>
                  <li>Honey Moon</li>
                  <li>Self Drive</li>
                </ul>
              </div>
              {/* <div className={classes.paymentMethod}>
                <p>Payment Method</p>
                <Image src={'/mpesa-image.png'} alt={'mpesa image'} width={50} height={20} />
              </div> */}
            </div>
            <div className={classes.copyright}>
              <p>{footer?.copyright}</p>

              {/* {navItems.map(({ link }, i) => {
                return <CMSLink key={i} {...link} />
              })} */}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
