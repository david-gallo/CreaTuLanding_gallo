import CartWidget from "./CartWidget";
import "../styles/NavBar.scss";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MotoAuto Store</h1>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Motos</a></li>
        <li><a href="#">Autos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
