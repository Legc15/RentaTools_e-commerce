//import { useEffect, useState } from 'react';
//import ProductCard from "../../components/Cards/ProductCard";

import './styles.css'

export default function Favorites() {
    //const [favoriteProducts, setFavoriteProducts] = useState([]);




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
            
            <h1>Mis Favoritos</h1>
            {/* {favoriteProducts.length > 0 ? (
                favoriteProducts.map((product) => <ProductCard key={product.id} product={product} />)
            ) : (
                <p>No tienes productos favoritos aún.</p>
            )} */}
        </div>
    );
}
