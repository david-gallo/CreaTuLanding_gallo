import React from "react";

function CartControls({ onAdd, onRemove }) {
  return (
    <div>
      <button onClick={onRemove}>–</button>
      <button onClick={onAdd}>+</button>
    </div>
  );
}

export default CartControls;