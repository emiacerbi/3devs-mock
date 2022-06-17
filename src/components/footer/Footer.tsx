import React from 'react'

export const Footer = () => {
  return (
    <footer className='text-[#F8F6F1] bg-[#242325]'>
      <div className='container flex flex-col items-center mx-auto'>
        <h3>¿Qué quieres pedir?</h3>
        <p>Tu mensaje nos llega directamente a nuestro WhatsApp!</p>

        <input />

        <ul className='flex'>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Whatsapp</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  )
}
