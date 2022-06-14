import React from 'react'

// import hero from '../../../public/hero.jpeg'

export const Hero = () => {
  return (
    <section className='h-screen flex items-center justify-end relative'>
      {/* Bg Image */}
      <div className='bg-hero-pattern bg-[center_bottom] bg-no-repeat absolute bg-cover w-full h-full -z-10 '></div>

      {/* Shadow */}
      <div className='absolute bg-black w-full h-full opacity-30 -z-10 '></div>

      <div className='p-5 -translate-x-[15rem] flex flex-col gap-5 tracking-wide'>
        <h1 className='text-4xl text-white max-w-[22ch]'>LA MEJOR CALIDAD ESTA A SU DISPOSICIÓN</h1>
        <button className='p-5 text-3xl rounded-lg bg-white'>ELEGI Y PEDINOS</button>
      </div>
    </section>
  )
}
