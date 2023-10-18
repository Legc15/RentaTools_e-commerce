import React from "react";

const GaleriaImagenes = () => {
    const imagenPrincipal = './src/assets/imagenesGaleria/maquinaria.jpg';
    const imagen1 = "./src/assets/imagenesGaleria/image001.jpg";
    const imagen2 = "./src/assets/imagenesGaleria/Scalemin.png";
    const imagen3 = "./src/assets/imagenesGaleria/th.jpg";
    const imagen4 = "./src/assets/imagenesGaleria/imagen5.jpg";

    return (
        <div className="bg-gray-100 p-4">
            <div className="flex flex-wrap">
                {/* Imagen principal en la mitad izquierda */}
                <div className="w-full md:w-1/2 p-2">
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                        <img
                            src={imagenPrincipal}
                            alt="Imagen principal"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Grilla de imágenes en la mitad derecha en versión desktop */}
                <div className="w-full md:w-1/2 md:flex md:flex-wrap">
                    <div className="w-1/2 p-2">
                        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                            <img src={imagen1} alt="Imagen 1" className="object-cover w-full h-full" />
                        </div>
                    </div>
                    <div className="w-1/2 p-2">
                        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                            <img src={imagen2} alt="Imagen 2" className="object-cover w-full h-full" />
                        </div>
                    </div>
                    <div className="w-1/2 p-2">
                        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                            <img src={imagen3} alt="Imagen 3" className="object-cover w-full h-full" />
                        </div>
                    </div>
                    <div className="w-1/2 p-2">
                        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                            <img src={imagen4} alt="Imagen 4" className="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Texto "Ver Más" en la región inferior derecha */}
            <div className="text-right mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Ver Más
                </button>
            </div>
        </div>
    );
};

export default GaleriaImagenes;
