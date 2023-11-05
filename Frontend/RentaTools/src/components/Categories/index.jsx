/* eslint-disable react/prop-types */
import CategoryCard from "../Cards/CategoryCard"
import "./styles.css"

export const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      <h1 className="title">Buscá en las categorias disponibles</h1>
      <div className="card-categories-container">
        {categories.map((cat, index) => (
          <CategoryCard productTitle={cat.name} productImage={cat.image} key={index} isHorizontal={false} />
        ))}
      </div>
    </div>
  )
}
