import { useState } from "react";
import "../styles/productCard.scss";

function ProductCard({ producto }) {
  const { modelo: nombre, tipo, precio, imagen, estado, dueños } = producto;
  const [mostrarInfo, setMostrarInfo] = useState(false);

  return (
    <div className="product-card">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Tipo: {tipo}</p>
      <p>Precio: ${precio}</p>
      <p>Estado: {estado === "usado" ? "Usado" : "Nuevo"}</p>
      {estado === "usado" && <p>Dueños: {dueños}</p>}

      <button onClick={() => setMostrarInfo(!mostrarInfo)}>
        {mostrarInfo ? "Ocultar información" : "Más información"}
      </button>

      {mostrarInfo && (
        <div className="info-extra">
          <p>Aquí podrías agregar más detalles del vehículo...</p>
        </div>
      )}
    </div>
  );
}

export default ProductCard;