import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Encabezado from './Vista/Header';
import Formulario from './Vista/Formulario';
import Login from './Vista/Inicio';
import Hero from './Vista/Hero';
import Terminos from './Vista/Terminos';
import Perfil from './Vista/UserPage';
import './App.css'; // Importación de los estilos globales

function App() {
  return (
    <Router>
      {/* Encabezado global */}
      <Encabezado />
      
      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/registro" element={<Formulario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/informacion" element={<Terminos />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;
