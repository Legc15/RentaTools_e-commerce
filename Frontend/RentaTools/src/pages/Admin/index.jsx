import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AdminTable from "../../components/AdminTable"
import "./styles.css"
import { getInformationFromEndpoints } from "../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../api/constants"
import { Button } from "@mui/material"
import { ContextGlobal } from "../../api/global.context.helper"

const Admin = () => {
  const { productsList, categories, productsAll, categoryAll } = useContext(ContextGlobal)

  useEffect(() => {
    getInformationFromEndpoints(ENDPOINTS_CODE.CATEGORY_ALL).then((response) => categoryAll(response))
    getInformationFromEndpoints(ENDPOINTS_CODE.PRODUCTS_ALL).then((response) => productsAll(response))
  }, [])

  const navigate = useNavigate()

  const navigateToAddProduct = () => {
    navigate("/register")
  }

  return (
    <div className="body admin-container">
      <h2 className="form-title">Panel de Administración</h2>
      <div>
        <Button variant="contained" onClick={navigateToAddProduct}>
          Agregar Producto
        </Button>
      </div>
      <AdminTable categories={categories} products={productsList} />
    </div>
  )
}

export default Admin
