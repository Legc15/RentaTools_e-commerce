import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="body padding page-container">
      <h1>Error</h1>
      <h4>Producto inexistente.</h4>
      <Button variant="contained" onClick={() => navigate("/admin")}>
        Volver al admin
      </Button>
    </div>
  )
}

export default NotFound
