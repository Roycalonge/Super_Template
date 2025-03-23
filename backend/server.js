require('dotenv').config(); // ✅ Cargar variables de entorno
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db'); // ✅ Importar la conexión
const pagesRoutes = require('./routes/pagesRoutes'); // ✅ Importar rutas

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Conectar a MongoDB
connectDB();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Usar las rutas
app.use('/api/pages', pagesRoutes);

// ✅ Ruta raíz
app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente 🚀');
});

// ✅ Iniciar el servidor
app.listen(PORT, () => console.log(`🔥 Servidor corriendo en el puerto ${PORT}`));
