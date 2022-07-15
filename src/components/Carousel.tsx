import React, { useState } from "react"
import ReactDOM from "react-dom"
import Carousel from "react-simply-carousel"
import { Card } from "./utilities/Card"

export function CarouselComponent() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <div>
      <Carousel
        containerProps={{
          style: {
            // width: "1500px",
            // justifyContent: "space-between",
            userSelect: "text",
            columnGap: "5rem",
            background: "red",
            margin: "0 atuo",
          },
        }}
        // itemsListProps={{
        //   style: {
        //     justifyContent: "space-between",
        //     columnGap: "2rem",
        //     width: "100%",
        //     margin: "0 auto",
        //     width: "100%",
        //   },
        // }}

        centerMode={true}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
            border: "none",
            backgroundColor: "red",
          },
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
            border: "none",
            backgroundColor: "red",
          },
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              //   borderRadius: "50%",
              border: 0,
            },
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              //   borderRadius: "50%",
              border: 0,
              background: "red",
            },
          },
        }}
        // responsiveProps={[
        //   {
        //     itemsToShow: 2,
        //     itemsToScroll: 2,
        //     minWidth: 768,
        //   },
        // ]}
        itemsToShow={2}
        itemsToScroll={2}
        speed={400}
      >
        <Card buttonText="Ordernar" bgImage="bg-churrasco" />
        <Card buttonText="Ordernar" bgImage="bg-caviar1" />
        <Card buttonText="Ordernar" bgImage="bg-churrasco" />
        <Card buttonText="Ordernar" bgImage="bg-caviar2" />
        <Card buttonText="Ordernar" bgImage="bg-churrasco" />
        <Card buttonText="Ordernar" bgImage="bg-caviar2" />
        <Card buttonText="Ordernar" bgImage="bg-churrasco" />
        <Card buttonText="Ordernar" bgImage="bg-caviar2" />
        <Card buttonText="Ordernar" bgImage="bg-caviar2" />
      </Carousel>
    </div>
  )
}
