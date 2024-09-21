
function Encabezado() {
    return (
        <>
        <header>
            
            <div className="Logo">
            <img src="/src/assets/LogoSinFondo.png" alt="Logo BioExpert" />
            <h1>BioExpert</h1>    
            </div>

            <div className="Botones">
                <button className="login">Iniciar Sesión</button>
                <button className="suscripcion">Registrarse</button>
            </div>

        </header>

        <nav className='NavAbajo'>
            <div className="BotonOption">
                <input type="checkbox" id="btn-switch"></input>
                <label for="btn-switch" className="lbl-switsch"></label>
            </div>
        
        </nav>
        </>

    )
}
export default Encabezado; 