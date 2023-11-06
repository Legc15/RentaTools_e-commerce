/* eslint-disable no-console */
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ProductForm from "../../components/Forms/ProductForm"
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

const Edit = () => {
  const { categories, categoryAll } = useContext(ContextGlobal)
  const { id } = useParams()
  const [product, setProduct] = useState(initialState)

  useEffect(() => {
    getInformationFromEndpoints(ENDPOINTS_CODE.CATEGORY_ALL).then((response) => categoryAll(response))
    getInformationFromEndpoints(ENDPOINTS_CODE.PRODUCT_DETAIL, id).then((response) => {
      response.status !== "NOT_FOUND" ? setProduct(response) : navigateToNotFound()
    })
  }, [])

  const navigate = useNavigate()

  const navigateToAdmin = () => {
    navigate("/admin")
  }

  const navigateToNotFound = () => {
    navigate("/not-found")
  }

  async function handleEditProduct({ formData, setIsFormIncorrect, setIsFormSent }) {
    if (Object.values(formData).includes("")) {
      console.log("hay cositas para mirar amichi")
    } else {
      setIsFormIncorrect(false)
      // const imageResponse
      // const response = await postNewInformation(ENDPOINT_CODE.PRODUCT_CREATE, formData)
      setIsFormSent(true)
      // if (response.status === 200) {
      //   setIsFormIncorrect(false)
      //   setProductInformation(initialState)
      // } else {
      //   setIsFormIncorrect(true)
      // }
    }
  }

  return (
    <div className="body edit-container  page-container">
      <div>
        <Button variant="contained" onClick={navigateToAdmin} className="button">
          Regresar al Admin
        </Button>
      </div>
      <h2 className="form-title">Editar Producto</h2>
      {product !== initialState ? (
        <ProductForm categories={categories} initialState={product} handleSubmitProduct={handleEditProduct} buttonLabel="Editar producto" />
      ) : (
        ""
      )}
    </div>
  )
}

export default Edit
