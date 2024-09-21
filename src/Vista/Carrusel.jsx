function Carrusel() {
    return ( 
        <>
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
        </>
     )
}

export default Carrusel;