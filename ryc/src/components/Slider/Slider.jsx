import React, { useState } from 'react';
import Modal from './Modal.jsx';
import estilos from './Slider.module.css';



function Slider({ productos }) {
  const [indiceActual, setIndiceActual] = useState(0);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const maxCardsVisible = 5;
  const cantidad = productos.length;

  if (cantidad === 0) return null;

  const siguienteProducto = () => {
    if (indiceActual < cantidad - maxCardsVisible) {
      setIndiceActual(indiceActual + 1);
    }
  };

  const anteriorProducto = () => {
    if (indiceActual > 0) {
      setIndiceActual(indiceActual - 1);
    }
  };

  const abrirModal = (producto) => {
    setProductoSeleccionado(producto);
  };

  const cerrarModal = () => {
    setProductoSeleccionado(null);
  };

  return (
    <div className={estilos.sliderContainer}>
      <button className={estilos.arrow} onClick={anteriorProducto}>←</button>

      <div
        className={estilos.slider}
        style={{
          transform: `translateX(-${indiceActual * (100 / maxCardsVisible)}%)`,
        }}
      >
        {productos.map((producto, index) => (
          <div
            key={index}
            className={estilos.card}
            onClick={() => abrirModal(producto)}
          >
            <img src={producto.imagen} alt={producto.nombre} className={estilos.image} />
            <div className={estilos.cardContent}>
              <h3>{producto.nombre}</h3>
              <span>${producto.precio}</span>
            </div>
          </div>
        ))}
      </div>

      <button className={estilos.arrow} onClick={siguienteProducto}>→</button>

      <Modal producto={productoSeleccionado} cerrarModal={cerrarModal} />
    </div>
  );
}

export default Slider;
