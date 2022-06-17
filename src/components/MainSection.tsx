import React from 'react'

export const MainSection = () => {
  return (
    <main className='bg-gray-200' >

      <div className='container flex flex-col py-28 mx-auto min-h-[100vh]'>
        <h3 className='font-secondary text-5xl text-center text-[#D5A021]'>Carnes de primera</h3>
        <p className='text-2xl text-center'>Ternera, pescados, y pollos</p>

        <div className='flex flex-1 gap-5 justify-center items-center lg:flex-row '>
          <div className={'relative w-[350px] h-[500px] bg-blue-100 bg-cover bg-churrasco rounded-tr-[10rem] shadow-2xl'}>
            <button className='absolute bottom-5 left-[50%] p-3 w-80 font-secondary text-2xl italic bg-white rounded-md shadow-2xl duration-300 hover:scale-105 translate-x-[-50%] cursor-pointer'>
              Ver más
            </button>
          </div>

          <div className={'w-[350px] h-[500px] bg-blue-100 bg-center bg-cover bg-caviar1 rounded-tr-[10rem] shadow-2xl'}>

          </div>
          <div className={'w-[350px] h-[500px] bg-blue-100 bg-right bg-cover bg-caviar2 rounded-tr-[10rem] shadow-2xl'}>
          </div>
        </div>
      </div>

    </main>
  )
}
