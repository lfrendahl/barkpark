import { useState } from 'react'
import Header from './components/Header'
import PopupComponent from './components/PopupComponent'
import Hero from './components/Hero'
import Image from './components/Image'
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
       </>
  )
}

export default App
