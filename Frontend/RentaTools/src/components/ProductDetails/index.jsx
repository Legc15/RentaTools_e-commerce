import PropTypes from "prop-types"
import Galeria from "../Gallery"
import "react-calendar/dist/Calendar.css"
import "./styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FEATURE_ICONS } from "../../api/constants"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { isWithinInterval, parseISO } from "date-fns"
import Calendar from "react-calendar"

const ProductDetails = ({ productInfo, reservations }) => {
  const { name, description, productImage, images, features } = productInfo

  const disableReservedDays = ({ date }) => {
    return reservations.some((interval) => {
      //acá filtro todos los intervalos donde la endDate sea antes de la startDate
      if (interval.startDate <= interval.endDate) {
        return isWithinInterval(date, { start: parseISO(interval.startDate), end: parseISO(interval.endDate) })
      }
    })
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
          <h1 className="product-details-title">{name}</h1>

          <button className="product-details-back-button" onClick={() => window.history.back()}>
            Volver
          </button>
        </div>
        <div>
          <p className="description">{description}</p>
        </div>

        <div className="product-details-body">
          <div className="lower-cnt">
            <div className="product-details-features">
              <h4 className="calendar-title">Características</h4>
              {features &&
                features.map((feature) => (
                  <p className="products-feature" key={feature.id}>
                    {<FontAwesomeIcon icon={FEATURE_ICONS[feature.icon]} />} {feature.name}
                  </p>
                ))}
            </div>

            <div className="calendar">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <h4 className="calendar-title">Disponibilidad Alquiler</h4>

                <Calendar view="month" maxDetail="month" tileDisabled={disableReservedDays} minDate={new Date()} locale="es-ES" />
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductDetails.propTypes = {
  reservations: PropTypes.array,
  productInfo: PropTypes.shape({
    id: PropTypes.number,
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
