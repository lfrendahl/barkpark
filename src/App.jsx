import { useState } from 'react'
import dogLogo from '/dog.svg'
import Header from './components/Header'
import Calendar from './components/Calendar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Calendar />
       </>
  )
}

export default App
