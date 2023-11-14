import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AdminTable from "../../components/Tables/AdminTable"
import "./styles.css"
import { Button } from "@mui/material"
import UsersTable from "../../components/Tables/UsersTable"

const Admin = () => {
  const [isShowProductsList, setIsShowProductsList] = useState(false)
  const [isShowUserList, setIsShowUserList] = useState(false)

  const navigate = useNavigate()

  const navigateToAddProduct = () => {
    navigate("/admin/register")
  }

  const navigateToFeatures = () => {
    navigate("/admin/features")
  }

  const handleListProducts = () => {
    setIsShowUserList(false)
    setIsShowProductsList(!isShowProductsList)
  }

  const handleListUsers = () => {
    setIsShowProductsList(false)
    setIsShowUserList(!isShowUserList)
  }
  return (
    <div className="body admin-container page-container">
      <h2 className="form-title">Panel de Administración</h2>
      <div className="admin-navbar">
        <div className="create-navbar">
          <Button variant="contained" onClick={navigateToAddProduct} className="button button-add">
            Agregar Producto
          </Button>

          <Button variant="contained" onClick={navigateToAddProduct} className="button button-add-category">
            Crear categoría
          </Button>
          <Button variant="contained" onClick={navigateToFeatures} className="button button-add-feature">
            Administrar características{" "}
          </Button>
        </div>
        <div className="show-navbar">
          <Button variant="contained" onClick={handleListProducts} className="button button-list">
            {isShowProductsList ? "Ocultar Listado" : "Listar Productos"}
          </Button>
          <Button variant="contained" onClick={handleListUsers} className="button button-add-category">
            {isShowUserList ? "Ocultar Listado" : "Listar Usuarios"}
          </Button>
        </div>
      </div>
      {isShowProductsList ? (
        <div className="admin-table-container">
          <AdminTable />
        </div>
      ) : (
        ""
      )}
      {isShowUserList ? (
        <div className="admin-table-container">
          <UsersTable />
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Admin
