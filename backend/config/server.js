require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db');
const authMiddleware = require('../middleware/authMiddleware'); // Ruta exacta
const errorMiddleware = require('../middleware/errorMiddleware'); // Ruta exacta
const pageRoutes = require('../routes/pageRoutes'); // Nombre exacto (singular)
const authRoutes = require('../routes/authRoutes'); // Nombre exacto
const userRoutes = require('../routes/userRoutes'); // Nombre exacto

const app = express();
const PORT = process.env.PORT || 5000;

// Conexión a DB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/pages', authMiddleware, pageRoutes);
app.use('/api/users', userRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Backend funcionando ✅');
});

// Manejo de errores
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
  console.log('📌 Rutas disponibles:');
  console.log('- /api/auth');
  console.log('- /api/pages (protegida)');
  console.log('- /api/users');
});