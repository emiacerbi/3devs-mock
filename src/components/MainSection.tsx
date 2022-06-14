import React from 'react'

export const MainSection = () => {
  return (
    <main className='' >
      <div className='container flex flex-col py-10 min-h-screen'>
        <h3 className='font-secondary text-3xl text-center text-[#D5A021]'>Carnes de primera</h3>
        <p className='text-center'>Ternera, pescados, y pollos</p>

        <div className='flex flex-col flex-1 gap-5 justify-center items-center lg:flex-row '>
          <div className={'overflow-hidden relative w-[350px] h-[500px] bg-blue-100 bg-cover bg-churrasco rounded-tr-[10rem] shadow-2xl'}>
            <button className='absolute bottom-5 left-[50%] p-5 w-80 bg-white rounded-md shadow-2xl duration-300 hover:scale-105 translate-x-[-50%] cursor-pointer'>
              Tincho Torlica
            </button>
          </div>

          <div className={'overflow-hidden w-[350px] h-[500px] bg-blue-100 bg-center bg-cover bg-caviar1 rounded-tr-[10rem] shadow-2xl'}>

          </div>
          <div className={'overflow-hidden w-[350px] h-[500px] bg-blue-100 bg-right bg-cover bg-caviar2 rounded-tr-[10rem] shadow-2xl'}>
          </div>
        </div>
      </div>

    </main>
  )
}
