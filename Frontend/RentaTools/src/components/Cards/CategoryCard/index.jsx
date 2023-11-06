/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Button, CardActions } from "@mui/material"
import "./styles.css"

export default function CategoryCard({ productTitle, productImage, productDescription, isHorizontal }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="card-container" onClick={() => console.log("holis")}>
      <div className={`${isHorizontal ? "row" : "column"} card-info`}>
        <img src={productImage} alt={productTitle} className="product-image" />
        <CardContent className="card-content">
          <Typography gutterBottom fontSize={16} component="div" className="product-title">
            {productTitle}
          </Typography>
          {productDescription && (
            <Typography fontSize={12} color="text.secondary" className="product-description">
              {productDescription}
            </Typography>
          )}
          <CardActions>
            <Button className="button ver-mas" size="small" color="secondary">
              Ver más
            </Button>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  )
}
