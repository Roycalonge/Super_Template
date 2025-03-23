import React from "react";
import { Helmet } from "react-helmet";
import useCart from "./hooks/useCart";
import { images, socialLinks, collapseItems } from "./data/examples";
import RichTextEditor from "./components/RichTextEditor";
import DragDropEditor from "./components/DragDropEditor";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import CollapseGroup from "./components/CollapsibleGroup";
import Divider from "./components/Divider";
import ImageCarousel from "./components/ImageCarousel";
import SocialLinks from "./components/SocialLinks";
import YouTubeEmbed from "./components/YouTubeEmbed";
import "./App.css";

const App = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();

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
        <section className="editor-section mb-6">
          <h2 className="text-xl font-bold mb-2">Editor de Contenido</h2>
          <RichTextEditor />
        </section>

        <section className="dragdrop-section mb-6">
          <h2 className="text-xl font-bold mb-2">Editor Drag & Drop</h2>
          <DragDropEditor />
        </section>

        <section className="cart-section mb-6">
          <h2 className="text-xl font-bold mb-2">Carrito de Compras</h2>
          <CartPage
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            clearCart={clearCart}
          />
        </section>

        <section className="checkout-section mb-6">
          <h2 className="text-xl font-bold mb-2">Checkout</h2>
          <CheckoutPage cartItems={cartItems} />
        </section>

        <section className="collapse-section mb-6">
          <h2 className="text-xl font-bold mb-2">Grupos Colapsables</h2>
          <CollapseGroup items={collapseItems} />
        </section>

        <Divider />

        <section className="carousel-section mb-6">
          <h2 className="text-xl font-bold mb-2">Carrusel de Imágenes</h2>
          <ImageCarousel images={images} />
        </section>

        <section className="social-section mb-6">
          <h2 className="text-xl font-bold mb-2">Enlaces Sociales</h2>
          <SocialLinks links={socialLinks} />
        </section>

        <section className="youtube-section mb-6">
          <h2 className="text-xl font-bold mb-2">Video de YouTube</h2>
          <YouTubeEmbed videoId="dQw4w9WgXcQ" />
        </section>
      </main>

      <footer className="bg-gray-100 p-4 text-center">
        <p>© {new Date().getFullYear()} Super Template. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;