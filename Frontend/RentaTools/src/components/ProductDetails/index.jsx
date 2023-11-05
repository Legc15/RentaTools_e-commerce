import PropTypes from "prop-types"
import Galeria from "../Gallery"
import "./styles.css"

const ProductDetails = ({ productInfo }) => {
  const { name, description, productImage, images } = productInfo

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
        </div>
      </div>
    </div>
  )
}

ProductDetails.propTypes = {
  productInfo: PropTypes.shape({
    name: PropTypes.string,
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
