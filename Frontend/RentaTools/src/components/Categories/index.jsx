import ProductCard from "../Card"
import "./styles.css"

export const Categories = () => {
  const categorias = [
    {
      title: "Maquinaria pesada y vial",
      img: "https://conarsac.com/wp-content/uploads/2023/02/conarsac-blog-maquinaria-pesada-1024x640.jpg",
    },
    {
      title: "Herramientas de carpintería",
      img: "https://www.mndelgolfo.com/blog/wp-content/uploads/2022/01/10-herramientas-basicas-para-tu-carpinteria-768x432.jpg",
    },
    {
      title: "Herramientas y equipos de construcción",
      img: "https://previews.123rf.com/images/dorian2013/dorian20131502/dorian2013150200033/37099284-caja-con-herramientas-de-construcci%C3%B3n-y-pared-de-ladrillo.jpg",
    },
    {
      title: "Herramientas manuales",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzqlvYFNIjmSFloIH0lbP63DVAK564iGXUI3JqkRLdOjYKXNQtGZD58wleoPS-C_Ns_4&usqp=CAU",
    },
  ]

  return (
    <div className="categories-container">
      <h1>Buscá en las categorias disponibles</h1>
      <div className="card-categories-container">
        {categorias.map((cat, index) => (
          <ProductCard productTitle={cat.title} productImage={cat.img} key={index} />
        ))}
      </div>
    </div>
  )
}
