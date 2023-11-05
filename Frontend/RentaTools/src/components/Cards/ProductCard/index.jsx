/* eslint-disable react/prop-types */
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Button, CardActions } from "@mui/material"
import "./styles.css"
import { useNavigate } from "react-router-dom"

export default function ProductCard({ product, isHorizontal }) {
  const { id, name, shortDescription, productImage } = product

  const navigate = useNavigate()
  const goToDetailPage = (id) => navigate("/detail/" + id)

  return (
    <Card sx={{ maxWidth: 345 }} className="card-container">
      <div className={`${isHorizontal ? "row" : "column"} card-info`} onClick={() => goToDetailPage(id)}>
        <img src={productImage} alt={name} className="product-image" />
        <CardContent className="card-content">
          <Typography gutterBottom fontSize={16} component="div" className="product-title">
            {name}
          </Typography>
          <Typography fontSize={12} color="text.secondary" className="product-description">
            {shortDescription}
          </Typography>
          <CardActions>
            <Button className="button ver-mas" size="small" color="secondary">
              Ir a detalle
            </Button>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  )
}