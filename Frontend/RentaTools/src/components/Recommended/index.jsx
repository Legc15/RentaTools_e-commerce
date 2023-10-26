/* eslint-disable react/prop-types */
import ProductCard from "../Card"
import "./styles.css"

export const Recommended = ({ recommended }) => {
  return (
    <div className="recommended-container">
      <h1 className="title">Mirá lo que tenemos recomendado</h1>
      <div className="card-recommended-container">
        {recommended.map((cat, index) => (
          <ProductCard productTitle={cat.name} productImage={cat.productImage} productDescription={cat.shortDescription} key={index} />
        ))}
      </div>
    </div>
  )
}
