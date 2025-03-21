import React from 'react';
import ReactDOM from 'react-dom/client';  // ✅ Asegurar importación correcta
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // ✅ ReactDOM.createRoot
root.render(<React.StrictMode><App /></React.StrictMode>);
