import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'
import Card from './components/Card'

function PromotionCarousel() {
  return (
    <Carousel
      className='py-5'
      containerClass='carousel-container'
      draggable
      swipeable
      customRightArrow={
        <button
          type='button'
          aria-label='Go to next slide'
          className='absolute right-0 z-50 opacity-50 hover:opacity-100'
        >
          <Image
            height='75'
            width='75'
            alt='Rigt Arrow Button'
            src='/images/icons/right-arrow-rounded.svg' />
        </button>
      }
      customLeftArrow={
        <button
          type='button'
          aria-label='Go to previous slide'
          className='absolute left-0 z-50 opacity-50 hover:opacity-100'
        >
          <Image
            height='75'
            width='75'
            alt='Left Arrow Button'
            src='/images/icons/left-arrow-rounded.svg' />
        </button>
      }
      partialVisbile
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 720,
          },
          items: 2,
          partialVisibilityGutter: 100
        }
      }}
    >
      <Card />
      <Card />
      <Card />
    </Carousel>
  )
}

export default PromotionCarousel