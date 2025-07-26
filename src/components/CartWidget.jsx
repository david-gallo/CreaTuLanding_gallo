import { useState } from "react";
import "../styles/cartWidget.scss";

function CartWidget() {
  const [count, setCount] = useState(0);
  return (
    <div className="cart-widget">
      <span>🛒</span>
      {count > 0 && <span className="count">{count}</span>}
    </div>
  );
}

export default CartWidget;