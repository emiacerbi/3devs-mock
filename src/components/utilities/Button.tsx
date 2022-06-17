import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Button = ({ children }: Props) => {
  console.log(children)
  return (
    <button className='p-5 text-3xl text-[#F8F6F1] hover:text-black bg-[#202020] hover:bg-white rounded-lg opacity-90 duration-200'>
      {children}
    </button>
  )
}
