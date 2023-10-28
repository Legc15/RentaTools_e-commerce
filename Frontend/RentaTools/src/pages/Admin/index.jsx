import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AdminTable from "../../components/AdminTable"
import "./styles.css"
import { getInformationFromEndpoints } from "../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../api/constants"
import { Button } from "@mui/material"
import { ContextGlobal } from "../../api/global.context.helper"

const Admin = () => {
  const { productsList, categories, productsAll, categoryAll } = useContext(ContextGlobal)
  const [isShowProductsList, setIsShowProductsList] = useState(false)

  useEffect(() => {
    getInformationFromEndpoints(ENDPOINTS_CODE.CATEGORY_ALL).then((response) => categoryAll(response))
    getInformationFromEndpoints(ENDPOINTS_CODE.PRODUCTS_ALL).then((response) => productsAll(response))
  }, [])

  const navigate = useNavigate()

  const navigateToAddProduct = () => {
    navigate("/admin/register")
  }

  return (
    <div className="body admin-container">
      <h2 className="form-title">Panel de Administración</h2>
      <div className="admin-navbar">
        <Button variant="contained" onClick={navigateToAddProduct} className="button button-add">
          Agregar Producto
        </Button>

        <Button variant="contained" onClick={() => setIsShowProductsList(!isShowProductsList)} className="button button-list">
          {isShowProductsList ? "Ocultar Listado" : "Listar Productos"}
        </Button>
        <Button variant="contained" onClick={navigateToAddProduct} className="button button-add-category">
          Crear categoría
        </Button>
      </div>
      {isShowProductsList ? (
        <div className="admin-table-container">
          <AdminTable categories={categories} products={productsList} />
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Admin
