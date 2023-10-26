/* eslint-disable react/prop-types */
import ProductCard from "../Card"
import "./styles.css"

export const Recommended = ({ recommended }) => {
  return (
    <div className="recommended-container">
      <h1 className="title">Mirá lo que tenemos recomendado</h1>
      <div className="card-recommended-container">
        {recommended.map((cat, index) => (
          <ProductCard productTitle={cat.title} productImage={cat.img} productDescription={cat.description} key={index} />
        ))}
      </div>
    </div>
  )
}
