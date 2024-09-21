import { useState } from 'react'
import './App.css'
import Encabezado from './Vista/Header'
import Carrusel from './Vista/Carrusel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Encabezado>
      </Encabezado>
      <Carrusel></Carrusel>
        
    </>
  )
}

export default App
