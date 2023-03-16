const express = require("express");
const router = express.Router();
const {
  getTask,
  setTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskControllers");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTask).post(protect, setTask);
router.route("/:id").put(protect, updateTask).delete(protect, deleteTask);

module.exports = router;
