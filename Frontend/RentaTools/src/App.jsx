import "./components/galeria/Galeria";
import "./App.css";
import Galeria from "./components/galeria/Galeria";
//import Header from "./components/header/Header";

function App() {
  
  const imagenes = [
    '../src/assets/imagenesGaleria/image001.jpg',
    '../src/assets/imagenesGaleria/Scalemin.png',
    '../src/assets/imagenesGaleria/imagen5.jpg',
    '../src/assets/imagenesGaleria/th (2).jpg',
  ];
  
  return (
    <div className="">
      
      <Galeria imagenes={imagenes}/>
    </div>
  );
}

export default App;