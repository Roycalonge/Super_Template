// routes/pageRoutes.js
const express = require("express");
const Page = require("../models/Page");
const router = express.Router();

// Guardar una página
router.post("/", async (req, res) => {
  try {
    const newPage = new Page(req.body);
    await newPage.save();
    res.json(newPage);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar la página" });
  }
});

// Obtener todas las páginas
router.get("/", async (req, res) => {
  try {
    const pages = await Page.find();
    res.json(pages);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las páginas" });
  }
});

module.exports = router;