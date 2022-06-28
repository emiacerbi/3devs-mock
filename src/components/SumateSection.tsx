import React from 'react'
import { Button } from './utilities/Button'

export const SumateSection = () => {
  return (
    <section className='[background-position-x:-500px] bg-no-repeat bg-cover bg-sumateBg' >
      {/* Shadow */}
      <div className='absolute z-0 w-full h-full bg-black opacity-30 '></div>

      <div className='container flex relative flex-col px-10 mx-auto min-h-screen'>
        <div className='flex flex-col flex-1 gap-5 justify-center max-w-[600px]'>
          <h1 className='max-w-[22ch] text-5xl text-white'>MENU EJECTUVO TODOS LOS ALMUERZOS</h1>
          <Button>SUMATE!</Button>
        </div>

      </div>
    </section>
  )
}
