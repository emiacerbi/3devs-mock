import React from 'react'
import { Button } from '../utilities/Button'

export const Hero = () => {
  return (
    <section className='flex min-h-screen'>
      {/* Bg Image */}
      <div className='absolute -z-10 w-full h-full bg-[center_bottom] bg-no-repeat bg-cover bg-hero-pattern '></div>
      {/* Shadow */}
      <div className='absolute -z-10 w-full h-full bg-black opacity-30 '></div>

      <div className='container flex justify-start items-center px-10 mx-auto'>
        <div className='flex flex-col gap-5 tracking-wide '>
          <h1 className='max-w-[22ch] text-5xl text-[#F8F6F1] shadow-red-500 drop-shadow-md'>LA MEJOR CALIDAD ESTA A SU DISPOSICIÓN</h1>
          <Button>ELEGI Y PEDINOS</Button>
        </div>
      </div>
    </section>
  )
}
