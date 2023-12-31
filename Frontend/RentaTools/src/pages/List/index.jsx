import { useEffect, useState, useContext } from "react"
import { Searchbar } from "../../components/Searchbar"
import { getInformationFromEndpoints } from "../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../api/constants"
import { ContextGlobal } from "../../api/global.context.helper"
import Pagination from "@mui/material/Pagination"
import ProductList from "../../components/ProductList"
import "./styles.css"

const List = () => {
  const { productsList, productsAll } = useContext(ContextGlobal)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    getInformationFromEndpoints({ endpoint: ENDPOINTS_CODE.PRODUCTS_PAGINATED, page }).then((response) => {
      productsAll(response.data)
      setTotalPages(response.totalPages)
    })
  }, [page])

  const handleChange = (e, v) => {
    setPage(v)
  }

  return (
    <div className="body padding home-container  page-container prueba">
      <div className="searchbar">
        <Searchbar />

        <Pagination count={totalPages} variant="outlined" shape="rounded" page={page} onChange={handleChange} size="small" />
      </div>

      {productsList ? <ProductList products={productsList} className="listView" /> : "Cargando productos"}
      <Pagination count={totalPages} variant="outlined" shape="rounded" page={page} onChange={handleChange} size="small" />
    </div>
  )
}

export default List
