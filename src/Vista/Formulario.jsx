function Formulario() {
    return ( 
        <>
        <div className="Registro">
            <h1>Registro</h1>

            <form action="" method="post" encType="multipart/form-data">
            
            <div className="grid-container">
                
                
                <div className="upload-container">
                {/* Subir Foto */}
                <label htmlFor="photo" id="imageLabel"></label>
                <input type="file" id="photo" accept="image/jpg, image/jpeg, image/png" onChange={previewImage} />
                <label htmlFor="photo" className="upload-btn">Subir Foto</label>
                </div>

                {/* Contenedor de campos de Nombre, Correo, Contraseña */}
                <div className="fields-container">
                    <div className="input-group">
                        <label htmlFor="fname">Nombre Completo:</label>
                        <input type="text" id="fname" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input type="email" id="email" placeholder="ejemplo@correo.com" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="fpassword">Contraseña:</label>
                        <input type="password" id="fpassword" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="cpassword">Confirmar Contraseña:</label>
                        <input type="password" id="cpassword" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                        <input type="date" id="fechaNacimiento" name="fechaNacimiento" required />
                    </div>
                
                    </div>
                {/* Cargo y Sexo */}
                <div className="fields-container">
                    <div className="input-group">
                        <label>Cargo:</label>
                        <div className="selection-container">
                            <div className="selection-box" id="docente" onClick={() => selectOption('docente')}>Docente</div>
                            <div className="selection-box" id="estudiante" onClick={() => selectOption('estudiante')}>Estudiante</div>
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Sexo:</label>
                        <div className="selection-container">
                            <div className="selection-box" id="sexoF" onClick={() => selectOption('F')}>F</div>
                            <div className="selection-box" id="sexoM" onClick={() => selectOption('M')}>M</div>
                        </div>
                    </div>
                </div>

                {/* Checkbox de términos y condiciones */}
                <div className="terminos">
                    <input type="checkbox" id="aceptoTerminos" required />
                    <label htmlFor="aceptoTerminos">Al marcar esta casilla, usted reconoce y acepta que ha leído y comprendido los Términos de Servicio y la Política de Privacidad de BioExpert. Asimismo, acepta estar vinculado por estos documentos y consiente el uso de sus datos personales según lo establecido en nuestra Política de Privacidad. Este consentimiento es necesario para utilizar nuestros servicios de BioExpert.
                    </label>
                </div>

                

                {/* Botones de registro */}
                <div className="buttons-container">
                    <button type="submit">Completar Registro</button>
                    <h1>o</h1>
                    <button type="submit">Regístrate con tu cuenta de Google</button>
                </div>
            </div>

            </form>
        </div>
        </>
    );
}

export default Formulario;

/* Función de JavaScript para previsualizar la imagen subida */
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const imageLabel = document.getElementById('imageLabel');
        imageLabel.style.backgroundImage = `url(${reader.result})`;
    }
    reader.readAsDataURL(event.target.files[0]);
}
