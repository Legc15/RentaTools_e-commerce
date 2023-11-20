/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import "./styles.css"

export default function CategoryCard({ productTitle, productImage, isHorizontal }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="card-container" onClick={() => console.log("holis")}>
      <div className={`${isHorizontal ? "row" : "column"} card-info`}>
        <div className="img-container">
          <img src={productImage} alt={productTitle} className="product-image" />
        </div>
        <CardContent className="card-content">
          <Typography gutterBottom fontSize={16} component="div" className="product-title">
            {productTitle} ({Math.floor(Math.random() * 100)})
          </Typography>
        </CardContent>
      </div>
    </Card>
  )
}
