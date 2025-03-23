import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // ✅ Importar estilos globales

// Crear el root de React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación en el root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
