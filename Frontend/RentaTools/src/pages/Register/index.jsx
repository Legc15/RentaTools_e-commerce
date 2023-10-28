import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Form from "../../components/Form"
import "./styles.css"
import { getInformationFromEndpoints } from "../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../api/constants"
import { Button } from "@mui/material"
import { ContextGlobal } from "../../api/global.context.helper"

const Register = () => {
  const { categories, categoryAll } = useContext(ContextGlobal)

  useEffect(() => {
    getInformationFromEndpoints(ENDPOINTS_CODE.CATEGORY_ALL).then((response) => categoryAll(response))
  }, [])

  const navigate = useNavigate()

  const navigateToAdmin = () => {
    navigate("/admin")
  }

  return (
    <div className="body register-container">
      <div>
        <Button variant="contained" onClick={navigateToAdmin} className="button">
          Regresar al Admin
        </Button>
      </div>
      <h2 className="form-title">Registrar Producto</h2>
      <Form categories={categories} />
    </div>
  )
}

export default Register
