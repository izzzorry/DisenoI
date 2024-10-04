

import React from 'react';
import Carrusel from './Terminos';

function Hero() {
  return (
    <>
      
      <div className="container">
  {/* Título y botón */}
  <div className="container-title">
    <p className="title">8 DE CADA 10 ALUMNOS RECOMIENDAN LA EXPERIENCIA BIOEXPERT</p>
    <a href="#" className="download-button">Descargar APP RV</a>
    <div className="icon-container">
      <i className="bi bi-headset-vr"></i>
    </div>
  </div>

  {/* Sección BioExpert */}
  <div className="bioexpert-container">
    <div className="bioexpert-info">
      <img src="/src/assets/LogoSinFondo.png" alt="Icono Monitor" />
      <h2>BioExpert</h2>
      <p>Es un sistema interactivo que contempla módulos que permiten al usuario explorar y aprender...</p>
      <button className="ver-mas">
        <span>Ver más</span>
        <div className="icono-circulo">
        <i class="fa-solid fa-square-arrow-up-right"></i>
        </div>
        </button>
    </div>
    <div className="iconos-inferiores">
      <i className="fa fa-heartbeat"></i>
      <i className="fa fa-user-md"></i>
      <i className="fa fa-medkit"></i>
      <i className="fa fa-stethoscope"></i>
      <i className="fa fa-plus-square"></i>
    </div>
  </div>

  {/* Sección Ingeniero Biomedico UAO */}
  <div className="card">
    <div className="card-header">
      <h3>Ingeniero Biomedico UAO</h3>
      <img src="./src/assets/ingenieria-biomedica.jpg" alt="Ingeniero Biomedico UAO" />
    </div>
    <div className="card-body">
      <p>Conoce la disponibilidad de los laboratorios</p>
      
      <button className="ver-mas">
        <span>Ver más</span>
        <div className="icono-circulo">
        <i class="fa-solid fa-square-arrow-up-right"></i>
        </div>
        </button>
    </div>
  </div>

  {/* Slider */}
  <div className="slider">
  <div className="slider-frame">
            <ul>
                <li><img src="/src/assets/Desfibrilador01.jpg" alt="Carrusel Desfibrilador 1" /></li>
                <li><img src="/src/assets/Desfibrilador02.jpg" alt="Carrusel Desfibrilador 2" /></li>
                <li><img src="/src/assets/Desfibrilador0.jpg" alt="Carrusel Desfibrilador 3" /></li>
                <li><img src="/src/assets/Desfibrilador03.jpg" alt="Carrusel Desfibrilador 4" /></li>
            </ul>
        </div>
        <div className="texto-slider">
        <h2>Monitor Desfibrilador</h2>
        <p>Un desfibrilador-monitor bifásico profesional, responde a los requisitos de los profesionales médicos de los hospitales y las clínicas de todo el mundo.</p>
        <button className="ver-mas">
        <span>Ver más</span>
        <div className="icono-circulo">
        <i class="fa-solid fa-square-arrow-up-right"></i>
        </div>
        </button>
        </div>
  </div>
</div>
<div className="modulos">
  <div className="modulos-titulo">
    <h1>Módulos</h1>
  </div>

  <div className="modulos-grid">
    <div className="modulo">
      <h2>Desfibrilación Manual</h2>
      <img src="/src/assets/BENEHEART02.jpg" alt="Desfibrilación Manual" />
      <button className="ver-mas">
        <span>Ver más</span>
        <div className="icono-circulo">
          <i className="fa-solid fa-square-arrow-up-right"></i>
        </div>
      </button>
    </div>

    <div className="modulo">
      <h2>Monitorización</h2>
      <img src="/src/assets/BENEHEART03.png" alt="Monitorización" />
      <button className="ver-mas">
        <span>Ver más</span>
        <div className="icono-circulo">
          <i className="fa-solid fa-square-arrow-up-right"></i>
        </div>
      </button>
    </div>

    <div className="modulo">
      <h2>DEA</h2>
      <img src="/src/assets/BENEHEART04.jpg" alt="DEA" />
      <button className="ver-mas">
        <span>Ver más</span>
        <div className="icono-circulo">
          <i className="fa-solid fa-square-arrow-up-right"></i>
        </div>
      </button>
    </div>

    <div className="modulo">
      <h2>Marcapasos</h2>
      <img src="/src/assets/BENEHEART01.jpg" alt="Marcapasos" />
      <button className="ver-mas">
        <span>Ver más</span>
        <div className="icono-circulo">
          <i className="fa-solid fa-square-arrow-up-right"></i>
        </div>
      </button>
    </div>
  </div>
</div>


    </>
  );
}

export default Hero;

