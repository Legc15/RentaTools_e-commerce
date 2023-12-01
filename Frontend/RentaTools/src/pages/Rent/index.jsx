import UserReservationDetailTable from "../../components/Tables/UserReservationDetailTable"
import ReservationDetailTable from "../../components/Tables/ReservationDetailTable"
import RentCard from "../../components/Cards/RentCard"

import "./styles.css"
import { useLocation } from "react-router-dom"
import HeaderButton from "../../components/button"

const Rent = () => {
  const location = useLocation()
  const reservedDates = location.state

  const handleConfirmReservation = () => {
    console.log(reservedDates)
  }

  return (
    <div className="rent body">
      <div className="info">
        <RentCard />
        <div className="datos">
          <div>
            <h2 className="titulo">Tus Datos</h2>
            <UserReservationDetailTable />
          </div>

          <div>
            <h2 className="titulo">Datos de Reserva</h2>
            <ReservationDetailTable reservedDates={reservedDates} />
          </div>
          <div className="botones">
            <HeaderButton type="submit" className="accion_volverAtras" buttonLabel="volver" />
            <HeaderButton type="submit" className="accion_alquilar" buttonLabel="confirmar reserva" onClick={handleConfirmReservation} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rent
