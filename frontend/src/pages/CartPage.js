import React from "react";
import PropTypes from "prop-types";
import CartItem from "../components/Cart/CartItem";

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>
          <div className="cart-total">
            <strong>Total:</strong> ${calculateTotal().toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

CartPage.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default CartPage;