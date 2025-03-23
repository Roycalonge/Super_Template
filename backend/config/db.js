const { MongoClient, ServerApiVersion } = require('mongodb');

const MONGO_URI = process.env.MONGO_URI;
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

const db = client.db("editorDB");

module.exports = { connectDB, db };
