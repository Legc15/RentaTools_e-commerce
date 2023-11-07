import { useEffect, useContext } from "react"
import { Categories } from "../../components/Categories"
import { Recommended } from "../../components/Recommended"
import { Searchbar } from "../../components/Searchbar"
import "./styles.css"
import { getInformationFromEndpoints } from "../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../api/constants"
import { ContextGlobal } from "../../api/global.context.helper"

const Home = () => {
  const { productsList, categories, productsAll, categoryAll } = useContext(ContextGlobal)

  const queryParamsForRecommended = { isRandom: true }

  useEffect(() => {
    getInformationFromEndpoints(ENDPOINTS_CODE.CATEGORY_ALL).then((response) => categoryAll(response))
    getInformationFromEndpoints(ENDPOINTS_CODE.PRODUCTS_SEARCH, queryParamsForRecommended).then((response) => productsAll(response.data))
  }, [])

  return (
    <div className="body home-container  page-container">
      <Searchbar />
      <Categories categories={categories} />
      <Recommended recommended={productsList} />
    </div>
  )
}

export default Home
