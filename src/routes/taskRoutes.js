// taskRoutes.js
// import express from "express";
// import { controller } from "../controllers/taskController.js";

// const router = express.Router();

// router.get("/", controller.getTasks);
// router.get("/:id", controller.getTaskById);
// router.post("/", controller.createTask);
// router.put("/:id", controller.replaceTask);
// router.patch("/:id", controller.updateTask);
// router.delete("/:id", controller.deleteTask);
// router.head("/", controller.headTasks);
// router.options("/", controller.optionsTasks);

// export default router;





// taskRoutes.js
import express from "express";
import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  replaceTask,
  deleteTask,
  headTasks,
  optionsTasks
} from "../controllers/taskController.js";

import { verifyAPIKey } from "../middleware/verifyAPIKey.js";
import { verifyJWT } from "../middleware/jwtMiddleware.js";

const router = express.Router();

/*
READ routes → API KEY
*/
router.get("/", verifyAPIKey, getTasks);
router.get("/:id", verifyAPIKey, getTaskById);
router.head("/", verifyAPIKey, headTasks);
router.options("/", optionsTasks);

/*
WRITE routes → JWT
*/
router.post("/", verifyJWT, createTask);
router.put("/:id", verifyJWT, replaceTask);
router.patch("/:id", verifyJWT, updateTask);
router.delete("/:id", verifyJWT, deleteTask);

export default router;





// // src/routes/taskRoutes.js
// import express from "express";


// import {
//   getTasks,
//   getTaskById,
//   createTask,
//   updateTask,
//   replaceTask,
//   deleteTask,
//   headTasks,
//   optionsTasks
// } from "../controllers/taskController.js";

// const router = express.Router();

// // CRUD routes
// router.get("/", getTasks);           // GET all tasks
// router.get("/:id", getTaskById);     // GET task by ID
// router.post("/", createTask);        // POST new task
// router.put("/:id", replaceTask);     // PUT replace task
// router.patch("/:id", updateTask);    // PATCH update task
// router.delete("/:id", deleteTask);   // DELETE a task

// // HEAD and OPTIONS
// router.head("/", headTasks);         // HEAD /tasks
// router.options("/", optionsTasks);   // OPTIONS /tasks

// export default router;