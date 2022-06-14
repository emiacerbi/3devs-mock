import React, { } from 'react'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import { MainSection } from './components/MainSection'

function App () {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Hero />
      <MainSection />
    </div>
  )
}

export default App
