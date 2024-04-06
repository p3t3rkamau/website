import React from 'react'
import Image from 'next/image'

import { Gutter } from '../Gutter'

import styles from './index.module.scss' // Import CSS module

const Testimonials = () => {
  return (
    <div className={styles.container}>
      {/* Use CSS module class */}
      <Testimonial
        name="Daniel Clifford"
        status="Verified"
        image="/assets/active-man-with-party-horn-avatar.gif"
        title="Unforgettable Adventures: My Wildlife Odyssey with Berleen Safaris Expeditions"
        quote="Embarking on a wildlife expedition with Berleen Expeditions was a life-changing 
        experience! From the moment I set foot in the wilderness, I was captivated by the beauty of 
        nature and the thrill of encountering majestic creatures in their natural habitat. Berleen's expert
         guides led us on an unforgettable journey, where every sighting was a moment to cherish. It's not just 
         a safari; it's an immersion into the wonders of the wild. I can't wait to embark on my next adventure 
         with Berleen Safaris!"
      />
      <Testimonial
        name="Emily Johnson"
        status="Verified"
        image="/assets/active-woman-showing-v-sign-avatar.gif"
        title="Wilderness Bliss: Finding Serenity with Berleen Safaris"
        quote="Berleen Safaris provided me with an escape into the heart of the wilderness, where tranquility meets adventure.
         Surrounded by breathtaking landscapes and the sounds of nature, I found solace in the simplicity of life in the wild. 
         Each moment spent with Berleen's knowledgeable guides was a lesson in conservation and appreciation for our natural world.
          It's more than just a safari; it's a journey of self-discovery and connection to the earth. Thank you, Berleen Safaris,
           for the unforgettable memories!"
      />
      <Testimonial
        name="Jonathan Walters"
        status="Verified"
        image="/assets/active-man-showing-thumb-up-avatar.png"
        title="Nature's Symphony: Harmonizing with Berleen Wildlife Tours"
        quote="Berleen Safaris Tours orchestrated a symphony of sights and sounds that resonated deep within my soul. From 
        the rhythmic footsteps of wildlife to the melodic calls of birds, every moment spent in nature was a serenade to 
        the senses. With Berleen's passionate guides leading the way, I felt a profound connection to the environment and a
         renewed sense of wonder for the world around me. It's not just a tour; it's a soul-stirring experience that leaves
          a lasting impression."
      />
      <Testimonial
        name="Jeanette Harmon"
        status="Verified"
        image="/assets/active-woman-avatar-2.png"
        title="An overall wonderful and rewarding experience"
        quote="Venturing into the wild with Berleen Safaris Nature Expeditions was an exhilarating journey into the unknown.
         Amidst towering trees and vast plains, I felt a sense of freedom and adventure like never before. With Berleen's safaris 
         expert naturalists as our guides, every step of the expedition was filled with excitement and discovery. From tracking 
         elusive animals to witnessing breathtaking sunsets, each moment was a testament to the beauty and resilience of the natural 
         world. Thank you, Berleen Safaris Nature Expeditions, for an adventure of a lifetime!"
      />
      <Testimonial
        name="Patrick Abrams"
        status="Verified"
        image="/assets/cubes-male-avatar.png"
        title="Safari Dreams: A Voyage with Berleen Safaris Ventures"
        quote="Embarking on a safari adventure with Berleen Safaris Ventures fulfilled a lifelong dream of experiencing 
        the magic of the African wilderness. From the golden savannahs of the Serengeti to the lush forests of the Amazon, 
        every destination was a canvas of vibrant colors and untamed beauty. With Berleen's knowledgeable guides by my side,
         I gained a deeper understanding of the delicate balance of nature and the importance of conservation.
          It's more than just a journey; it's a testament to the power of exploration and the wonders of the natural world"
      />
    </div>
  )
}

const Testimonial = ({ name, status, image, title, quote }) => {
  return (
    <div className={styles.card}>
      {' '}
      {/* Use CSS module class */}
      <div className={styles.header}>
        {' '}
        {/* Use CSS module class */}
        <Image width={100} height={100} src={image} alt={name} className={styles.avatar} />
        {/* Use CSS module class */}
        <div className={styles.details}>
          {' '}
          {/* Use CSS module class */}
          <div className={styles.name}>{name}</div> {/* Use CSS module class */}
          <div className={styles.status}>{status}</div> {/* Use CSS module class */}
        </div>
      </div>
      <div className={styles.title}>{title}</div> {/* Use CSS module class */}
      <div className={styles.quote}>{quote}</div> {/* Use CSS module class */}
    </div>
  )
}

export default Testimonials
