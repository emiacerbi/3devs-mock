import React, { } from 'react'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import { MainSection } from './components/MainSection'
import { SumateSection } from './components/sumate/SumateSection'

function App () {
  // const [count, setCount] = useState(0)

  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <MainSection />
      <SumateSection />
      <MainSection />
      <Footer />
    </div>
  )
}

export default App
