import { useState } from "react";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import products from "./data/Products";
import "./styles/Styles.scss";

function App() {
  const [count, setCount] = useState(0);
  const onAddToCart = () => setCount(c => c + 1);

  return (
    <>
      <NavBar count={count} />

      <h2>¡Bienvenido a HardWare Zone!</h2>
      <ProductList 
        products={products} 
        onAddToCart={onAddToCart} 
      />
    </>
  );
}

export default App;