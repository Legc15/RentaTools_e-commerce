import "./styles.css"
import ProductDetails from "../../components/ProductDetails"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { getInformationFromEndpoints } from "../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../api/constants"

const Detail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [reservations, setReservations] = useState([])

  const objectNotFound = {
    name: "Título no disponible",
    description: "No description available",
    imagenDeReserva: { url: "../../assets/imagenesGaleria/No-disponible.jpg" },
  }

  useEffect(() => {
    getInformationFromEndpoints({ endpoint: ENDPOINTS_CODE.PRODUCT_DETAIL, id }).then((response) => setProduct(response))
    getInformationFromEndpoints({
      endpoint: ENDPOINTS_CODE.RESERVATIONS_PRODUCT,
      id: id,
    }).then((response) => setReservations(response))
  }, [id])

  const hasInformation = Object.keys(product).length > 0

  return (
    <div className="detail-container">
      <ProductDetails productInfo={hasInformation ? product : objectNotFound} reservations={reservations} />
    </div>
  )
}

export default Detail
