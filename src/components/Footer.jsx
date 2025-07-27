import React from "react";
import "../styles/footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="brand">
          <h2>HardWare Zone</h2>
          <p>Componentes y tecnología de punta para tu PC</p>
        </div>

        <div className="links">
          <h4>Secciones</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Categorías</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>

        <div className="social">
          <h4>Redes Sociales</h4>
          <div className="icons">
            <a href="#"><span>📘</span></a>
            <a href="#"><span>📷</span></a>
            <a href="#"><span>🐦</span></a>
            <a href="#"><span>🎮</span></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} HardWare Zone. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;