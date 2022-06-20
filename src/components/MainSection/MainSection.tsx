import React from 'react'
import { Card } from '../utilities/Card'

export const MainSection = () => {
  return (
    <main className='bg-gray-100' >

      <div className='container flex flex-col gap-10 py-28 mx-auto min-h-screen'>
        <div>
          <h2 className='font-secondary text-5xl text-center text-[#D5A021]'>Carnes de primera</h2>
          <p className='text-2xl text-center'>Ternera, pescados, y pollos</p>
        </div>

        <div className='flex flex-1 gap-8 justify-center items-center lg:flex-row '>
          <Card bgImage='bg-churrasco' />
          <Card bgImage='bg-caviar1' />
          <Card bgImage='bg-caviar2' />
        </div>
      </div>

    </main>
  )
}
