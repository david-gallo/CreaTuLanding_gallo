import React from "react";
import ProductCard from "./ProductCard";
import "../styles/Styles.scss";

function ProductList({
  products = [],
  onAddToCart,
  onIncrement,
  onDecrement
}) {
  return (
    <div className="product-list">
      {products.map(producto => (
        <ProductCard
          key={producto.id}
          producto={producto}
          onAddToCart={onAddToCart}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
}

export default ProductList;