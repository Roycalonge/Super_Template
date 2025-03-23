require('dotenv').config(); // ✅ Cargar variables de entorno desde .env
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb'); // ✅ Agregar ObjectId
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Conexión a MongoDB
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("🔥 Conectado exitosamente a MongoDB Atlas!");
  } catch (error) {
    console.error("❌ Error de conexión a MongoDB:", error);
  }
}
connectDB();

// ✅ Modelo de Página en MongoDB
const db = client.db("editorDB"); // Base de datos
const pagesCollection = db.collection("pages"); // Colección de páginas

// ✅ Enrutador para el prefijo /api
const router = express.Router();

// ✅ Rutas CRUD
router.get('/pages', async (req, res) => {
  try {
    console.log("Recibida solicitud para obtener páginas"); // Depuración
    const pages = await pagesCollection.find().toArray();
    console.log("Páginas encontradas en la base de datos:", pages); // Depuración
    res.json(pages);
  } catch (error) {
    console.error("Error al obtener páginas:", error); // Depuración
    res.status(500).json({ error: "Error al obtener páginas" });
  }
});

router.post('/pages', async (req, res) => {
  try {
    console.log("Recibida solicitud para guardar una página:", req.body); // Depuración
    const newPage = req.body;
    const result = await pagesCollection.insertOne(newPage);
    console.log("Página guardada en la base de datos:", result); // Depuración
    res.json(result);
  } catch (error) {
    console.error("Error al guardar la página:", error); // Depuración
    res.status(500).json({ error: "Error al guardar la página" });
  }
});

// ✅ Ruta para editar una página
router.put('/pages/:id', async (req, res) => {
  try {
    console.log("Recibida solicitud para editar la página con ID:", req.params.id); // Depuración
    const pageId = req.params.id;
    const updatedPage = req.body;
    const result = await pagesCollection.updateOne(
      { _id: new ObjectId(pageId) }, // Convertir el ID a ObjectId
      { $set: updatedPage }
    );
    console.log("Página actualizada en la base de datos:", result); // Depuración
    res.json(result);
  } catch (error) {
    console.error("Error al actualizar la página:", error); // Depuración
    res.status(500).json({ error: "Error al actualizar la página" });
  }
});

// ✅ Ruta para eliminar una página
router.delete('/pages/:id', async (req, res) => {
  try {
    console.log("Recibida solicitud para eliminar la página con ID:", req.params.id); // Depuración
    const pageId = req.params.id;
    const result = await pagesCollection.deleteOne({ _id: new ObjectId(pageId) });
    console.log("Página eliminada de la base de datos:", result); // Depuración
    res.json(result);
  } catch (error) {
    console.error("Error al eliminar la página:", error); // Depuración
    res.status(500).json({ error: "Error al eliminar la página" });
  }
});

// ✅ Usar el prefijo /api para todas las rutas
app.use('/api', router);

// ✅ Ruta raíz
app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente 🚀');
});

// ✅ Iniciar el servidor
app.listen(PORT, () => console.log(`🔥 Servidor corriendo en http://localhost:${PORT}`));