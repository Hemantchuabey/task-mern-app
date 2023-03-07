const express = require("express");
const router = express.Router();
const {
  getTask,
  setTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskControllers");

router.get("/", getTask);
router.post("/", setTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
