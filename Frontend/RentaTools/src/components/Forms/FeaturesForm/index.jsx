/* eslint-disable react/prop-types */
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import HeaderButton from "../../button"
import "./styles.css"
import useForm from "../../../hooks/useForm"
import { ENDPOINTS_CODE } from "../../../api/constants"
import { postNewInformation } from "../../../api/requestHandlers"

const FeaturesForm = ({ setIsNewFeatureAdded }) => {
  const { formData, setFormData, handleInputChange, handleSubmit } = useForm({})

  const handleAddNewFeature = async () => {
    const response = await postNewInformation(ENDPOINTS_CODE.FEATURES_CREATE, formData)

    if (response.status === 200) {
      setIsNewFeatureAdded(true)
      setFormData({})
    }
  }

  return (
    <form className="formulario form-container" onSubmit={(e) => handleSubmit(e, () => handleAddNewFeature())}>
      <Box
        className="feature-box"
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
          flexDirection: "row",
        }}
      >
        <TextField label="Característica" type="text" name="name" onChange={handleInputChange} />
        <TextField label="Ícono" type="text" name="icon" onChange={handleInputChange} />
      </Box>
      <HeaderButton buttonLabel="Crear característica" className="button botonGeneral" type="submit" />
    </form>
  )
}

export default FeaturesForm
