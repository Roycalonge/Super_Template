// backend/controllers/pageController.js
const Page = require('../models/Page');

// Obtener todas las páginas
const getPages = async (req, res) => {
  try {
    const pages = await Page.find();
    res.json(pages);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener páginas' });
  }
};

// Guardar una nueva página
const createPage = async (req, res) => {
  try {
    const newPage = new Page(req.body);
    await newPage.save();
    res.status(201).json(newPage);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear página' });
  }
};

// Editar una página
const updatePage = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPage = await Page.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedPage);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la página' });
  }
};

// Eliminar una página
const deletePage = async (req, res) => {
  try {
    const { id } = req.params;
    await Page.findByIdAndDelete(id);
    res.status(200).json({ message: 'Página eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la página' });
  }
};

module.exports = { getPages, createPage, updatePage, deletePage };
