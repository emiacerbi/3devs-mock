import React, { } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Home } from './components/Home'
import { Menu } from './components/Menu'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='menu' element={<Menu /> } />
      </Routes>

      <Footer />
    </>

  )
}

export default App
