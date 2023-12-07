import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import HeaderButton from "../../button"
import "./styles.css"
import useForm from "../../../hooks/useForm"

const FeaturesForm = ({ setIsNewFeatureAdded }) => {
  const { setFormData, handleInputChange, handleSubmit } = useForm({})

  const handleAddNewFeature = () => {
    setIsNewFeatureAdded(true)
    setFormData({})
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
        <TextField label="Ícono" type="text" name="lastName" onChange={handleInputChange} />
      </Box>
      <HeaderButton buttonLabel="Crear característica" className="button botonGeneral" type="submit" />
    </form>
  )
}

export default FeaturesForm
