import { useState } from "react";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import products from "./data/Products";
import Footer from './components/Footer'; 
import "./styles/Styles.scss";
import ItemListContainer from "./components/ItemListConteiner";
import CartWidget from "./components/CartWidget";

function App() {
  const [count, setCount] = useState(0);
  const onAddToCart = () => setCount(c => c + 1);

  return (
    <>
      <NavBar />
      <main>
        <ItemListContainer greeting="¡Bienvenido a la tienda!" />
        <ProductList products={products} onAddToCart={onAddToCart} />
        <CartWidget count={count} />
       
      </main>
      <Footer />
    </>
  );
}

export default App;