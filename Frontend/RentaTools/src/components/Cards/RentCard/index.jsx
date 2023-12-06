import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./styles.css"

export default function RentCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="330"
          src="https://rentatools-images.s3.us-east-2.amazonaws.com/ProductDetailImages/1p7-1.jpg"
          
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
          Taladro de martillo giratorio
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Motor más potente: potente motor industrial de 1,600 vatios de energía de impacto para una velocidad rápida de perforación o astillado en hormigón, ladrillo, arcilla, metal, roca, mampostería, pared y otros materiales duros.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}