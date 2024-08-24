import React from 'react';
import Slider from './Slider'; // Asegúrate de que esta ruta sea correcta

// Crea una función para cargar todas las imágenes
function importAll(r) {
  let images = {};
  r.keys().forEach((item) => { 
    images[item.replace('./', '')] = r(item); 
  });
  return images;
}

// Importa todas las imágenes en src/images
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const cuchilleria = [
  { id: 1, nombre: 'Cuchillo de Chef', precio: 50, descripcion: 'Ideal para todo tipo de cortes', imagen: images['matera eco cuero negra.png'] },
  { id: 2, nombre: 'Cuchillo Santoku', precio: 60, descripcion: 'Perfecto para verduras y frutas', imagen: images['porta mate para auto eco cuero color.png'] },
  { id: 3, nombre: 'Cuchillo de Carnicero', precio: 70, descripcion: 'Especial para carnes', imagen: images['matera eco cuero negra.png'] },
  { id: 4, nombre: 'Cuchillo de casa', precio: 90, descripcion: 'Especial para carnes', imagen: images['matera eco cuero negra.png'] },
  { id: 5, nombre: 'Cuchillo de trabaj', precio: 70, descripcion: 'Especial para carnes', imagen: images['matera eco cuero negra.png'] },
  { id: 6, nombre: 'Cuchillo de wa', precio: 70, descripcion: 'Especial para carnes', imagen: images['matera eco cuero negra.png'] },
  { id: 7, nombre: 'Cuchillo de wa', precio: 70, descripcion: 'Especial para carnes', imagen: images['matera eco cuero negra.png'] },
  { id: 8, nombre: 'Cuchillo de wa', precio: 70, descripcion: 'Especial para carnes', imagen: images['matera eco cuero negra.png'] },

];

const tabla = [
  { id: 1, nombre: 'Cuchillo de Chef', precio: 50, descripcion: 'Ideal para todo tipo de cortes', imagen: images['matera eco cuero negra.png'] },
  { id: 2, nombre: 'Cuchillo Santoku', precio: 60, descripcion: 'Perfecto para verduras y frutas', imagen: images['porta mate para auto eco cuero color.png'] },
  { id: 3, nombre: 'Cuchillo de Carnicero', precio: 70, descripcion: 'Especial para carnes', imagen: images['matera eco cuero negra.png'] },
  { id: 4, nombre: 'Cuchillo de casa', precio: 90, descripcion: 'Especial para carnes', imagen: images['matera eco cuero negra.png'] },
  { id: 5, nombre: 'Cuchillo de trabaj', precio: 70, descripcion: 'Especial para carnes', imagen: images['matera eco cuero negra.png'] },
  { id: 6, nombre: 'Cuchillo de wa', precio: 70, descripcion: 'Especial para carnes', imagen: images['matera eco cuero negra.png'] },
];

const mate = [
  { id: 1, nombre: 'Cuchillo de Chef', precio: 50, descripcion: 'Ideal para todo tipo de cortes', imagen: images['matera eco cuero negra.png'] },
  { id: 2, nombre: 'Cuchillo Santoku', precio: 60, descripcion: 'Perfecto para verduras y frutas', imagen: images['porta mate para auto eco cuero color.png'] },
  { id: 3, nombre: 'Cuchillo de Carnicero', precio: 70, descripcion: 'Especial para carnes', imagen: images['matera eco cuero negra.png'] },
  { id: 4, nombre: 'Cuchillo de casa', precio: 90, descripcion: 'Especial para carnes', imagen: images['matera eco cuero negra.png'] },
  { id: 5, nombre: 'Cuchillo de trabaj', precio: 70, descripcion: 'Especial para carnes', imagen: images['matera eco cuero negra.png'] },
  { id: 6, nombre: 'Cuchillo de wa', precio: 70, descripcion: 'Especial para carnes', imagen: images['matera eco cuero negra.png'] },
];

function ProductList() {
  return (
    <>
      {/* Sección de Cuchillos */}
      <section>
        <h2 className="TituloProducto">Cuchillos</h2>
        <Slider productos={cuchilleria} />
      </section>

      {/* Sección de Tabla */}
      <section>
        <h2 className="TituloProducto">Tabla</h2>
        <Slider productos={tabla} />
      </section>

      {/* Sección de Mate */}
      <section>
        <h2 className="TituloProducto">Mate</h2>
        <Slider productos={mate} />
      </section>
    </>
  );
}

export default ProductList;
