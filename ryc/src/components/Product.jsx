import React from 'react';

function Product({ producto }) {

  const handleClick = () => {
    console.log("Producto clickeado:", producto.nombre);
    // Aquí puedes agregar la lógica para lo que deseas hacer al hacer clic
  };

  return (
    <div className="producto" onClick={handleClick}>
      <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <button>Comprar</button>
    </div>
  );
}

export default Product;