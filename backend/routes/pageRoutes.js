const express = require('express');
const { db } = require('../config/db'); // Importamos la conexión a MongoDB
const { ObjectId } = require('mongodb');

const router = express.Router();
const pagesCollection = db.collection("pages");

// ✅ Obtener todas las páginas
router.get('/', async (req, res) => {
  try {
    const pages = await pagesCollection.find().toArray();
    res.json(pages);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener páginas" });
  }
});

// ✅ Guardar una nueva página
router.post('/', async (req, res) => {
  try {
    const result = await pagesCollection.insertOne(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar la página" });
  }
});

// ✅ Editar una página
router.put('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
  try {
    const pageId = req.params.id;
    const result = await pagesCollection.deleteOne({ _id: new ObjectId(pageId) });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la página" });
  }
});

module.exports = router;
