import UserReservationDetailTable from "../../components/Tables/UserReservationDetailTable"
import ReservationDetailTable from "../../components/Tables/ReservationDetailTable"
import RentCard from "../../components/Cards/RentCard"

import "./styles.css"

const Rent = () => {
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
            <ReservationDetailTable />
          </div>
          <div className="botones">
            <button type="submit" className="accion_volverAtras">
              VOLVER
            </button>
            <button type="submit" className="accion_alquilar">
              CONFIRMAR RESERVA
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rent
