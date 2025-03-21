const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let users = [];  // Simulación de base de datos en memoria

// Registro de usuario
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ name, email, password: hashedPassword });
    res.json({ message: "Usuario registrado correctamente" });
});

// Login de usuario
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    const token = jwt.sign({ email }, "secreto", { expiresIn: "1h" });
    res.json({ token });
});

module.exports = router;
