import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Contactanos } from './pages/Contactanos'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'

export const Rutas = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home /> } />
        <Route path='menu' element={<Menu /> } />
        <Route path='contacto' element={<Contactanos /> } />
      </Routes>
    </AnimatePresence>
  )
}
