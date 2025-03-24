// backend/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "supersecreto";

const authMiddleware = (req, res, next) => {
  // Obtener token del encabezado Authorization
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Acceso no autorizado, token requerido" });
  }

  try {
    // Verificar y decodificar el token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;  // Agregar la información del usuario al request
    next();  // Continuar con la siguiente función (ruta)
  } catch (error) {
    res.status(401).json({ error: "Token inválido o expirado" });
  }
};

module.exports = authMiddleware;
