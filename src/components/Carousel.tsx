import React, { useState } from 'react'
import Carousel from 'react-simply-carousel'
import { CarouselCard } from './utilities/CarouselCard'

import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle
} from 'react-icons/io'

export function CarouselComponent () {
  const [activeSlide, setActiveSlide] = useState(0)
  const [hover, setHover] = useState(false)
  const [hoverLeft, setHoverLeft] = useState(false)

  return (
    <div>
      <Carousel
        containerProps={{
          style: {
            position: 'relative'
          }
        }}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: (
            <IoIosArrowDroprightCircle
              onMouseEnter={() => {
                setHover(!hover)
              }}
              onMouseLeave={() => {
                setHover(!hover)
              }}
            />
          ),
          style: {
            position: 'absolute',
            width: 100,
            height: 100,
            display: 'grid',
            placeContent: 'center',
            transform: 'translate(200%, 35%)',
            zIndex: '10',
            alignSelf: 'end',
            fontSize: '4rem',
            border: 'none',
            backgroundColor: 'transparent',
            borderRadius: '50%',
            color: '#D5A021',
            opacity: `${hover ? '.7' : '1'}`
          }
        }}
        backwardBtnProps={{
          children: (
            <IoIosArrowDropleftCircle
              onMouseEnter={() => {
                setHoverLeft(!hoverLeft)
              }}
              onMouseLeave={() => {
                setHoverLeft(!hoverLeft)
              }}
            />
          ),

          style: {
            // display: 'none',
            position: 'absolute',
            zIndex: '10',
            transform: 'translate(-200%, 35%)',
            width: 100,
            height: 100,
            display: 'grid',
            placeContent: 'center',
            alignSelf: 'end',
            fontSize: '4rem',
            border: 'none',
            backgroundColor: 'transparent',
            borderRadius: '50%',
            color: '#D5A021',
            // color: 'red',
            opacity: `${hoverLeft ? '.7' : '1'}`
          }
        }}
        dotsNav={{
          show: true,

          containerProps: {
            style: {
              position: 'absolute',
              bottom: '0',
              borderRadius: '3rem',
              overflow: 'hidden',
              background: '#d4d4d8',
              display: 'flex',
              alignItems: 'center',
              paddingInline: '.5rem',
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
            }
          },
          itemBtnProps: {
            style: {
              height: 16,
              width: 32,
              border: 0,
              padding: '1rem'
            }
          },
          activeItemBtnProps: {
            style: {
              height: '16px',
              width: '32px',
              border: 0,
              background: '#D5A021',
              borderRadius: '1rem'
            }
          }
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            maxWidth: 1300
          },
          {
            itemsToShow: 1,
            maxWidth: 1000
          },
          {
            itemsToShow: 1,
            maxWidth: 500,
            backwardBtnProps: false,
            forwardBtnProps: false
          }
        ]}
        itemsToShow={3}
        itemsToScroll={1}
        speed={500}
      >
        <CarouselCard buttonText="Ordernar" bgImage="bg-churrasco" />
        <CarouselCard buttonText="Ordernar" bgImage="bg-caviar1" />
        <CarouselCard buttonText="Ordernar" bgImage="bg-merluza" />
        <CarouselCard buttonText="Ordernar" bgImage="bg-caviar2" />
        <CarouselCard buttonText="Ordernar" bgImage="bg-sandwich" />
        <CarouselCard buttonText="Ordernar" bgImage="bg-pizza" />
        <CarouselCard buttonText="Ordernar" bgImage="bg-sandwich" />
        <CarouselCard buttonText="Ordernar" bgImage="bg-postre1" />
        <CarouselCard buttonText="Ordernar" bgImage="bg-caviar1" />
      </Carousel>
    </div>
  )
}
