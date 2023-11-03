import { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import  Carousel  from "../Carousel";
import defaultImage from "../../assets/imagenesGaleria/No-disponible.jpg";

const Galeria = ({ imagenPrincipal, imagenes }) => {
    const [mostrarCarousel, setCarousel] = useState(false)

    console.log(imagenPrincipal, "imagenPrincipal")
    console.log(imagenes, "imagenes")

    return (
        <div>
            <div className="GaleryContainer">
                <div className="imagenPrincipal">
                    <img src={imagenPrincipal ? imagenPrincipal : defaultImage} alt="Imagen principal" />
                </div>

                <div className="cuadriculado">
                    <div className="cuadriculadoImg">
                        <img src={imagenes[0] ? imagenes[0].url : defaultImage} alt="Imagen 1" />
                    </div>

                    <div className="cuadriculadoImg">
                        <img src={imagenes[1] ? imagenes[1].url : defaultImage} alt="Imagen 2" />
                    </div>

                    <div className="cuadriculadoImg">
                        <img src={imagenes[2] ? imagenes[2].url : defaultImage} alt="Imagen 3" />
                    </div>

                    <div className="cuadriculadoImg">
                        <img src={imagenes[3] ? imagenes[3].url : defaultImage} alt="Imagen 4" />
                    </div>
                </div>
            </div>

            <div className="verMasContainer">
                <button
                    className="verMasButton"
                    onClick={() => setCarousel(true)}> Ver más
                </button>
                {mostrarCarousel ?
                    <Carousel 
                        imagenes={imagenes} 
                        onClose={()=> setCarousel(false)}/> : null}
            </div>

        </div>
    );
};

Galeria.propTypes = {
    imagenes: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
    })),
    imagenPrincipal: PropTypes.shape({
        url: PropTypes.string,
    }),
};

export default Galeria;