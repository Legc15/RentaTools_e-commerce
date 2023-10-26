/* eslint-disable react/prop-types */
import ProductCard from "../Card"
import "./styles.css"

export const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      <h1 className="title">Buscá en las categorias disponibles</h1>
      <div className="card-categories-container">
        {categories.map((cat, index) => (
          <ProductCard productTitle={cat.name} productImage={cat.image} key={index} />
        ))}
      </div>
    </div>
  )
}
