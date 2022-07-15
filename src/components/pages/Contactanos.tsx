import React from "react"
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs"
import { IoMdSend } from "react-icons/io"
import { motion } from "framer-motion"

export const Contactanos = () => {
  return (
    <motion.section
      className="flex min-h-screen bg-[#f3f4f6]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex flex-col justify-center items-center mx-auto">
        <div className="flex flex-col gap-3 max-w-prose text-center">
          <h2 className="text-4xl text-gray-700">CONTACTANOS</h2>
          <p className="text-xl text-gray-700">
            Puedes contactarnos llamando por teléfono o através de nuestro
            servicio de mensajería de WhatsApp. Si te gustaría estar más al
            tanto de nosotros, podes seguirnos en nuestras principales redes
            sociales.
          </p>
        </div>

        <ul className="flex gap-5 mt-8">
          <li className="p-2 text-3xl hover:opacity-60 duration-200 cursor-pointer">
            <BsTwitter />
          </li>
          <li className="p-2 text-3xl hover:opacity-60 duration-200 cursor-pointer">
            <BsFacebook />
          </li>
          <li className="p-2 text-3xl hover:opacity-60 duration-200 cursor-pointer">
            <BsInstagram />
          </li>
        </ul>

        <div className="flex gap-2 items-center p-2 mt-8 text-3xl">
          <BsWhatsapp />
          <p className="text-lg text-gray-700">011-1234-5678</p>
        </div>
        <div className="flex gap-2 items-center p-2 text-3xl">
          <BsWhatsapp />
          <p className="text-lg text-gray-700">4-543-2211</p>
        </div>

        <div className="flex flex-col gap-3 mt-8 max-w-prose text-center">
          <h2 className="text-4xl text-gray-700">PEDIDO?</h2>
          <p className="text-xl text-gray-700">
            Si ya sabes que te gustaría pedir, fijate en el número del producto
            y contactate por WhatsApp y te lo llevamos rápido.
          </p>
        </div>

        <form className="flex relative gap-5 items-center mt-8 w-2/3">
          <input
            className="p-5 mx-auto w-[75%] text-xl border border-gray-400 text-gray-700 rounded-3xl outline-none"
            value="Hola, me gustaría el postre n°7"
          />
          <IoMdSend className="absolute right-[2%] text-[4rem] text-blue-400 hover:text-blue-300 duration-200 cursor-pointer" />
        </form>
      </div>
    </motion.section>
  )
}
