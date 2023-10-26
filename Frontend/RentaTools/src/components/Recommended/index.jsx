import ProductCard from "../Card"
import "./styles.css"

export const Recommended = () => {
  const recomendados = [
    {
      title: "Pala mecánica",
      img: "https://conarsac.com/wp-content/uploads/2023/02/conarsac-blog-maquinaria-pesada-1024x640.jpg",
      description: "Potencia: un montón. Capacidad de carga: Bocha. Un lujazo.",
    },
    {
      title: "Martillo rotopercutor",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_760072-MLA69371727463_052023-F.webp",
      description: "Marca Fligman, Potencia: 800W.",
    },
    {
      title: "Lijadora eléctrica",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_833230-MLU72275247400_102023-F.webp",
      description: "Lijadora a 220V. 4000 rpm. Marca Bosch. Tomala bosch, damela a mí.",
    },
    {
      title: "Andamios tubulares",
      img: "https://http2.mlstatic.com/D_NQ_NP_768546-MLA29584378483_032019-V.webp",
      description: "Te sostienen hasta el ánimo en época de elecciones.",
    },
    {
      title: "Atornilladora electrica", 
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_880051-MLU45268089191_032021-F.webp",
      description: "Te atornilla todo y más",
    },
    {
      title: "Martillo demoledor", 
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_603336-MLU72444118265_102023-F.webp",
      description: "Para tirar abajo esas viejas paredes",
    },
    {
      title: "Sierra caladora", 
      img: "https://http2.mlstatic.com/D_NQ_NP_872119-MLA52056137655_102022-O.webp",
      description: "Corta todo tipo de maderas y láminas",
    },
    {
      title: "Amoladora angular", 
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_868064-MLA51094739462_082022-F.webp",
      description: "Corta todo ",
    },
  ]

  return (
    <div className="recommended-container">
      <h1 className="title">Mirá lo que tenemos recomendado</h1>
      <div className="card-recommended-container">
        {recomendados.map((cat, index) => (
          <ProductCard productTitle={cat.title} productImage={cat.img} productDescription={cat.description} key={index} />
        ))}
      </div>
    </div>
  )
}
