require('dotenv').config(); // ✅ Cargar variables de entorno desde .env
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Conexión a MongoDB
const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("🔥 Conectado exitosamente a MongoDB Atlas!");
  } catch (error) {
    console.error("❌ Error de conexión a MongoDB:", error);
    process.exit(1); // Detener la app si no puede conectar
  }
}
connectDB();

// ✅ Base de datos y colección
const db = client.db("editorDB");
const pagesCollection = db.collection("pages");

// ✅ Rutas API
const router = express.Router();

// ✅ Obtener todas las páginas
router.get('/pages', async (req, res) => {
  try {
    const pages = await pagesCollection.find().toArray();
    res.json(pages);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener páginas" });
  }
});

// ✅ Guardar una nueva página
router.post('/pages', async (req, res) => {
  try {
    const result = await pagesCollection.insertOne(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar la página" });
  }
});

// ✅ Editar una página
router.put('/pages/:id', async (req, res) => {
  try {
    const pageId = req.params.id;
    const updatedPage = req.body;
    const result = await pagesCollection.updateOne(
      { _id: new ObjectId(pageId) },
      { $set: updatedPage }
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la página" });
  }
});

// ✅ Eliminar una página
router.delete('/pages/:id', async (req, res) => {
  try {
    const pageId = req.params.id;
    const result = await pagesCollection.deleteOne({ _id: new ObjectId(pageId) });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la página" });
  }
});

// ✅ Usar /api para las rutas
app.use('/api', router);

// ✅ Ruta raíz
app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente 🚀');
});

// ✅ Iniciar el servidor
app.listen(PORT, () => console.log(`🔥 Servidor corriendo en el puerto ${PORT}`));
