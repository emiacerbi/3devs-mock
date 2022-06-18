import React, { } from 'react'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import { MainSection } from './components/MainSection'
import { SumateSection } from './components/sumate/SumateSection'

function App () {
  return (
    <>
      <Header />
      <Hero />
      <MainSection />
      <SumateSection />
      <MainSection />
      <Footer />
    </>
  )
}

export default App
