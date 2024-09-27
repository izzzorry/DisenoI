import { useState } from 'react'
import './App.css'
import Encabezado from './Vista/Header'
import Carrusel from './Vista/Carrusel'
import Formulario from './Vista/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Encabezado>
      </Encabezado>
      <Carrusel></Carrusel>
      <Formulario></Formulario>
        
    </>
  )
}

export default App
