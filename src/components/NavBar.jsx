import CartWidget from "./CartWidget";
import "../styles/NavBar.scss";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">HardWare Zone</h1>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
