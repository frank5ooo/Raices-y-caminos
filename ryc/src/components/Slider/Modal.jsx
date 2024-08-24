import React from 'react';
import estilos from './Modal.module.css';

function Modal({ producto, cerrarModal }) {
  if (!producto) return null;

  const handleClickOutside = (e) => {
    if (e.target.className.includes('modal')) {
      cerrarModal();
    }
  };

  return (
    <div className={estilos.modal} onClick={handleClickOutside}>
      <div className={estilos.modalContent}>
        <button className={estilos.closeButton} onClick={cerrarModal}>
          ×
        </button>
        <img src={producto.imagen} alt={producto.nombre} className={estilos.modalImage} />
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        
        <span>${producto.precio}</span>

      </div>
    </div>
  );
}

export default Modal;
