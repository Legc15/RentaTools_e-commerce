import React, { useState } from "react"
import { TextField, Button, Stack, Select, MenuItem } from "@mui/material"
import { Link } from "react-router-dom"
import "./styles.css"

const initialState = {
  name: "",
  shortDescription: "",
  category: "",
  productCode: "",
  pricePerHour: "",
  pricePerDay: "",
  description: "",
  //images: "",
}

const Form = () => {
  const [productInformation, setProductInformation] = useState(initialState)
  const [isFormIncorrect, setIsFormIncorrect] = useState(false)
  const [isFormSent, setIsFormSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    if (Object.values(productInformation).includes("")) {
      setIsFormIncorrect(true)
      setIsFormSent(false)
    } else {
      setIsFormIncorrect(false)
      setIsFormSent(true)
    }
  }

  return (
    <React.Fragment>
      <h2 className="form-title">Registrar Producto</h2>
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
              onChange={(e) => setProductInformation({ ...productInformation, category: e.target.value })}
              value={productInformation.category}
              className="product-category"
              fullWidth
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
              onChange={(e) => setProductInformation({ ...productInformation, pricePerDay: e.target.value })}
              value={productInformation.pricePerDay}
              fullWidth
            />
            <TextField
              className="pricePerHour"
              type="number"
              variant="outlined"
              color="secondary"
              label="Precio por hora"
              onChange={(e) => setProductInformation({ ...productInformation, pricePerHour: e.target.value })}
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
            <div className="img-button">
              <label htmlFor="upload-photo">
                <input style={{ display: "none" }} id="upload-photo" name="upload-photo" type="file" />

                <Button color="secondary" variant="outlined" component="span">
                  Cargar imágenes
                </Button>
              </label>
            </div>
          </Stack>
        </div>
        <Button variant="contained" type="submit" className="submit-form">
          Agregar Producto
        </Button>
        {isFormIncorrect ? <div>Por favor complete todos los campos necesarios.</div> : ""}
      </form>
    </React.Fragment>
  )
}

export default Form
