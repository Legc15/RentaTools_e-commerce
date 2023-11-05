import "./styles.css"
import ProductDetails from "../../components/ProductDetails"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { getInformationFromEndpoints } from "../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../api/constants"

const Detail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})

  const objectNotFound = {
    name: "Título no disponible",
    description: "No description available",
    imagenDeReserva: { url: "../../assets/imagenesGaleria/No-disponible.jpg" },
  }

  useEffect(() => {
    getInformationFromEndpoints(ENDPOINTS_CODE.PRODUCT_DETAIL, id).then((response) => setProduct(response))
  }, [id])

  const hasInformation = Object.keys(product).length > 0

  return (
    <div className="detail-container">
      <h1>Detalle de Producto</h1>
      <ProductDetails productInfo={hasInformation ? product : objectNotFound} />
    </div>
  )
}

export default Detail
