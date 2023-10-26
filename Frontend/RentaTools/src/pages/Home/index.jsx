import { useEffect, useState } from "react"
import { Categories } from "../../components/Categories"
import { Recommended } from "../../components/Recommended"
import { Searchbar } from "../../components/Searchbar"
import "./styles.css"
import { getInformationFromEndpoints } from "../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../api/constants"

const Home = () => {
  const [categories, setCategories] = useState([])
  const [recommended, setRecommended] = useState([])

  useEffect(() => {
    getInformationFromEndpoints(ENDPOINTS_CODE.CATEGORY_ALL).then((response) => setCategories(response))
    getInformationFromEndpoints(ENDPOINTS_CODE.PRODUCTS_ALL).then((response) => setRecommended(response))
  }, [])

  return (
    <div className="body home-container">
      <Searchbar />
      <Categories categories={categories} />
      <Recommended recommended={recommended} />
    </div>
  )
}

export default Home
