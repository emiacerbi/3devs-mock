import React from "react"
import { CarouselComponent } from "./Carousel"
import { Card } from "./utilities/Card"

export const MainSection = () => {
  return (
    <main className="bg-gray-100">
      <div className="container flex flex-col gap-10 py-28 mx-auto min-h-screen">
        <div>
          <h2 className="font-secondary text-5xl text-center text-[#D5A021]">
            Carnes de primera
          </h2>
          <p className="text-2xl text-center">Ternera, pescados, y pollos</p>
        </div>

        {/* <div className='flex flex-1 gap-8 justify-center items-center lg:flex-row '>
          <Card buttonText='Ordernar' bgImage='bg-churrasco' />
          <Card buttonText='Ordernar' bgImage='bg-caviar1' />
          <Card buttonText='Ordernar' bgImage='bg-caviar2' />
        </div> */}

        <CarouselComponent />
      </div>
    </main>
  )
}
