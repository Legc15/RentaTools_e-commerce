import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AdminTable from "../../components/AdminTable"
import "./styles.css"
import { getInformationFromEndpoints } from "../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../api/constants"
import { Button } from "@mui/material"
import { ContextGlobal } from "../../api/global.context.helper"
import UsersTable from "../../components/UsersTable"

const userList = [
  {
    email: "pepitoelpistolero@gmail.com",
    name: "Pepito",
    lastName: "elPistolero",
    isAdmin: true,
    photo: "url",
  },
  {
    email: "shakeitoff@uol.com",
    name: "Taylor",
    lastName: "Swift",
    isAdmin: false,
    photo: "url",
  },
]

const Admin = () => {
  const [isProductDeleted, setIsProductDeleted] = useState(false)
  const { productsList, categories, productsAll, categoryAll } = useContext(ContextGlobal)
  const [isShowProductsList, setIsShowProductsList] = useState(false)
  const [isShowUserList, setIsShowUserList] = useState(false)

  useEffect(() => {
    getInformationFromEndpoints(ENDPOINTS_CODE.CATEGORY_ALL).then((response) => categoryAll(response))
  }, [isProductDeleted])

  const navigate = useNavigate()

  const navigateToAddProduct = () => {
    navigate("/admin/register")
  }

  const handleListProducts = () => {
    setIsShowUserList(false)
    getInformationFromEndpoints(ENDPOINTS_CODE.PRODUCTS_ALL).then((response) => productsAll(response))
    setIsShowProductsList(!isShowProductsList)
  }

  const handleListUsers = () => {
    console.log("holis")
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
          <AdminTable
            categories={categories}
            products={productsList}
            setIsProductDeleted={setIsProductDeleted}
            isProductDeleted={isProductDeleted}
          />
        </div>
      ) : (
        ""
      )}
      {isShowUserList ? (
        <div className="admin-table-container">
          <UsersTable userList={userList} />
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Admin
