// backend/middleware/errorMiddleware.js

const errorMiddleware = (err, req, res, next) => {
    console.error(err);  // Puedes loguear el error a un archivo si lo deseas
    const statusCode = err.statusCode || 500;  // Usa el código de estado que se pase o 500 por defecto
    const message = err.message || "Error interno del servidor";
    res.status(statusCode).json({ error: message });
  };
  
  module.exports = errorMiddleware;
  