import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import products from './data/Products';

function App() {
  return (
    <>
      <NavBar />
      <h2>¡Bienvenido a MotoAuto Store!</h2> 
      <ProductList products={products} />
    </>
  )
}

export default App;
