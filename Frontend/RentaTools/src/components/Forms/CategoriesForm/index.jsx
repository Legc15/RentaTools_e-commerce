/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField"
import HeaderButton from "../../button"
import Box from "@mui/material/Box"
import "./styles.css"
import { postNewInformation, putEditedInformation } from "../../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../../api/constants"
import useForm from "../../../hooks/useForm"
import { useState } from "react"

const CategoriesForm = ({ categoriesForm, setCategoriesForm, isNewCategory }) => {
  const { handleSubmit } = useForm([])
  const [isCategoryCreated, setIsCategoryCreated] = useState(false)
  const [isCategoryIncorrect, setIsCategoryIncorrect] = useState(false)

  const handleInputChange = (e) => {
    setCategoriesForm({ ...categoriesForm, [e.target.name]: e.target.value })
  }

  const handleSubmitCategory = async () => {
    if (categoriesForm.name === "" || categoriesForm.description === "") {
      setIsCategoryIncorrect(true)
      return
    }

    setIsCategoryCreated(false)
    setIsCategoryIncorrect(false)
    const response = isNewCategory
      ? await postNewInformation(ENDPOINTS_CODE.CATEGORY_CREATE, categoriesForm)
      : await putEditedInformation(ENDPOINTS_CODE.CATEGORY_EDIT, categoriesForm)
    if (response.status === 200) {
      setIsCategoryCreated(true)
      setTimeout(() => window.location.reload(), 2000)
    } else {
      setIsCategoryIncorrect(true)
    }
  }

  return (
    <>
      <form className="form-container" onSubmit={(e) => handleSubmit(e, handleSubmitCategory)}>
        <Box
          className="categories-box"
          sx={{
            display: "flex",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
            flexDirection: "row",
          }}
        >
          <TextField
            label="Titulo"
            type="text"
            className="category-name"
            name="name"
            value={categoriesForm.name}
            onChange={handleInputChange}
          />
          <TextField
            label="Descripcion"
            type="text"
            className="category-description"
            name="description"
            value={categoriesForm.description}
            onChange={handleInputChange}
          />
        </Box>
        <HeaderButton buttonLabel={isNewCategory ? "Crear Categoria" : "Modificar Categoria"} className="registrar" type="submit" />
        {isCategoryIncorrect ? (
          <div className="error-message">{`No se pudo ${isNewCategory ? "agregar" : "modificar"} la categoría.`}</div>
        ) : (
          ""
        )}
        {isCategoryCreated ? (
          <div className="success-message">{`Categoría ${isNewCategory ? "agregada a" : "modificada en"} la base de datos.`}</div>
        ) : (
          ""
        )}
      </form>
    </>
  )
}

export default CategoriesForm
