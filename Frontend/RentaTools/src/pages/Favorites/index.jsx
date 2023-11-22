import { useEffect, useState } from "react";
import ProductCard from "../../components/Cards/ProductCard";
import { getInformationFromEndpoints, postNewInformation} from "../../api/requestHandlers";
import { ENDPOINTS_CODE } from "../../api/constants";
import { deleteFavoriteEndpoint } from "../../api/endpoints"
import "./styles.css";



export default function Favorites() {
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const userId = 1;
            const favoritesIds = await getInformationFromEndpoints(
                ENDPOINTS_CODE.FAVORITES_ALL,
                userId
            );
            const favorites = await Promise.all(
                favoritesIds.map((id) =>
                    getInformationFromEndpoints(ENDPOINTS_CODE.PRODUCT_DETAIL, id)
                )
            );
            setFavoriteProducts(favorites);
        };

        fetchFavorites();
    }, []);

    const handleFavoriteClick = async (productId) => {
        const isFavorite = favoriteProducts.some(
            (product) => product.id === productId
        );
        if (isFavorite) {
            await postNewInformation(deleteFavoriteEndpoint, { productId });
            setFavoriteProducts(
                favoriteProducts.filter((product) => product.id !== productId)
            );
        } else {
            await postNewInformation(ENDPOINTS_CODE.FAVORITES_ADD, { productId });
            const product = await getInformationFromEndpoints(
                ENDPOINTS_CODE.PRODUCT_DETAIL,
                productId
            );
            setFavoriteProducts([...favoriteProducts, product]);
        }
    };

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
                {favoriteProducts.length > 0 ? (
                    favoriteProducts.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                product={product}
                                isProductFavorited={true}
                                onFavoriteClick={() => handleFavoriteClick(product.id)}
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
