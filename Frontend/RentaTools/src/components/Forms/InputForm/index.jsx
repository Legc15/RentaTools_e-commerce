import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import HeaderButton from "../../button"
import { useState } from 'react';
import { postNewInformation } from '../../../api/requestHandlers';
import { ENDPOINTS_CODE } from '../../../api/constants';


export default function InputForm() {

 const [formData, setFormData] = useState({
  name: '',
  lastName: '',
  email: '',
  password: ''
 });

 const [isFormCorrect, setIsFormCorrect] = useState(false)
 const [isFormSent, setIsFormSent] = useState(false)


 const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

const validarFormulario = async() =>{
  setIsFormSent(true)
  if(formData.name.trim().length > 3 && formData.lastName.trim().length > 3 && formData.password.trim().length > 4 && emailRegex.test(formData.email)){
    const response = await postNewInformation(ENDPOINTS_CODE.USER_CREATE, formData)
  if (response.status === 200) { 
    setIsFormCorrect(true)
  }
}}


const handleInputChange = (e) =>{
  setFormData({...formData, [e.target.name]:e.target.value});
}

const handleSubmit = (e) =>{
  e.preventDefault();
  validarFormulario();

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
      <TextField label= "Nombre" type='text' name='name' onChange={handleInputChange}/>
      <TextField label= "Apellido" type='text' name='lastName' onChange={handleInputChange}/>
      <TextField label= "Correo Electronico" type='text' name='email' onChange={handleInputChange} />
      <TextField label= "Contraseña" type="password" name='password' onChange={handleInputChange} />
    </Box>
    {isFormSent && !isFormCorrect ? <div className='error-message'>Uno o mas campos estan incorrectos.</div>: ""}    
    {isFormSent && isFormCorrect ? <div className='success-message'>Usuario registrado correctamente.</div> : ""}   
     <HeaderButton buttonLabel="Registrar" className="registrar" type="submit"/>
    </form>

  )
}

