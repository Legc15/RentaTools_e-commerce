/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react"
import { TextField, Button, Stack, Select, MenuItem } from "@mui/material"
import { Link } from "react-router-dom"
import "./styles.css"
import { ContextGlobal } from "../../../api/global.context.helper"
import useForm from "../../../hooks/useForm"

const ProductForm = ({ initialState, handleSubmitProduct, buttonLabel }) => {
  const { formData, setFormData, handleSubmit, handleInputChange } = useForm(initialState)
  const { categories } = useContext(ContextGlobal)

  const [isFormIncomplete, setIsFormIncomplete] = useState(false)
  const [isNameDuplicated, setIsNameDuplicated] = useState(false)
  const [isFormSent, setIsFormSent] = useState(false)

  const isFormNotComplete = isFormIncomplete && !isFormSent
  const isFormWithDuplicatedFields = isNameDuplicated && isFormSent
  const isFormCorrectlyFinished = !isFormIncomplete && !isNameDuplicated && isFormSent

  return (
    <React.Fragment>
      <form
        onSubmit={(e) =>
          handleSubmit(e, () => handleSubmitProduct({ setIsFormIncomplete, setIsNameDuplicated, setIsFormSent, formData, setFormData }))
        }
        action={<Link to="/" />}
        className="form-container"
      >
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
          </Stack>

          <Stack>
            <TextField
              name="productImage"
              className="productImage"
              type="text"
              variant="outlined"
              color="secondary"
              label="URL de imagen de portada"
              onChange={handleInputChange}
              value={formData.productImage}
              rows={1}
              fullWidth
            />
          </Stack>
        </div>
        <Button variant="contained" type="submit" className="submit-form">
          {buttonLabel}
        </Button>
        {isFormNotComplete ? <div className="error-message">Por favor complete todos los campos necesarios.</div> : ""}
        {isFormWithDuplicatedFields ? <div className="error-message">El nombre o el código de producto ya existen.</div> : ""}
        {isFormCorrectlyFinished ? <div className="success-message">Producto agregado a la base de datos.</div> : ""}
      </form>
    </React.Fragment>
  )
}

export default ProductForm
