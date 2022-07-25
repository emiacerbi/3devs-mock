import React from 'react'
interface Props {
  bgImage: string
  buttonText: string
}

export function Card ({ bgImage, buttonText }: Props) {
  return (
    <div
      className={'w-[350px] h-[500px] bg-gray-100 border-[20px] border-gray-100 sm:w-[400px] sm:h-[600px]  '}
    >
      <div
        className={`rounded-tr-[10rem] relative h-full shadow-tincho grid place-content-center  w-full bg-cover ${bgImage} bg-center`}
      >
        <button className="absolute bottom-5 left-[50%] p-3 w-80 font-secondary text-2xl bg-white shadow-2xl duration-300 hover:scale-[103%] translate-x-[-50%] cursor-pointer">
          {buttonText}
        </button>
      </div>
    </div>
  )
}
