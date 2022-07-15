import React from "react"

interface Props {
  bgImage: string
  buttonText: string
}

export const Card = ({ bgImage, buttonText }: Props) => {
  return (
    <div
      className={`w-[400px] border-[20px] border-gray-100 h-[700px] bg-gray-100  `}
    >
      <div
        className={`rounded-tr-[10rem] relative h-[90%] shadow-tincho grid place-content-center  w-full bg-cover ${bgImage} bg-center`}
      >
        <button className="absolute bottom-5 left-[50%] p-3 w-80 font-secondary text-2xl bg-white shadow-2xl duration-300 hover:scale-[103%] translate-x-[-50%] cursor-pointer">
          {buttonText}
        </button>
      </div>
    </div>
  )
}
