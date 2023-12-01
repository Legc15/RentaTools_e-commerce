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
  const [isFirstRender, setIsFirstRender] = useState(false)

  useEffect(() => {
    getInformationFromEndpoints({ endpoint: ENDPOINTS_CODE.PRODUCT_DETAIL, id }).then((response) => {
      setProduct(response)
      setIsFirstRender(true)
    })
    getInformationFromEndpoints({
      endpoint: ENDPOINTS_CODE.RESERVATIONS_PRODUCT,
      id: id,
    }).then((response) => setReservations(response))
  }, [])

  if (product.status === "NOT_FOUND") {
    window.location.replace("/not-found")
  }

  return <div className="detail-container">{isFirstRender ? <ProductDetails productInfo={product} reservations={reservations} /> : ""}</div>
}

export default Detail
