import React, { useState } from "react";
import { Helmet } from "react-helmet";
import RichTextEditor from "./components/RichTextEditor";
import DragDropEditor from "./components/DragDropEditor";
import CartPage from "./pages/CartPage"; // Componente del carrito
import CheckoutPage from "./pages/CheckoutPage"; // Componente de checkout
import CollapseGroup from "./components/CollapseGroup"; // Componente CollapseGroup
import Divider from "./components/Divider"; // Componente Divider
import ImageCarousel from "./components/ImageCarousel"; // Componente ImageCarousel
import SocialLinks from "./components/SocialLinks"; // Componente SocialLinks
import YouTubeEmbed from "./components/YouTubeEmbed"; // Componente YouTubeEmbed
import "./App.css";

const App = () => {
  // Estado del carrito de compras
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Función para actualizar la cantidad de un producto en el carrito
  const updateQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Datos de ejemplo para el ImageCarousel
  const images = [
    "https://via.placeholder.com/800x400?text=Imagen+1",
    "https://via.placeholder.com/800x400?text=Imagen+2",
    "https://via.placeholder.com/800x400?text=Imagen+3",
  ];

  // Datos de ejemplo para SocialLinks
  const socialLinks = [
    { id: "1", name: "Facebook", url: "https://facebook.com", icon: "https://via.placeholder.com/24" },
    { id: "2", name: "Twitter", url: "https://twitter.com", icon: "https://via.placeholder.com/24" },
    { id: "3", name: "Instagram", url: "https://instagram.com", icon: "https://via.placeholder.com/24" },
  ];

  // Datos de ejemplo para CollapseGroup
  const collapseItems = [
    { title: "Sección 1", content: "Contenido de la sección 1" },
    { title: "Sección 2", content: "Contenido de la sección 2" },
    { title: "Sección 3", content: "Contenido de la sección 3" },
  ];

  return (
    <div className="App">
      <Helmet>
        <title>Super Template</title>
        <meta name="description" content="Crea páginas web increíbles con Super Template." />
      </Helmet>

      <header className="App-header">
        <h1>Super Template</h1>
        <p>¡Crea páginas web que superen a Google Sites!</p>
      </header>

      <main className="container mx-auto p-4">
        {/* Editor de Contenido */}
        <section className="editor-section mb-6">
          <h2 className="text-xl font-bold mb-2">Editor de Contenido</h2>
          <RichTextEditor />
        </section>

        {/* Editor Drag & Drop */}
        <section className="dragdrop-section mb-6">
          <h2 className="text-xl font-bold mb-2">Editor Drag & Drop</h2>
          <DragDropEditor />
        </section>

        {/* Carrito de Compras */}
        <section className="cart-section mb-6">
          <h2 className="text-xl font-bold mb-2">Carrito de Compras</h2>
          <CartPage
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            clearCart={clearCart}
          />
        </section>

        {/* Checkout */}
        <section className="checkout-section mb-6">
          <h2 className="text-xl font-bold mb-2">Checkout</h2>
          <CheckoutPage cartItems={cartItems} />
        </section>

        {/* CollapseGroup */}
        <section className="collapse-section mb-6">
          <h2 className="text-xl font-bold mb-2">Grupos Colapsables</h2>
          <CollapseGroup items={collapseItems} />
        </section>

        {/* Divider */}
        <Divider />

        {/* ImageCarousel */}
        <section className="carousel-section mb-6">
          <h2 className="text-xl font-bold mb-2">Carrusel de Imágenes</h2>
          <ImageCarousel images={images} />
        </section>

        {/* SocialLinks */}
        <section className="social-section mb-6">
          <h2 className="text-xl font-bold mb-2">Enlaces Sociales</h2>
          <SocialLinks links={socialLinks} />
        </section>

        {/* YouTubeEmbed */}
        <section className="youtube-section mb-6">
          <h2 className="text-xl font-bold mb-2">Video de YouTube</h2>
          <YouTubeEmbed videoId="dQw4w9WgXcQ" /> {/* Reemplaza con el ID de tu video */}
        </section>
      </main>

      <footer className="bg-gray-100 p-4 text-center">
        <p>© {new Date().getFullYear()} Super Template. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;