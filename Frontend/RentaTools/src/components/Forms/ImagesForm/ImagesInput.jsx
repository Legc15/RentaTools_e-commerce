/* eslint-disable react/prop-types */
import { Stack, TextField } from "@mui/material"
import HeaderButton from "../../button"
import { useState } from "react"
import { postNewInformation } from "../../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../../api/constants"

export const ImagesInput = ({ image, productId }) => {
  const [isImageUploaded, setIsImageUploaded] = useState(false)
  const [isImageUploading, setIsImageUploading] = useState(false)
  const [inputImage, setInputImage] = useState({ title: "", url: "", product: { id: productId } })

  const handleInputChange = (e) => {
    setInputImage({ ...inputImage, [e.target.name]: e.target.value })
  }

  async function handleAddImage() {
    setIsImageUploading(true)
    const response = await postNewInformation(ENDPOINTS_CODE.IMAGES_CREATE, inputImage)
    setIsImageUploading(false)
    if (response.status !== 200) {
      setIsImageUploaded(false)
      return
    }

    setIsImageUploaded(true)
  }

  return (
    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }} className="stack-container add-images" key={image.id}>
      <TextField
        key={image.id}
        name="url"
        className="image"
        type="text"
        variant="outlined"
        color="secondary"
        label="URL de imagen"
        onChange={handleInputChange}
        value={inputImage.url || image.url}
        fullWidth
      />
      {image.url ? (
        <HeaderButton variant="contained" type="submit" className="edit-button" buttonLabel="Editar" />
      ) : (
        <HeaderButton
          variant="contained"
          type="submit"
          className={`add-button ${isImageUploaded ? "edit-button" : ""}`}
          buttonLabel={isImageUploaded ? "Agregado!" : "Agregar"}
          onClick={handleAddImage}
          disabled={isImageUploading}
        />
      )}
      <HeaderButton variant="contained" type="submit" className="delete-button" buttonLabel="Eliminar" />
    </Stack>
  )
}
