import PropTypes from "prop-types"
import Galeria from "../Gallery"
import "./styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FEATURE_ICONS } from "../../api/constants"
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

const ProductDetails = ({ productInfo }) => {
  const { name, description, productImage, images, features } = productInfo

  const disabledDates = [new Date("2023-11-20"), new Date("2023-11-30")]

  const disableReservedDays = (date) => {
    return date > disabledDates[0] && date < disabledDates[1]
  }

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
          <div className="lower-cnt">
            <div className="product-details-features">
              <h4>Características del producto</h4>
              {features &&
                features.map((feature) => (
                  <p className="products-feature" key={feature.id}>
                    {<FontAwesomeIcon icon={FEATURE_ICONS[feature.icon]} />}
                    {feature.name}
                  </p>
                ))}
            </div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <h4 className="calendar-title">Disponibilidad del producto</h4>
                <DateCalendar className="date-calendar" shouldDisableDate={disableReservedDays} readOnly />
              </LocalizationProvider>
            </div>
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
