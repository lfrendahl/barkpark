import { useState } from 'react'
import dogLogo from '/dog.svg'
import Header from './components/Header'
import PopupComponent from './components/PopupComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <PopupComponent />
       </>
  )
}

export default App
