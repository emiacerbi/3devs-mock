import React from "react"
import { motion } from "framer-motion"
import { Hero } from "../Hero"
import { MainSection } from "../MainSection"
import { SumateSection } from "../SumateSection"
import { Footer } from "../Footer"

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <MainSection />
      <SumateSection />
      <MainSection />
      <Footer />
    </motion.div>
  )
}
