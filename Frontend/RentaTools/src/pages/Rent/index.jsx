import UserReservationDetailTable from "../../components/Tables/UserReservationDetailTable"
import ReservationDetailTable from "../../components/Tables/ReservationDetailTable"
import ProductReservationTable from "../../components/Tables/ProductReservationTable"
import RentCard from "../../components/Cards/RentCard"
import { getUserId } from "../../utils/localStorageHandler"

import "./styles.css"
import { useLocation } from "react-router-dom"
import HeaderButton from "../../components/button"
import { postNewInformation } from "../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../api/constants"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Rent = () => {
    const location = useLocation()
    const { reservedDates, id } = location.state
    const [isReservationConfirmed, setIsReservationConfirmed] = useState(false);

    const handleConfirmReservation = async () => {

        const reservationData = {
            productId: id,
            userId: getUserId(),
            reservationFrom: reservedDates.reservationFrom,
            reservationTo: reservedDates.reservationTo,
        }
        console.log(reservationData);

        setIsReservationConfirmed(true);

        // const response = await postNewInformation(ENDPOINTS_CODE.RESERVATIONS_CREATE, reservationData)

        // if(response.status === 200){
        //     console.log("todo joya");
        // }
    }
    const navigate = useNavigate()
    const navigateToHome = () => {
        navigate("/")
      }




    return (
        <div className="rent body">
            {isReservationConfirmed ?
                <div className="reserva_confirmada">
                    <h1>¡Reserva Confimada!</h1>
                    <img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/96/external-check-scheduled-objectives-from-planned-calendar-events-date-regular-tal-revivo.png" alt="external-check-scheduled-objectives-from-planned-calendar-events-date-regular-tal-revivo" />

                    <div className="datos_reserva">
                        <div>
                            <h2 className="titulo">Tus Datos</h2>
                            <UserReservationDetailTable />
                        </div>

                        <div>
                            <h2 className="titulo">Detalles del Producto</h2>
                            <ProductReservationTable />
                        </div>

                        <div>
                            <h2 className="titulo">Datos de Reserva</h2>
                            <ReservationDetailTable reservedDates={reservedDates} />
                        </div>

                    </div>

                    <HeaderButton type="submit" className="accion_enviarMail" buttonLabel="Volver al inicio" onClick={navigateToHome} />
                </div>
                :
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
            }
        </div>
    )
}

export default Rent
