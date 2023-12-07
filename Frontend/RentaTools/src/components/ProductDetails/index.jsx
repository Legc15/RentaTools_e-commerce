import PropTypes from "prop-types"
import Galeria from "../Gallery"
import "react-calendar/dist/Calendar.css"
import "./styles.css"
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { isWithinInterval, parseISO } from "date-fns"
import dayjs from "dayjs"
import { useState } from "react"
import HeaderButton from "../button"
import { Link } from "react-router-dom"

const initialDates = {
  reservationFrom: "",
  reservationTo: "",
  isShowDates: false,
}
const ProductDetails = ({ productInfo, reservations }) => {
  const { name, description, productImage, images, features, id } = productInfo
  const [reservedDates, setReservedDates] = useState(initialDates)

  const disableReservedDays = (date) => {
    const parsedDate = new Date(`${date.$y}-${date.$M + 1}-${date.$D}`)
    return reservations.some((interval) => {
      if (interval.startDate < interval.endDate)
        return isWithinInterval(parsedDate, { start: parseISO(interval.startDate), end: parseISO(interval.endDate) })
    })
  }

  const handleResetDates = () => setReservedDates(initialDates)

  const keepReservedDates = (date) => {
    if (reservedDates.reservationFrom === "") {
      setReservedDates({ ...reservedDates, reservationFrom: date, isShowDates: true })
    } else if (date > reservedDates.reservationFrom) {
      setReservedDates({ ...reservedDates, reservationTo: date, isShowDates: true })
    } else {
      setReservedDates({ ...reservedDates, reservationFrom: date, isShowDates: true })
    }
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
                    <i className={`fa-solid ${feature.icon}`}></i> {feature.name}
                  </p>
                ))}
            </div>

            <div className="calendar">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <h4 className="calendar-title">Disponibilidad Alquiler</h4>

                <StaticDatePicker
                  view="month"
                  maxDetail="month"
                  shouldDisableDate={disableReservedDays}
                  minDate={dayjs()}
                  locale="es-ES"
                  onChange={(e) => {
                    keepReservedDates(e.toDate())
                  }}
                />
              </LocalizationProvider>
            </div>
          </div>
          {reservedDates.isShowDates ? (
            <>
              <div className="dates-selected">
                <h3 className="leyenda-reserva">
                  Seleccionaste del {reservedDates.reservationFrom ? reservedDates.reservationFrom.toLocaleDateString("es-ES") : ""} hasta
                  el {reservedDates.reservationTo ? reservedDates.reservationTo.toLocaleDateString("es-ES") : ""}
                </h3>
                <HeaderButton buttonLabel="Reiniciar fechas" onClick={handleResetDates} />
                {reservedDates.reservationFrom && reservedDates.reservationTo ? (
                  <Link to={{ pathname: "/rent" }} state={{ reservedDates, productInfo }}>
                    <HeaderButton buttonLabel="Iniciar Reserva" className="reservation-button" />
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </>
          ) : (
            ""
          )}
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
