import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'
import Card from './components/Card'

import 'react-multi-carousel/lib/styles.css'

function PromotionCarousel() {
  return (
    <>
      <h3 className="mb-4 font-bold text-white text-heading-3 font-label pt-14">
        Promo Liburan
      </h3>

      <Carousel
        className='py-5'
        containerClass='carousel-container'
        draggable
        swipeable
        customRightArrow={<button
          type='button'
          aria-label='Go to next slide'
          className='absolute right-0 z-50 opacity-50 hover:opacity-100'
        >
          <Image
            height='75'
            width='75'
            alt='Rigt Arrow Button'
            src='/images/icons/right-arrow-rounded.svg' />
        </button>}
        customLeftArrow={<button
          type='button'
          aria-label='Go to previous slide'
          className='absolute left-0 z-50 opacity-50 hover:opacity-100'
        >
          <Image
            height='75'
            width='75'
            alt='Left Arrow Button'
            src='/images/icons/left-arrow-rounded.svg' />
        </button>}
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
        <Card
          location='Borobudur'
          region='Magelang'
          price={7700000}
          percentage={10}
          description='Untuk 2 Orang, tiket pesawat, Tempat penginapan 5 malam, tour guide'
          finalPrice={6930000}
          timeAbroad='27-11-2020 10:00' />
        <Card
          location='Borobudur'
          region='Magelang'
          price={7700000}
          percentage={10}
          description='Untuk 2 Orang, tiket pesawat, Tempat penginapan 5 malam, tour guide'
          finalPrice={6930000}
          timeAbroad='27-11-2020 10:00' />
        <Card
          location='Borobudur'
          region='Magelang'
          price={7700000}
          percentage={10}
          description='Untuk 2 Orang, tiket pesawat, Tempat penginapan 5 malam, tour guide'
          finalPrice={6930000}
          timeAbroad='27-11-2020 10:00' />
      </Carousel>
    </>
  )
}

export default PromotionCarousel