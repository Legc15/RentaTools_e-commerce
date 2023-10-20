/* eslint-disable react/prop-types */
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions } from "@mui/material"

export default function ProductCard({ productTitle, productImage, productDescription }) {
  console.log(productImage)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={productImage} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productTitle}
          </Typography>
          {productDescription && (
            <Typography variant="body2" color="text.secondary">
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
