import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import HeaderButton from "../../button"
import useForm from "../../../hooks/useForm"
import { ENDPOINTS_CODE } from "../../../api/constants"
import { postNewInformation } from "../../../api/requestHandlers"
import { useState } from "react"
import { Link } from "react-router-dom"

const initialData = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
}

export default function SignInForm() {
  const { formData, handleInputChange, handleSubmit } = useForm(initialData)
  const [isUserValidated, setIsUserValidated] = useState(false)
  const [isNewAttempt, setIsNewAttempt] = useState(true)

  const redirectAccordingToRole = (role) => {
    location.assign(role === "ADMIN" ? "/admin" : "/")
  }

  const handleLogIn = async () => {
    setIsNewAttempt(true)
    const response = await postNewInformation(ENDPOINTS_CODE.USER_VALIDATION, formData).then((response) => response.json())
    
    if (!response.role) {
      setIsUserValidated(false)
    } else {
      localStorage.setItem("role", response.role)
      localStorage.setItem("userId", response.userId)
      localStorage.setItem("token", response.jwt)

      setIsUserValidated(true)
      setTimeout(() => redirectAccordingToRole(response.role), 2000)
    }
    setIsNewAttempt(false)
  }
  

  return (
    <form className="formulario" onSubmit={(e) => handleSubmit(e, () => handleLogIn())}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
          flexDirection: "column",
        }}
      >
        <TextField label="Correo Electronico" type="text" name="email" onChange={handleInputChange} />
        <TextField label="Contraseña" type="password" name="password" onChange={handleInputChange} />
      </Box>
      <HeaderButton buttonLabel="Ingresar" className="button botonGeneral" type="submit" />
      {!isUserValidated && !isNewAttempt ? <div className="error-message">Nombre de usuario o contraseña no válidos.</div> : ""}
      {isUserValidated ? <div className="success-message">Usuario autenticado. Redirigiendo...</div> : ""}
      {!isUserValidated ? (
        <div className="signup-div">
          {" "}
          <p className="searchbar-description">No tenés usuario? </p>{" "}
          <Link className="signup-link" to="/signup">
            {" "}
            Registrate acá
          </Link>{" "}
        </div>
      ) : (
        ""
      )}
    </form>
  )
}
