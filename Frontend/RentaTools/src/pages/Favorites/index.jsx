import { useEffect, useState } from 'react';
import ProductCard from "../../components/Cards/ProductCard";
import { getInformationFromEndpoints, postNewInformation, removeFavorite } from '../../api/requestHandlers';
import { ENDPOINTS_CODE } from '../../api/constants';
import './styles.css'

export default function Favorites() {
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const userId = 1
            const favoritesIds = await getInformationFromEndpoints(ENDPOINTS_CODE.FAVORITES_ALL, userId);
            const favorites = await Promise.all(
                favoritesIds.map(id => getInformationFromEndpoints(ENDPOINTS_CODE.PRODUCT_DETAIL, id))
            );
            setFavoriteProducts(favorites);

        };

        fetchFavorites();
    }, []);

    const handleFavoriteToggle = async (productId) => {
        const isFavorite = favoriteProducts.some(product => product.id === productId);
        if (isFavorite) {
            await removeFavorite(productId);
            setFavoriteProducts(favoriteProducts.filter(product => product.id !== productId));
        } else {
            await postNewInformation(ENDPOINTS_CODE.FAVORITES_ADD, { productId });
            const product = await getInformationFromEndpoints(ENDPOINTS_CODE.PRODUCT_DETAIL, productId);
            setFavoriteProducts([...favoriteProducts, product]);
        }
    };


    return (


        <div>
            <div className="terms-top">
                <button
                    className="back-button"
                    onClick={() => window.history.back()}
                >
                    Volver Atras
                </button>
            </div>
            <div className='.title'>
                <h1>FAVORITOS</h1>
            </div>
            <div className="favs">
                {favoriteProducts.length > 0 ? (
                    favoriteProducts.map((product) =>
                        <ProductCard
                            key={product.id}
                            product={product}
                            isFavorite={true}
                            onFavoriteToggle={() => handleFavoriteToggle(product.id)}
                        />
                    )) : (
                    <p>No tienes productos favoritos aún.</p>
                )}
            </div>

        </div>
    );
}
