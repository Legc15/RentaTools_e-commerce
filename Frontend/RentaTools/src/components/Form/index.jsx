import React, { useState, useContext } from "react"
import { TextField, Button, Stack, Select, MenuItem } from "@mui/material"
import { Link } from "react-router-dom"
import "./styles.css"
//import { postNewProduct } from "../../api/requestHandlers"
import { ContextGlobal } from "../../api/global.context.helper"

const initialState = {
  name: "",
  productCode: "",
  shortDescription: "",
  description: "",
  category: { id: "" },
  pricePerDay: 0,
  pricePerHour: 0,
  productImage: "",
  //  productImage: "",
}

const Form = () => {
  const { categories } = useContext(ContextGlobal)
  const [productInformation, setProductInformation] = useState(initialState)
  const [isFormIncorrect, setIsFormIncorrect] = useState(false)
  const [isFormSent, setIsFormSent] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    if (Object.values(productInformation).includes("")) {
      setIsFormIncorrect(true)
      setIsFormSent(false)
    } else {
      setIsFormIncorrect(false)
      console.log(productInformation)
      // const response = await postNewProduct(productInformation)
      setIsFormSent(true)
      //   if (response.status === 200) {
      //     setIsFormIncorrect(false)
      //     setProductInformation(initialState)
      //   } else {
      //     setIsFormIncorrect(true)
      //   }
    }
  }

  const isFormNotComplete = isFormIncorrect && !isFormSent
  const isFormWithDuplicatedFields = isFormIncorrect && isFormSent
  const isFormCorrectlyFinished = !isFormIncorrect && isFormSent

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} action={<Link to="/" />} className="form-container">
        <div>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }} className="stack-container">
            <TextField
              className="name"
              type="text"
              variant="outlined"
              color="secondary"
              label="Nombre del producto"
              onChange={(e) => setProductInformation({ ...productInformation, name: e.target.value })}
              value={productInformation.name}
              fullWidth
            />
            <TextField
              className="subtitle"
              type="text"
              variant="outlined"
              color="secondary"
              label="Subtítulo del producto"
              onChange={(e) => setProductInformation({ ...productInformation, shortDescription: e.target.value })}
              value={productInformation.shortDescription}
              fullWidth
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }} className="stack-container">
            <Select
              label="Categoría del producto"
              variant="outlined"
              color="secondary"
              onChange={(e) => setProductInformation({ ...productInformation, category: { id: e.target.value } })}
              value={productInformation.category.id}
              className="product-category"
              fullWidth
            >
              {categories.map((cat) => (
                <MenuItem value={cat.id} key={cat.id}>
                  {cat.name}
                </MenuItem>
              ))}
            </Select>

            <TextField
              className="productCode"
              type="text"
              variant="outlined"
              color="secondary"
              label="Código de producto"
              onChange={(e) => setProductInformation({ ...productInformation, productCode: e.target.value })}
              value={productInformation.productCode}
              fullWidth
            />
            <TextField
              className="pricePerDay"
              type="number"
              variant="outlined"
              color="secondary"
              label="Precio por día"
              onChange={(e) => setProductInformation({ ...productInformation, pricePerDay: parseFloat(e.target.value) })}
              value={productInformation.pricePerDay}
              fullWidth
            />
            <TextField
              className="pricePerHour"
              type="number"
              variant="outlined"
              color="secondary"
              label="Precio por hora"
              onChange={(e) => setProductInformation({ ...productInformation, pricePerHour: parseFloat(e.target.value) })}
              value={productInformation.pricePerHour}
              fullWidth
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }} className="stack-container">
            <TextField
              className="description"
              type="textarea"
              variant="outlined"
              color="secondary"
              label="Descripción del producto"
              onChange={(e) => setProductInformation({ ...productInformation, description: e.target.value })}
              value={productInformation.description}
              rows={3}
              multiline
              fullWidth
            />
            <div>
              <label htmlFor="upload-photo" className="img-label">
                <Button variant="contained" component="span" className="img-button button">
                  Subir imágenes
                </Button>
              </label>
              <input
                id="upload-photo"
                name="upload-photo"
                type="file"
                multiple={true}
                className="img-input"
                onChange={(e) => setProductInformation({ ...productInformation, productImage: e.target.files })}
                //value={productInformation.productImage}
              />
            </div>
          </Stack>
        </div>
        <Button variant="contained" type="submit" className="submit-form">
          Agregar Producto
        </Button>
        {isFormNotComplete ? <div className="error-message">Por favor complete todos los campos necesarios.</div> : ""}
        {isFormWithDuplicatedFields ? <div className="error-message">El nombre o el código de producto ya existen.</div> : ""}
        {isFormCorrectlyFinished ? <div className="success-message">Producto agregado a la base de datos.</div> : ""}
      </form>
    </React.Fragment>
  )
}

export default Form
