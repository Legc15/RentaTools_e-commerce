import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import HeaderButton from "../../button"
import { useState } from 'react';
import { postNewInformation } from '../../../api/requestHandlers';
import { ENDPOINTS_CODE } from '../../../api/constants';
import "./styles.css"


export default function InputForm() {

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [isFormCorrect, setIsFormCorrect] = useState(false)
  const [isFormSent, setIsFormSent] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);


  const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");


  const validarFormulario = async () => {
  setIsButtonDisabled(true)

  if (
    formData.name.trim().length > 3 &&
    formData.lastName.trim().length > 3 &&
    formData.password.trim().length > 4 &&
    emailRegex.test(formData.email)
  ) {
    const response = await postNewInformation(ENDPOINTS_CODE.USER_CREATE, formData)
    if (response.status === 200) {
      setIsFormCorrect(true);
      setIsFormSent(true)
      setIsButtonDisabled(true);

      setTimeout(() => {
        location.assign("/signIn")
      }, 2000)
    } else {
      setIsFormCorrect(false);
      setIsFormSent(true)
      setIsButtonDisabled(false);
    }
  } else {
    setIsFormCorrect(false);
    setIsFormSent(true)
    setIsButtonDisabled(false);
  }
}


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await validarFormulario();
    
  }
  

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
          flexDirection: "column"
        }}
      >
        <TextField label="Nombre" type='text' name='name' onChange={handleInputChange} required />
        <TextField label="Apellido" type='text' name='lastName' onChange={handleInputChange} required />
        <TextField label="Correo Electronico" type='text' name='email' onChange={handleInputChange} required/>
        <TextField label="Contraseña" type="password" name='password' onChange={handleInputChange} required />
      </Box>
      {isFormSent && !isFormCorrect ? <div className="error-message">Uno o mas campos estan incorrectos.</div> : ""}
      {isFormSent && isFormCorrect ? <div className="success-message">Usuario registrado correctamente. Redirigiendo...</div> : ""}
      <HeaderButton buttonLabel="Registrar" className="button botonGeneral" type="submit" disabled={isButtonDisabled} />
    </form>

  )
}
