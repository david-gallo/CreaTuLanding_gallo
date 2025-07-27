import React from "react";
import "../styles/cartWidget.scss";

function CartWidget({ count }) {
  return (
    <div className="cart-widget">
      <span>🛒</span>
      {count > 0 && <span className="count">{count}</span>}
    </div>
  );
}

export default CartWidget;