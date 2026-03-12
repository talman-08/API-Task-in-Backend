// src/routes/authRoutes.js
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();
const SECRET_KEY = "super_secret_key"; // same key as jwtMiddleware.js

// Hardcoded user (Lab 2 requirement)
const user = {
  username: "doe",
  // hashed version of "doe"
  password: "$2b$10$tB7pCBa07SRIupvGhY7.HeIvOWoUB.4qeRhDkYW3MiDM9uRfcaDty" 
};

// Login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (username !== user.username) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: "1h" });

  res.json({ message: "Login successful", token });
});

export default router;