import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import HeaderButton from "../../button"

export default function SignInForm() {

  const handleLogIn = () => {
    localStorage.setItem("token", "usuario loggeado")
    setIsLoggedin(true)
  }

   
     return (
       <form className="formulario" onSubmit={handleLogIn} >
       <Box
         sx={{
           display: 'flex',
           alignItems: 'center',
           '& > :not(style)': { m: 1 },
           flexDirection: "column"
         }}
       >
         <TextField label= "Correo Electronico" type='text' name='email' />
         <TextField label= "Contraseña" type="password" name='password' />
       </Box>      
        <HeaderButton buttonLabel="Ingresar" className="ingresar" type="submit"/>
       </form>
   
     )
   }
