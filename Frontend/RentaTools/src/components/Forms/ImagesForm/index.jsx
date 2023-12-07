/* eslint-disable react/prop-types */
import React from "react"
import { Button } from "@mui/material"
import "./styles.css"
import useForm from "../../../hooks/useForm"
import { ImagesInput } from "./ImagesInput"

const ImagesForm = ({ initialState, productId }) => {
  const { formData, setFormData } = useForm(initialState)

  const handleAddInput = () => {
    setFormData([
      ...formData,
      {
        id: "",
        title: "",
        url: "",
        product: {
          id: productId,
        },
      },
    ])
  }

  return (
    <React.Fragment>
      <form className="form-container add-images">
        {formData.map((image, index) => (
          <ImagesInput image={image} index={index} key={index} productId={productId} />
        ))}
        <Button variant="contained" className="button botonGeneral" onClick={handleAddInput}>
          Agregar más imágenes
        </Button>
      </form>
    </React.Fragment>
  )
}

export default ImagesForm
