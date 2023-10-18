# ProyectoIntegradorDH

1) Clonar el proyecto

2) IMPORTANTE!! moverse desde la terminar hasta estar ubicado en "RentaTools"

3) ejecutar el comando "npm install" (Se instalan las dependencias con la carpeta node_modules)

4) Para ver los componentes hechos en storybooy ejecutar comando "npm run storybook" (RECOMENDADO)

NOTA: Ambos corren por localhost, asegurarse que el puerto no este ocupado, la terminal te ofrece otro puerto en caso de estar el 6006 ocupado, oero hay que confirmarlo en la consola !!! 

    EJ: (√ Port 6006 is not available. Would you like to run Storybook on port 6007 instead? ... yes)

5) Para ejecutar el proyecto normal por navegador en localhost, ejecutar "npm run dev".

IMPORTANTE:

Documentacion: https://tailwindcss.com/docs/guides/vite

    TAILWINDSCSS: el archivo index.css (alojado en ./src) contiene en su comienzo las importaciones de los componentes base @tailwind base; @tailwind components; @tailwind utlities.... NO BORRAR!!!

    El archivo tailwinds.config.js 
    (NO TOCAR ) 
    Contiene un objeto con una propiedad de clave content: que por valor tiene un array con las rutas que tailwinds tiene que leer recursivamente y buscar los estilos simplficados que estan enlazados a index.css"