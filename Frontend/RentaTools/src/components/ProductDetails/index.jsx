import PropTypes from "prop-types"
import Galeria from "../Gallery"
import 'react-calendar/dist/Calendar.css'
import "./styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FEATURE_ICONS } from "../../api/constants"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { useEffect, useState } from "react"
import { getInformationFromEndpoints } from "../../api/requestHandlers"
import { isValid, isWithinInterval, parseISO } from "date-fns";
import Calendar from 'react-calendar'


const ProductDetails = ({ productInfo }) => {
  const { id, name, description, productImage, images, features } = productInfo
  const [disabledDates, setDisableDates] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const reservations = await getInformationFromEndpoints({
        endpoint: 'RESERVATIONS_PRODUCT',
        id: id,
      });
      
      if (reservations) {
        const reservationIntervals = reservations.map(reservation => {
          const startDate = parseISO(reservation.startDate);
          const endDate = parseISO(reservation.endDate);
          return (isValid(startDate) && isValid(endDate)) ? { start: startDate, end: endDate } : null;
        }).filter(interval => interval !== null);
        setDisableDates(reservationIntervals);
      }
    };

    fetchReservations();
  }, [id]);

  const disableReservedDays = ({date}) => {
    return disabledDates.some(interval =>
      isWithinInterval(date, {start: interval.start, end: interval.end })
    );
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
                    {<FontAwesomeIcon icon={FEATURE_ICONS[feature.icon]} />}
                    {feature.name}
                  </p>
                ))}
            </div>

            {disabledDates.length > 0 ? (
              <div className="calendar">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <h4 className="calendar-title">Disponibilidad Alquiler</h4>

                  <Calendar
                    tileDisabled={disableReservedDays}
                  />
                </LocalizationProvider>
              </div>
            ) : (
              <div>Información de Reservas no disponible</div>
            )}

          </div>

        </div>
      </div>
    </div>
  )
}

ProductDetails.propTypes = {
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