import { Button } from "@mui/material"
import "./styles.css"
import { useNavigate } from "react-router-dom"
import CategoriesForm from "../../components/Forms/CategoriesForm"
import CategoriesTable from "../../components/Tables/CategoriesTable"

const Categories = () => {
  const navigate = useNavigate()

  const navigateToAdmin = () => {
    navigate("/admin")
  }

  return (
    <div className="body padding">
      <div>
        <Button variant="contained" onClick={navigateToAdmin} className="button">
          Regresar al Admin
        </Button>
      </div>
      <h1>Administrar Categorias</h1>
      <div className="information">
        <CategoriesTable></CategoriesTable>
        <CategoriesForm></CategoriesForm>
      </div>
    </div>
  )
}

export default Categories
