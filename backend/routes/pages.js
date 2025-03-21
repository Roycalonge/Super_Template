// backend/routes/pages.js
const express = require('express');
const router = express.Router();
const Page = require('../models/Page');
const User = require('../models/User');

// Crear una nueva página
router.post('/', async (req, res) => {
  const { title, content, userId } = req.body;
  const page = new Page({ title, content, user: userId });
  await page.save();
  const user = await User.findById(userId);
  user.pages.push(page._id);
  await user.save();
  res.status(201).send(page);
});

// Obtener todas las páginas de un usuario
router.get('/user/:userId', async (req, res) => {
  const pages = await Page.find({ user: req.params.userId });
  res.send(pages);
});

module.exports = router;