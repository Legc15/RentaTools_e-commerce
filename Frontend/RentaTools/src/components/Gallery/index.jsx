import { useState } from "react"
import PropTypes from "prop-types"
import "./styles.css"
import Carousel from "../Carousel"
import defaultImage from "../../assets/imagenesGaleria/No-disponible.jpg"

const Galeria = ({ imagenPrincipal, imagenes }) => {
  const [mostrarCarousel, setCarousel] = useState(false)

  return (
    <div className="GaleryContainer">
      <div className="imagen-container">
        <div className="imagenPrincipal">
          <img src={imagenPrincipal ? imagenPrincipal : defaultImage} alt="Imagen principal" />
        </div>

        <div className="cuadriculado">
          {imagenes.map((imagen, index) => {
            while (index < 4) {
              return (
                <div className="cuadriculadoImg">
                  <img src={imagen.url || defaultImage} alt="Imagen" />
                </div>
              )
            }
          })}
        </div>
      </div>

      <div className="verMasContainer">
        <button className="verMasButton" onClick={() => setCarousel(true)}>
          {" "}
          Ver más
        </button>
        {mostrarCarousel ? <Carousel imagenes={imagenes} onClose={() => setCarousel(false)} /> : null}
      </div>
    </div>
  )
}

Galeria.propTypes = {
  imagenes: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
    })
  ),
  imagenPrincipal: PropTypes.shape({
    url: PropTypes.string,
  }),
}

export default Galeria
