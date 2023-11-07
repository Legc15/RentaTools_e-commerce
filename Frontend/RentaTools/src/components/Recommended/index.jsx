/* eslint-disable react/prop-types */
import ProductCard from "../Cards/ProductCard"
import "./styles.css"

export const Recommended = ({ recommended }) => {
  return (
    <div className="recommended-container">
      <h1 className="title">Mirá lo que tenemos recomendado</h1>
      <div className="card-recommended-container">
        {recommended.map((product) => (
          <ProductCard product={product} key={product.id} isHorizontal={true} />
        ))}
      </div>
    </div>
  )
}
