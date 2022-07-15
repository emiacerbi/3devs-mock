import React from "react"
import { CarouselComponent } from "./Carousel"

export const MainSection = () => {
  return (
    <main className="bg-gray-100">
      <div className="container flex flex-col gap-10 py-28 mx-auto min-h-screen">
        <div>
          <h2 className="font-secondary text-5xl text-center text-[#D5A021]">
            Carnes de primera
          </h2>
          <p className="text-2xl text-center text-gray-500">
            Ternera, pescados, y pollos
          </p>
        </div>

        <CarouselComponent />
      </div>
    </main>
  )
}
