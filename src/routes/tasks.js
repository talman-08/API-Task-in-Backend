import express from "express";
import { controller as taskController } from "../controller/taskController.js";

export const router = express.Router();

// GET all tasks
router.get("/tasks", taskController.getTasks);

// GET task by ID
router.get("/tasks/:id", taskController.getTaskById);

// CREATE new task
router.post("/tasks", taskController.createTask);

// UPDATE partially (PATCH)
router.patch("/tasks/:id", taskController.updateTask);

// REPLACE completely (PUT)
router.put("/tasks/:id", taskController.replaceTask);

// DELETE task
router.delete("/tasks/:id", taskController.deleteTask);
