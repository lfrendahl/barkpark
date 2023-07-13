import { useState } from 'react'
import Header from './components/Header'
import PopupComponent from './components/PopupComponent'
import Image from './components/Image'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <PopupComponent />
      <Image src='/ball-thin.jpg'/>
       </>
  )
}

export default App
