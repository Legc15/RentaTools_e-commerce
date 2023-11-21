import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import FeaturesTable from "../../components/Tables/FeaturesTable"
import FeaturesForm from "../../components/Forms/FeaturesForm"
import { useEffect, useState } from "react"
import { getInformationFromEndpoints } from "../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../api/constants"
import "./styles.css"

const Features = () => {
  const navigate = useNavigate()

  const navigateToAdmin = () => {
    navigate("/admin")
  }
  const [features, setFeatures] = useState([])
  const [isNewFeatureAdded, setIsNewFeatureAdded] = useState(false)

  useEffect(() => {
    getInformationFromEndpoints(ENDPOINTS_CODE.FEATURES_ALL).then((response) => setFeatures(response))
  }, [isNewFeatureAdded])

  return (
    <div className="body padding features-container  page-container">
      <div>
        <Button variant="contained" onClick={navigateToAdmin} className="button">
          Regresar al Admin
        </Button>
      </div>

      <h1>Administrar características</h1>
      <div className="features-viewer">
        <FeaturesTable features={features} />
        <FeaturesForm setIsNewFeatureAdded={setIsNewFeatureAdded} />
      </div>
    </div>
  )
}

export default Features
