import React from "react";
import CartControls from "./cartcontrols";

function ProductCard({ producto, onIncrement, onDecrement }) {
  const { modelo: nombre, tipo, precio, imagen } = producto;

  return (
    <div className="product-card">
      <img className="product-card__img" src={imagen} alt={nombre} />

      <div className="product-card__info">
        <h3 className="product-card__title">{nombre}</h3>
        <p className="product-card__type">Tipo: {tipo}</p>
        <p className="product-card__price">Precio: ${precio}</p>

        <section className="product-card__actions">
          <CartControls onAdd={onIncrement} onRemove={onDecrement} />
        </section>
      </div>
    </div>
  );
}

export default ProductCard;