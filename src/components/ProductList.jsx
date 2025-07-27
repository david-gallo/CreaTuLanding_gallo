import React from "react";
import ProductCard from "./ProductCard";
import "../styles/Styles.scss";

function ProductList({
  products = [],         
  onAddToCart             
}) {
  return (
    <div className="product-list">
      {products.map(producto => (
        <ProductCard
          key={producto.id}
          producto={producto}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;