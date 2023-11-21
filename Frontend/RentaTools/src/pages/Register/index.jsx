import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import NewProductForm from "../../components/Forms/ProductForm"
import "./styles.css"
import { getInformationFromEndpoints } from "../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../api/constants"
import { Button } from "@mui/material"
import { ContextGlobal } from "../../api/global.context.helper"

const initialState = {
  name: "",
  productCode: "",
  shortDescription: "",
  description: "",
  category: { id: "" },
  pricePerDay: 0,
  pricePerHour: 0,
  productImage: "https://www.ventageneradores.net/16033-thickbox_default/compresor-150-litros-trifasico-compresores-de-aire.jpg",
  images: [],
}

const Register = () => {
  const { categories, categoryAll } = useContext(ContextGlobal)

  useEffect(() => {
    getInformationFromEndpoints(ENDPOINTS_CODE.CATEGORY_ALL).then((response) => categoryAll(response))
  }, [])

  const navigate = useNavigate()

  const navigateToAdmin = () => {
    navigate("/admin")
  }

  async function handlePostProduct({ formData, setIsNameDuplicated, setIsFormIncomplete, setIsFormSent }) {
    // if (Object.values(formData).includes("")) {
    //   console.log("hay cositas para mirar amichi")
    // } else {
    setIsFormIncomplete(false)
    const parsedName = formData.name.replace(" ", "+")
    const isNameExist = await getInformationFromEndpoints(ENDPOINTS_CODE.EXIST_NAME, parsedName)
    if (isNameExist) {
      setIsNameDuplicated(true)
      return
    }
    setIsNameDuplicated(false)
    // const imageResponse
    // const response = await postNewInformation(ENDPOINTS_CODE.PRODUCTS_CREATE, formData)
    setIsFormSent(true)
    // if (response.status === 200) {
    //   setIsFormIncorrect(false)
    //   setProductInformation(initialState)
    // } else {
    //   setIsFormIncorrect(true)
    // }
  }

  return (
    <div className="body padding register-container  page-container">
      <div>
        <Button variant="contained" onClick={navigateToAdmin} className="button">
          Regresar al Admin
        </Button>
      </div>
      <h2 className="form-title">Registrar Producto</h2>
      <NewProductForm
        categories={categories}
        initialState={initialState}
        handleSubmitProduct={handlePostProduct}
        buttonLabel="Agregar producto"
      />
    </div>
  )
}

export default Register
