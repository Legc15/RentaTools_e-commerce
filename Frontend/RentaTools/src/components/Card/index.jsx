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
      <CardActionArea>
        <CardMedia component="img" height="140" image={productImage} className="image-container" />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="div" className="product-title">
            {productTitle}
          </Typography>
          {productDescription && (
            <Typography variant="body2" color="text.secondary" className="product-description">
              {productDescription}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver más
        </Button>
      </CardActions>
    </Card>
  )
}
