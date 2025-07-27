import React, { useState } from "react";
import "../styles/productCard.scss";

function ProductCard({ producto, onAddToCart }) {
  const { modelo: nombre, tipo, precio, imagen, estado, dueños } = producto;
  const [mostrarInfo, setMostrarInfo] = useState(false);

  return (
    <div className="product-card">
      <img className="product-card__img" src={imagen} alt={nombre} />

      <div className="product-card__info">
        <h3 className="product-card__title">{nombre}</h3>
        <p className="product-card__type">Tipo: {tipo}</p>
        <p className="product-card__price">Precio: ${precio}</p>
        <p className="product-card__state">
          Estado: {estado === "usado" ? "Usado" : "Nuevo"}
        </p>
        {estado === "usado" && (
          <p className="product-card__owners">Dueños: {dueños}</p>
        )}
        <button className="product-card__btn" onClick={onAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
