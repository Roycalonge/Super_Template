import React from "react";
import PropTypes from "prop-types";
import { payWithWompi, payWithPayU, payWithMercadoPago } from "../services/payment";

const CheckoutPage = ({ cartItems }) => {
  const handleCheckout = async (paymentMethod) => {
    switch (paymentMethod) {
      case "wompi":
        await payWithWompi(cartItems);
        break;
      case "payu":
        await payWithPayU(cartItems);
        break;
      case "mercadopago":
        await payWithMercadoPago(cartItems);
        break;
      default:
        console.error("Método de pago no válido");
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={() => handleCheckout("wompi")}>Pagar con Wompi</button>
      <button onClick={() => handleCheckout("payu")}>Pagar con PayU</button>
      <button onClick={() => handleCheckout("mercadopago")}>Pagar con Mercado Pago</button>
    </div>
  );
};

CheckoutPage.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CheckoutPage;