import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import HeaderButton from "../../components/button"
import { useState } from 'react';


export default function InputForm() {

 const [formData, setFormData] = useState({
  name: '',
  lastName: '',
  email: '',
  password: ''
 });


 const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  contraseña: /^.{4,12}$/, // 4 a 12 digitos.
}

const validarFormulario = (e) =>{
  switch(e.target.name){
    case "name":
      if(expresiones.nombre.test(e.target.value) == false){
        console.log("Por favor verifica nuevamente tu informacion")
      }

  }
}


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
    <HeaderButton buttonLabel="Registrar" className="registrar" type="submit"/>
    </form>

  )
}

