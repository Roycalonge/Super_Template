import React from "react";
import { updatePage, deletePage } from "../services/api"; // Importa desde la ubicación correcta

const CartPage = ({ cartItems, removeFromCart, updateQuantity, clearCart }) => {
  // Ejemplo de uso de la API
  const handleUpdatePage = async (pageId, updatedPage) => {
    try {
      await updatePage(pageId, updatedPage);
      console.log("Página actualizada correctamente");
    } catch (error) {
      console.error("Error al actualizar la página:", error);
    }
  };

  const handleDeletePage = async (pageId) => {
    try {
      await deletePage(pageId);
      console.log("Página eliminada correctamente");
    } catch (error) {
      console.error("Error al eliminar la página:", error);
    }
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name} - Cantidad: {item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          />
        </div>
      ))}
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
};

export default CartPage;