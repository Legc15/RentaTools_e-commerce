/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { ENDPOINTS_CODE } from "../../api/constants"
import { getInformationFromEndpoints } from "../../api/requestHandlers"
import { getUserId } from "../../utils/localStorageHandler"
import ProductCard from "../Cards/ProductCard"
import "./styles.css"

export const Recommended = ({ recommended }) => {
  const [favorites, setFavorites] = useState([])

  if (getUserId()) {
    useEffect(() => {
      getInformationFromEndpoints({ endpoint: ENDPOINTS_CODE.FAVORITES_ALL, id: getUserId() }).then((response) => {
        setFavorites(response)
      })
    }, [])
  }
  const isProductFavorited = (id) => {
    return favorites.includes(id)
  }

  return (
    <div className="recommended-container">
      <h1 className="title">RECOMENDADO</h1>
      <div className="card-recommended-container">
        {recommended.map((product) => (
          <ProductCard product={product} key={product.id} isHorizontal={true} isProductFavorited={isProductFavorited(product.id)} />
        ))}
      </div>
    </div>
  )
}
