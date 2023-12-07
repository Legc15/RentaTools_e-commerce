import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./styles.css"

export default function RentCard({ productInfo }) {
  console.log(productInfo);
  return (
    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="330"
          src={productInfo.productImage}
          style={{
            padding: '15px',
            height: "100%",
            width: "100%",
          }}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
          {productInfo.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {productInfo.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}