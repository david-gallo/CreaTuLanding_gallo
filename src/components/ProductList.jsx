
import ProductCard from "./ProductCard";

function ProductList({ products = [] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map(producto => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ProductList;