import React, { useState } from "react"
import ReactDOM from "react-dom"
import Carousel from "react-simply-carousel"
import { Card } from "./utilities/Card"

import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io"

export function CarouselComponent() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [hover, setHover] = useState(false)
  const [hoverLeft, setHoverLeft] = useState(false)

  return (
    <div>
      <Carousel
        containerProps={{
          style: {
            position: "relative",
          },
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
            position: "absolute",
            top: "50%",
            right: "1.25%",
            transform: "translateY(-50%)",
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
            fontSize: "5rem",
            border: "none",
            backgroundColor: "transparent",
            borderRadius: "50%",
            color: "#D5A021",
            opacity: `${hover ? ".7" : "1"}`,
          },
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
            position: "absolute",
            top: "50%",
            left: "0%",
            transform: "translateY(-50%)",
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
            fontSize: "5rem",
            border: "none",
            backgroundColor: "transparent",
            borderRadius: "50%",
            color: "#D5A021",
            opacity: `${hoverLeft ? ".7" : "1"}`,
          },
        }}
        dotsNav={{
          show: true,

          containerProps: {
            style: {
              position: "absolute",
              bottom: "0",
              borderRadius: "3rem",
              overflow: "hidden",
              background: "#d4d4d8",
              display: "flex",
              alignItems: "center",
              paddingInline: "1rem",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            },
          },
          itemBtnProps: {
            style: {
              height: 16,
              width: 32,
              border: 0,
              padding: "1rem",
            },
          },
          activeItemBtnProps: {
            style: {
              height: "16px",
              width: "46px",
              border: 0,
              background: "#D5A021",
              borderRadius: "1rem",
            },
          },
        }}
        itemsToShow={3}
        itemsToScroll={1}
        speed={500}
      >
        <Card buttonText="Ordernar" bgImage="bg-churrasco" />
        <Card buttonText="Ordernar" bgImage="bg-caviar1" />
        <Card buttonText="Ordernar" bgImage="bg-merluza" />
        <Card buttonText="Ordernar" bgImage="bg-caviar2" />
        <Card buttonText="Ordernar" bgImage="bg-sandwich" />
        <Card buttonText="Ordernar" bgImage="bg-pizza" />
        <Card buttonText="Ordernar" bgImage="bg-sandwich" />
        <Card buttonText="Ordernar" bgImage="bg-postre1" />
        <Card buttonText="Ordernar" bgImage="bg-caviar1" />
      </Carousel>
    </div>
  )
}
