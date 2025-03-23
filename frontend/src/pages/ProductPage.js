import React from "react";

const ProductPage = ({ addToCart }) => {
  const products = [
    {
      id: "1",
      name: "Producto 1",
      price: 10.99,
      image: "https://example.com/product1.jpg",
    },
    {
      id: "2",
      name: "Producto 2",
      price: 5.99,
      image: "https://example.com/product2.jpg",
    },
    {
      id: "3",
      name: "Producto 3",
      price: 15.99,
      image: "https://example.com/product3.jpg",
    },
  ];

  return (
    <div>
      <h1>Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;