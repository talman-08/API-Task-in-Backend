import express from "express";
import { router } from "./routes/index.js";

export const app = express();

app.use(express.json());
app.use(router);

// 404 handler (important for your test!)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
