import React from "react";
import { createPage } from "../services/api"; // Importa desde la ubicación correcta

const CheckoutPage = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCreatePage = async () => {
    const newPage = { title: "Nueva Página", content: "Contenido de la página" };
    try {
      await createPage(newPage);
      console.log("Página creada correctamente");
    } catch (error) {
      console.error("Error al crear la página:", error);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={handleCreatePage}>Crear Página</button>
    </div>
  );
};

export default CheckoutPage;