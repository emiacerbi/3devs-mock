import React from 'react'
import { Hero } from './hero/Hero'
import { MainSection } from './MainSection/MainSection'
import { SumateSection } from './sumate/SumateSection'

export const Home = () => {
  return (
    <>
      <Hero />
      <MainSection />
      <SumateSection />
      <MainSection />
    </>
  )
}
