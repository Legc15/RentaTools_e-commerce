import { Button } from "@mui/material"
import "./styles.css"
import { useNavigate } from "react-router-dom"
import CategoriesForm from "../../components/Forms/CategoriesForm"
import CategoriesTable from "../../components/Tables/CategoriesTable"
import { useEffect, useState } from "react"
import { getInformationFromEndpoints } from "../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../api/constants"

const Categories = () => {
  const navigate = useNavigate()

  const navigateToAdmin = () => {
    navigate("/admin")
  }

  const [categories, setCategories] = useState([])
  const [categoriesForm, setCategoriesForm] = useState({ id: "", name: "", description: "", image: "" })
  const [isNewCategory, setIsNewCategory] = useState(true)

  useEffect(() => {
    getInformationFromEndpoints({ endpoint: ENDPOINTS_CODE.CATEGORY_ALL }).then((response) => setCategories(response))
  }, [])

  return (
    <div className="body padding">
      <div>
        <Button variant="contained" onClick={navigateToAdmin} className="button">
          Regresar al Admin
        </Button>
      </div>
      <h1>Administrar Categorias</h1>
      <div className="information">
        <CategoriesForm categoriesForm={categoriesForm} setCategoriesForm={setCategoriesForm} isNewCategory={isNewCategory} />
        <CategoriesTable categories={categories} setCategoriesForm={setCategoriesForm} setIsNewCategory={setIsNewCategory} />
      </div>
    </div>
  )
}

export default Categories
