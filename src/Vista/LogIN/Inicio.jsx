import React from 'react';
import {  Link } from 'react-router-dom'; 
import './Inicio.css';
function Login() {
    return ( 
        <>
        <div className="Login">
            <h1>Inicio de Sesión</h1>

            <form action="" method="post" encType="multipart/form-data">
                {/* Contenedor para centrar los inputs */}
                <div className="input-container">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" placeholder="ejemplo@correo.com" required />
               
                    <label htmlFor="Ipassword">Contraseña:</label>
                    <input type="password" id="Ipassword" required />
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>

                {/* Checkbox */}
                <div className="checkbox-container">
                    <input type="checkbox" id="Recuerdame" />
                    <label htmlFor="Recuerdame">Recordarme</label>
                </div>

                {/* Botones de registro */}
                <div className="buttons-container">
                    <button type="submit">Iniciar</button>

                    <Link to="/registro">¿No tienes cuenta aún?</Link>
                    <a href="#"></a>
                    <h1>o</h1>
                    <button type="submit">
                      <img src="/src/assets/Google.png" alt="Google" />
                      Iniciar con tu cuenta de Google
                    </button>
                </div>
            </form>
        </div>
        </>
    );
}

export default Login;

