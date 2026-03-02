// src/controllers/taskController.js

export const controller = {};

// In-memory storage (acts like a fake database)
const tasks = [
  { id: 1, title: "Buy milk", completed: false },
  { id: 2, title: "Pay bills", completed: true },
  { id: 3, title: "Walk the dog", completed: false },
];

/**
 * GET /tasks
 * Get all tasks
 */
controller.getTasks = (req, res) => {
  res.status(200).json(tasks);
};

/**
 * GET /tasks/:id
 * Get a specific task by ID
 */
controller.getTaskById = (req, res) => {
  const taskId = parseInt(req.params.id);

  const task = tasks.find((t) => t.id === taskId);

  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};

/**
 * POST /tasks
 * Create a new task
 */
controller.createTask = (req, res) => {
  const newTask = req.body;

  // Generate new ID
  const newId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;

  newTask.id = newId;

  tasks.push(newTask);

  res.status(201).json(newTask);
};

/**
 * PATCH /tasks/:id
 * Partially update a task
 */
controller.updateTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedData = req.body;

  const task = tasks.find((t) => t.id === taskId);

  if (task) {
    Object.assign(task, updatedData);
    res.status(200).json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};

/**
 * PUT /tasks/:id
 * Replace entire task
 */
controller.replaceTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const newTaskData = req.body;

  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex !== -1) {
    newTaskData.id = taskId; // keep original ID
    tasks[taskIndex] = newTaskData;
    res.status(200).json(newTaskData);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};

/**
 * DELETE /tasks/:id
 * Remove a task
 */
controller.deleteTask = (req, res) => {
  const taskId = parseInt(req.params.id);

  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};
