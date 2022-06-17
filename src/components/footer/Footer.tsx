import React, { FormEventHandler, useState } from 'react'

import { BsTwitter, BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { IoMdSend } from 'react-icons/io'

export const Footer = () => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`El valor de tu input es: ${inputValue}`)
  }

  return (
    <footer className='text-[#F8F6F1] bg-[#242325]'>
      <div className='container flex flex-col gap-8 items-center py-10 mx-auto'>
        <div className='flex flex-col gap-2 items-center'>
          <h3 className='text-2xl text-[#D5A021]' >¿Qué quieres pedir?</h3>
          <p>Tu mensaje nos llega directamente a nuestro WhatsApp!</p>
        </div>

        <form className='flex relative gap-5 items-center w-2/3' onSubmit={handleSubmit}>
          <input className='p-5 w-[100%] text-xl text-black rounded-3xl outline-none' onChange={handleChange} />
          <IoMdSend className='absolute right-[-10%] text-[4rem] text-blue-400 hover:text-blue-300 duration-200 cursor-pointer' />
        </form>

        <ul className='flex gap-5'>
          <li className='p-2 text-3xl hover:opacity-60 duration-200 cursor-pointer'><BsTwitter /></li>
          <li className='p-2 text-3xl hover:opacity-60 duration-200 cursor-pointer'><BsFacebook /></li>
          <li className='p-2 text-3xl hover:opacity-60 duration-200 cursor-pointer'><BsWhatsapp /></li>
          <li className='p-2 text-3xl hover:opacity-60 duration-200 cursor-pointer'><BsInstagram /></li>
        </ul>
      </div>
    </footer>
  )
}
