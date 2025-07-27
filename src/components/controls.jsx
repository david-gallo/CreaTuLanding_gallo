import React from "react";
import "../styles/controls.scss";

 function Controls({ onIncrement, onDecrement }) {
  return (
    <div className="controls">
      <button onClick={onDecrement}>–</button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}
export default Controls;