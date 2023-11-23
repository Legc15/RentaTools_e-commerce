import { useEffect, useState } from "react";
import ProductCard from "../../components/Cards/ProductCard";
import { getInformationFromEndpoints } from "../../api/requestHandlers";
import { ENDPOINTS_CODE } from "../../api/constants";
import "./styles.css";
import { getUserId } from "../../utils/localStorageHandler";



export default function Favorites() {
    const [productInformation, setProductInformation] = useState([])
    
    const [favorites, setFavorites] = useState([])
    const filtredProducts = productInformation.filter((product) => favorites.includes(product.id))
    
    
        useEffect(() => {
            if (getUserId()){
            getInformationFromEndpoints(ENDPOINTS_CODE.FAVORITES_ALL, getUserId()).then((response) => {
                setFavorites(response)
            })
            getInformationFromEndpoints(ENDPOINTS_CODE.PRODUCTS_ALL).then((response) => {
                setProductInformation(response)
            })
        }
        }, [])
    
    
    const isProductFavorited = (id) => {
        return favorites.includes(id)
    }





    return (
        <div>
            <div className="terms-top">
                <div className=".title">
                    <h1>FAVORITOS</h1>
                </div>
                <button className="back-button" onClick={() => window.history.back()}>
                    Volver Atras
                </button>

            </div>

            <div className="favs">
                {favorites.length > 0 ? (
                    filtredProducts.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                product={product}
                                isProductFavorited={isProductFavorited}
                            />
                        );
                    })
                ) : (
                    <p>No tienes productos favoritos aún.</p>
                )}
            </div>
        </div>
    );
}
