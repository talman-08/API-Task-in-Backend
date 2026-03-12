// src/routes/secureRoutes.js
import express from "express";
import { verifyAPIKey } from "../middleware/verifyAPIKey.js";

const router = express.Router();

// Example protected route
router.get("/secure-data", verifyAPIKey, (req, res) => {
  res.json({ message: "You accessed protected API key route!" });
});

export default router;