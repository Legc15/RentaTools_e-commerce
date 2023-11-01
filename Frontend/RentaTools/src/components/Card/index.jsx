/* eslint-disable react/prop-types */
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions } from "@mui/material"
import "./styles.css"

export default function ProductCard({ productTitle, productImage, productDescription }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="card-container">
      
      <div className="card-info">
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
        </CardContent>
      </div>

      <CardActions>
        <Button className="button" size="small" color="secondary">
          Ver más
        </Button>
      </CardActions>
    </Card>
  )
}
