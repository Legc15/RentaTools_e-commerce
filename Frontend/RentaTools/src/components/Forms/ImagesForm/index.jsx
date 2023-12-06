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
      <div className="image-inputs">
        {formData.map((image, index) => (
          <ImagesInput image={image} index={index} key={index} productId={productId} />
        ))}
      </div>
      <Button variant="contained" className="add-images" onClick={handleAddInput}>
        Agregar más imágenes
      </Button>
    </React.Fragment>
  )
}

export default ImagesForm
