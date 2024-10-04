import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Importar useNavigate y Link

function Encabezado() {
  const navigate = useNavigate(); // Inicializamos useNavigate

  return (
    <>
      <header>
        <div className="Logo">
          {/* Utilizamos Link para redirigir a la página principal */}
          <Link to="/">
            <img src="/src/assets/LogoSinFondo.png" alt="Logo BioExpert" />
            </Link>
            <h1>BioExpert</h1>
          
        </div>

        <div className="Botones">
          {/* Botones que navegan a las rutas correspondientes */}
          <button 
            className="login" 
            onClick={() => navigate('/login')} // Redirige a /login
          >
            Iniciar Sesión
          </button>
          <button 
            className="suscripcion" 
            onClick={() => navigate('/registro')} // Redirige a /registro
          >
            Registrarse
          </button>
        </div>
      </header>

      <nav className="NavAbajo">
        <div className="BotonOption">
          <input type="checkbox" id="btn-switch"></input>
          <label htmlFor="btn-switch" className="lbl-switch">
            <i className="fas fa-sun"></i>
          </label>
        </div>
      </nav>
    </>
  );
}

export default Encabezado;
