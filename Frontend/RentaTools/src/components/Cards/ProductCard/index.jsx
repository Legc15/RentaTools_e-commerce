/* eslint-disable react/prop-types */
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Button, CardActions, IconButton } from "@mui/material"
import "./styles.css"
import { useNavigate } from "react-router-dom"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import { useState } from "react"
import { getInformationFromEndpoints, deleteInformation, postNewInformation } from "../../../api/requestHandlers"
import { ENDPOINTS_CODE } from "../../../api/constants"

import { getUserId } from "../../../utils/localStorageHandler"

export default function ProductCard({ product, isHorizontal, isProductFavorited }) {
  const { id, name, shortDescription, productImage } = product
  const [isFavoriteAdded, setIsFavoriteAdded] = useState(isProductFavorited)
  const [favorites, setFavorites] = useState([])

  const navigate = useNavigate()
  const goToDetailPage = (id) => navigate("/detail/" + id)

  const handleFavoriteClick = async (id) => {
    if (!getUserId()) {
      navigate("/signin")
    }
    const body = {
      product_id: id,
      user_id: parseInt(getUserId()),
    }

    if (isFavoriteAdded) {
      await deleteInformation({ endpoint: ENDPOINTS_CODE.FAVORITES_RMV, body })
      setFavorites(favorites.filter((product) => product.id !== id))
    } else {
      const product = await getInformationFromEndpoints({ endpoint: ENDPOINTS_CODE.PRODUCT_DETAIL, id })
      await postNewInformation(ENDPOINTS_CODE.FAVORITES_ADD, body)
      setFavorites([...favorites, product])
    }
    setIsFavoriteAdded(!isFavoriteAdded)
  }

  return (
    <Card sx={{ maxWidth: 500 }} className="card-container">
      <div className={`${isHorizontal ? "row" : "column"} card-info`}>
        <img src={productImage} alt={name} className="product-image" onClick={() => goToDetailPage(id)} />
        <CardContent className="card-content">
          <div className="title-container">
            <Typography gutterBottom fontSize={16} component="div" className="product-title">
              {name}
            </Typography>
            <IconButton aria-label="add to favorites" className="favorite" onClick={() => handleFavoriteClick(id)}>
              {isFavoriteAdded ? <FavoriteIcon /> : <FavoriteBorder />}
            </IconButton>
          </div>
          <Typography fontSize={12} color="text.secondary" className="product-description">
            {shortDescription}
          </Typography>
          <CardActions>
            <Button className="button-ver-mas" size="small" color="secondary" onClick={() => goToDetailPage(id)}>
              Ver detalle
            </Button>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  )
}
