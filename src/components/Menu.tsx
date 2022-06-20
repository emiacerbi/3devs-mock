import { motion } from 'framer-motion'
import React from 'react'
import { Card } from './utilities/Card'

export const Menu = () => {
  return (
    <motion.main
      className='bg-gray-300'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      <div className='container flex flex-col gap-10 py-28 px-10 mx-auto'>
        <div className='flex flex-col items-center mx-auto'>
          <h2 className='font-secondary text-5xl text-center text-[#D94E4E]'>Categorías</h2>
          <p className='text-2xl text-center'>Elige una categoría y mira nuestros platos!</p>
        </div>

        <div className='flex flex-col gap-10 justify-center items-center'>
          <div className='flex gap-10'>
            <div className='flex flex-col gap-5'>
              <Card bgImage='bg-churrasco' />
              <p className='text-2xl text-center text-[#D5A021]'>Carnes vacunas</p>
            </div>

            <div className='flex flex-col gap-5'>
              <Card bgImage='bg-caviar1' />
              <p className='text-2xl text-center text-[#D5A021]'>Pescados</p>
            </div>
            <div className='flex flex-col gap-5'>
              <Card bgImage='bg-caviar2' />
              <p className='text-2xl text-center text-[#D5A021]'>Pastas</p>
            </div>
          </div>

          <div className='flex gap-10'>
            <Card bgImage='bg-churrasco' />
            <Card bgImage='bg-caviar1' />
            <Card bgImage='bg-caviar2' />
          </div>
        </div>
      </div>

    </motion.main>
  )
}
