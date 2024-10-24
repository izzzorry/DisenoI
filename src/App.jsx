import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Encabezado from './Vista/Header/Header';
import Formulario from './Vista/Formulario/Formulario';
import Login from './Vista/LogIN/Inicio';
import Hero from './Vista/Index/Hero';
import Terminos from './Vista/Terminos/Terminos';
import Perfil from './Vista/UserPage/UserPage';
import './App.css'; // Importación de los estilos globales
import BeneHeart from './Vista/Beneheart/Beneheart';
import Monitor3D from './Vista/Modelo/Model';

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
        <Route path="/Beneheart" element={<BeneHeart />} />
      </Routes>
    </Router>
  );
}

export default App;
