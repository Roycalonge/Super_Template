require('dotenv').config(); // ✅ Cargar variables de entorno
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db'); // ✅ Importar la conexión
const pagesRoutes = require('./routes/pagesRoutes'); // ✅ Importar rutas
const authMiddleware = require('./middleware/authMiddleware'); // ✅ Middleware de autenticación
const errorMiddleware = require('./middleware/errorMiddleware'); // ✅ Middleware de manejo de errores

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Conectar a MongoDB
connectDB();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Usar las rutas
app.use('/api/pages', authMiddleware, pagesRoutes); // Protege las rutas con el middleware de autenticación

// ✅ Ruta raíz
app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente 🚀');
});

// ✅ Middleware de manejo de errores global
app.use(errorMiddleware);

// ✅ Iniciar el servidor
app.listen(PORT, () => console.log(`🔥 Servidor corriendo en el puerto ${PORT}`));
