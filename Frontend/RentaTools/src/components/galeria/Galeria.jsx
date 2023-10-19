import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import  "./styles.css"


const Galeria = ({ imagenes }) => {
    const [mostrarImagenes, setMostrarImagenes] = useState(false);
    const cantidadInicial = 4;


    useEffect(() => {
        // ACA IRIA LA LÓGICA DE CARGA DE IMAGENES DEL BACK.
    }, [mostrarImagenes]);


    // RUTAS HARCODEADAS POR AHORA,  TRAER DESDE EL BACK.
    const imagenPrincipal = imagenes[0];
    /* const imagen1 = imagenes[1];
    const imagen2 = imagenes[2];
    const imagen3 = imagenes[3];
    const imagen4 = imagenes[4];*/

    return (
        <div className="GaleryContainer">
        <div>
            <div className="Galeria">
                {/* IMAGEN PRINCIOAL DE LA MITAD IZQUIERDA */}
                <div className="imagenPrincipal">
                    <div className="">
                        <img
                            src={imagenPrincipal}
                            alt="Imagen principal"
                            className=""
                        />
                    </div>
                </div>


                {/*  MITAD DERECHA DE LA GALERIA EN DESKTOP*/}
                <div className="cuadriculado">
                    
                    {imagenes.slice(0, mostrarImagenes ? undefined : cantidadInicial).map((imagen, index) => (
                        <div 
                            key={index} 
                            className="imageContainer"
                            >
                                <img
                                    src={imagen}
                                    alt={`Imagen ${index + 1}`} 
                                />
                        </div>
                    ))}
                    
                </div>
                

            </div>
        </div>
        <div className="verMasContainer">
                <button
                    className="verMasButton"
                    onClick={() => setMostrarImagenes(true)}
                    >
                    Ver Más
                </button>
            </div> 
        </div>
    );
};

Galeria.propTypes = {
    imagenes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Galeria;

