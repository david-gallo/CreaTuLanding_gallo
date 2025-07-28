import { useState } from "react";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import products from "./data/Products";
import Footer from './components/Footer'; 
import "./styles/Styles.scss";
import ItemListContainer from "./components/ItemListConteiner";

function App() {

  const [count, setCount] = useState(0); 
  const onIncrement = () => setCount(prev => prev + 1);
  const onDecrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  const onAddToCart = () => {
    setCount(prevCount => prevCount + 1); 
  };

  return (
    <>
      <NavBar count={count} />
      <main>
        <ItemListContainer greeting="¡Bienvenido a la tienda!" />
       <ProductList
          products={products}
          onIncrement={onIncrement}
          onDecrement={onDecrement}/>
      </main>
      <Footer />
    </>
  );
}

export default App;