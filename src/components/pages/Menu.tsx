import { motion } from 'framer-motion'
import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { Card } from '../utilities/Card'

export const Menu = () => {
  return (
    <motion.main
      className="bg-[#f3f4f6]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex flex-col gap-10 py-24 px-10 mx-auto">
        <header className="flex flex-col items-center mx-auto">
          <h2 className="font-secondary text-5xl font-bold text-center text-[#871E1C] uppercase">
            Categorías
          </h2>
          <p className="text-2xl text-center text-gray-500">
            Elige una categoría y mira nuestros platos!
          </p>
        </header>

        <section className="flex flex-col gap-10 justify-center items-center">
          <div className="flex gap-10">
            <div className="flex flex-col gap-5">
              <Card bgImage="bg-churrasco2" buttonText="Ordenar" />
              <p className="text-3xl text-center text-[#a58332]">
                Carnes vacunas
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <Card bgImage="bg-merluza" buttonText="Ordenar" />
              <p className="text-3xl text-center text-[#a58332]">Pescados</p>
            </div>
            <div className="flex flex-col gap-5">
              <Card bgImage="bg-caviar1" buttonText="Ordenar" />
              <p className="text-3xl text-center text-[#a58332]">Pastas</p>
            </div>
          </div>

          <div className="flex gap-10">
            <div className="flex flex-col gap-5">
              <Card bgImage="bg-pizza" buttonText="Ordenar" />
              <p className="text-3xl text-center text-[#a58332]">Pizzas</p>
            </div>
            <div className="flex flex-col gap-5">
              <Card bgImage="bg-sandwich" buttonText="Ordenar" />
              <p className="text-3xl text-center text-[#a58332]">Sandwiches</p>
            </div>
            <div className="flex flex-col gap-5">
              <Card bgImage="bg-postre1" buttonText="Ordenar" />
              <p className="text-3xl text-center text-[#a58332]">Postres</p>
            </div>
          </div>
        </section>
      </div>

      <footer className="py-10 text-white bg-neutral-900">
        <div className="container mx-auto">
          <ul className="flex gap-10 justify-center">
            <li className="p-2 text-3xl hover:opacity-60 duration-200 cursor-pointer">
              <BsTwitter />
            </li>
            <li className="p-2 text-3xl hover:opacity-60 duration-200 cursor-pointer">
              <BsFacebook />
            </li>
            <li className="p-2 text-3xl hover:opacity-60 duration-200 cursor-pointer">
              <BsWhatsapp />
            </li>
            <li className="p-2 text-3xl hover:opacity-60 duration-200 cursor-pointer">
              <BsInstagram />
            </li>
          </ul>
        </div>
      </footer>
    </motion.main>
  )
}
