import React, { useState, useContext } from "react"
import { TextField, Button, Stack, Select, MenuItem } from "@mui/material"
import { Link } from "react-router-dom"
import "./styles.css"
import { ContextGlobal } from "../../api/global.context.helper"
import useForm from "../../hooks/useForm"

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

const Form = () => {
  const { categories } = useContext(ContextGlobal)
  const [isFormIncorrect, setIsFormIncorrect] = useState(false)
  const [isFormSent, setIsFormSent] = useState(false)

  const { formData, setFormData, handleSubmit, handleInputChange } = useForm(initialState)

  async function handleSubmitProduct() {
    console.log("hola")
  }

  const isFormNotComplete = isFormIncorrect && !isFormSent
  const isFormWithDuplicatedFields = isFormIncorrect && isFormSent
  const isFormCorrectlyFinished = !isFormIncorrect && isFormSent

  return (
    <React.Fragment>
      <form onSubmit={(e) => handleSubmit(e, handleSubmitProduct)} action={<Link to="/" />} className="form-container">
        <div>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }} className="stack-container">
            <TextField
              name="name"
              className="name"
              type="text"
              variant="outlined"
              color="secondary"
              label="Nombre del producto"
              onChange={handleInputChange}
              value={formData.name}
              fullWidth
            />
            <TextField
              name="shortDescription"
              className="subtitle"
              type="text"
              variant="outlined"
              color="secondary"
              label="Subtítulo del producto"
              onChange={handleInputChange}
              value={formData.shortDescription}
              fullWidth
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }} className="stack-container">
            <Select
              name="category"
              label="Categoría del producto"
              variant="outlined"
              color="secondary"
              onChange={(e) => setFormData({ ...formData, category: { id: e.target.value } })}
              value={formData.category.id}
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
              name="productCode"
              className="productCode"
              type="text"
              variant="outlined"
              color="secondary"
              label="Código de producto"
              onChange={handleInputChange}
              value={formData.productCode}
              fullWidth
            />
            <TextField
              name="pricePerDay"
              className="pricePerDay"
              type="number"
              variant="outlined"
              color="secondary"
              label="Precio por día"
              onChange={handleInputChange}
              value={formData.pricePerDay}
              fullWidth
            />
            <TextField
              name="pricePerHour"
              className="pricePerHour"
              type="number"
              variant="outlined"
              color="secondary"
              label="Precio por hora"
              onChange={handleInputChange}
              value={formData.pricePerHour}
              fullWidth
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }} className="stack-container">
            <TextField
              name="description"
              className="description"
              type="textarea"
              variant="outlined"
              color="secondary"
              label="Descripción del producto"
              onChange={handleInputChange}
              value={formData.description}
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
                // onChange={(e) => setProductInformation({ ...productInformation, productImage: e.target.files })}
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
