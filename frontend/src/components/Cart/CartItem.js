import React from "react";
import PropTypes from "prop-types";

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart-item">
      <div className="item-info">
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div className="item-actions">
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          min="1"
        />
        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default CartItem;