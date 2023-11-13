import PropTypes from "prop-types"
import Galeria from "../Gallery"
import "./styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt, faArrowsSpin, faMusic } from "@fortawesome/free-solid-svg-icons"

const FEATURES_ICON = [faBolt, faArrowsSpin, faMusic]

const ProductDetails = ({ productInfo }) => {
  const { name, description, productImage, images, features } = productInfo

  return (
    <div className="view">
      {productImage && images ? (
        <Galeria className="product-details-gallery" imagenes={images} imagenPrincipal={productImage} />
      ) : (
        <p> Cargando... </p>
      )}

      <div className="product-details-container">
        <div className="product-details-header">
          <h2 className="product-details-title">{name}</h2>
          <button className="product-details-back-button" onClick={() => window.history.back()}>
            Volver Atras
          </button>
        </div>

        <div className="product-details-body">
          <p className="product-details-description">{description}</p>

          <div className="product-details-features">
            <h4>Características del producto</h4>
            {features &&
              features.map((feature) => (
                <p className="products-feature" key={feature.id}>
                  {<FontAwesomeIcon icon={FEATURES_ICON[feature.id - 1]} />}
                  {feature.name}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

ProductDetails.propTypes = {
  productInfo: PropTypes.shape({
    name: PropTypes.string,
    features: PropTypes.array,
    description: PropTypes.string,
    productImage: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      })
    ),
  }).isRequired,
}

export default ProductDetails
