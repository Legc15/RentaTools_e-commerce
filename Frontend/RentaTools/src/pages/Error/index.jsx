import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate()

  return (
    <div className="body">
      <h1>Error</h1>
      <h4>Usted no está autenticado para esta acción.</h4>
      <Button variant="contained" onClick={() => navigate("/")}>
        Volver a inicio
      </Button>
    </div>
  )
}

export default Error
