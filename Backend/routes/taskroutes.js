const express = require("express");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controller/taskcontroller");

const router = express.Router(); // Capital "R" dhyaan dena

// Routes
router.post("/", createTask);       // Create
router.get("/", getTasks);          // Get All
router.get("/:id", getTaskById);    // Get One
router.put("/:id", updateTask);     // Update
router.delete("/:id", deleteTask);  // Delete

module.exports = router;
