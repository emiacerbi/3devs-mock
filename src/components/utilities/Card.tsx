import React from 'react'

interface Props {
  bgImage: string
  buttonText: string
}

export const Card = ({ bgImage, buttonText }: Props) => {
  return (
    <div className={`relative w-[350px] h-[500px] bg-blue-100 bg-center bg-cover ${bgImage} rounded-tr-[10rem] shadow-2xl`}>
      <button className='absolute bottom-5 left-[50%] p-3 w-80 font-secondary text-2xl bg-white shadow-2xl duration-300 hover:scale-[103%] translate-x-[-50%] cursor-pointer'>
        {buttonText}
      </button>
    </div>
  )
}
