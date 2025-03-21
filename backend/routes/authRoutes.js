// routes/authRoutes.js
const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (user) {
    res.json({ id: user._id, username: user.username });
  } else {
    res.status(401).json({ error: "Credenciales inválidas" });
  }
});

module.exports = router;