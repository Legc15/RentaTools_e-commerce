/* eslint-disable react/prop-types */
import ProductCard from "../Cards/ProductCard"
import "./styles.css"

export const Recommended = ({ recommended }) => {
  const recommendedTen = recommended.slice(0, 10)

  return (
    <div className="recommended-container">
      <h1 className="title">Mirá lo que tenemos recomendado</h1>
      <div className="card-recommended-container">
        {recommendedTen.map((product) => (
          <ProductCard product={product} key={product.id} isHorizontal={true} />
        ))}
      </div>
    </div>
  )
}
