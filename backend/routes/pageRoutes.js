const express = require("express");
const Page = require("../models/Page");
const router = express.Router();
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "supersecreto";

// Middleware para verificar autenticación
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Acceso denegado, token no proporcionado" });

  try {
    const verified = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(403).json({ error: "Token inválido" });
  }
};

// Guardar una nueva página (protegido)
router.post("/", authenticateToken, async (req, res) => {
  try {
    const { title } = req.body;
    const existingPage = await Page.findOne({ title, user: req.user.id });

    if (existingPage) {
      return res.status(400).json({ error: "Ya tienes una página con este título" });
    }

    const newPage = new Page({ ...req.body, user: req.user.id });
    await newPage.save();
    res.status(201).json(newPage);
  } catch (error) {
    console.error("Error al guardar la página:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

// Obtener todas las páginas de un usuario (protegido con paginación)
router.get("/user/:userId", authenticateToken, async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    if (req.user.id !== req.params.userId) {
      return res.status(403).json({ error: "No tienes permisos para ver estas páginas" });
    }

    const pages = await Page.find({ user: req.params.userId })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(pages);
  } catch (error) {
    console.error("Error al obtener las páginas:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

module.exports = router;
