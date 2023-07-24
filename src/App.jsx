import { useState } from 'react'
import Header from './components/Header'
import PopupComponent from './components/PopupComponent'
import Hero from './components/Hero'
import Image from './components/Image'
import AboutUs from './components/AboutUs'
import FAQ from './components/FAQ'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <PopupComponent />
      <Hero />
      <Image src='/ball-thin.jpg'
             location='flex-center' />
      <AboutUs />
      <FAQ />
       </>
  )
}

export default App
