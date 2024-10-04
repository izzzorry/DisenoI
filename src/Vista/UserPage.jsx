import React, { useEffect, useState } from 'react';

function Perfil() {
    const [userData, setUserData] = useState({
        nombre: '',
        fechaNacimiento: '',
        email: '',
        sexo: '',
        cargo: '',
    });

    useEffect(() => {
        // Realiza la solicitud a la API para obtener los datos del usuario
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/perfil', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Si usas JWT para autenticar
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    console.error('Error al obtener los datos del usuario');
                }
            } catch (error) {
                console.error('Error al conectar con la API:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="perfil-container">
            <h1>Perfil</h1>
            <div className="perfil-content">
                {/* Información del Usuario */}
                <div className="perfil-info">
                    <div className="perfil-avatar">
                        <img src="/src/assets/profile-avatar.png" alt="Foto de Perfil" />
                    </div>
                    <div className="perfil-detalles">
                        <div className="perfil-item">
                            <strong>Nombre:</strong> {userData.nombre}
                        </div>
                        <div className="perfil-item">
                            <strong>Fecha de Nacimiento:</strong> {userData.fechaNacimiento}
                        </div>
                        <div className="perfil-item">
                            <strong>Correo electrónico:</strong> {userData.email}
                        </div>
                        <div className="perfil-item">
                            <strong>Sexo:</strong> {userData.sexo}
                        </div>
                        <div className="perfil-item">
                            <strong>Cargo:</strong> {userData.cargo}
                        </div>
                    </div>
                    <button className="perfil-btn">Editar</button>
                </div>
                
                {/* Cambio de Contraseña */}
                <div className="cambio-contraseña">
                    <h2>Cambio de Contraseña</h2>
                    <div className="input-group">
                        <label htmlFor="newPassword">Nueva Contraseña:</label>
                        <input type="password" id="newPassword" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                        <input type="password" id="confirmPassword" />
                    </div>
                    <button className="perfil-btn">Listo</button>
                </div>
            </div>
        </div>
    );
}

export default Perfil;
