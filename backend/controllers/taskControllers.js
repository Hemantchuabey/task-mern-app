const asyncHandler = require("express-async-handler");
const Task = require("../Model/taskModel");

// @desc : GET tasks
// @route : GET /api/goals
// @access : Private after auth
const getTask = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  return res.status(200).json(tasks);
});

// @desc : SET tasks
// @route : SET /api/goals
// @access : Private after auth
const setTask = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please include Text field!!");
  }
  // console.log(req.body);
  return res.status(200).json({ message: "set goals" });
});

// @desc : UPDATE tasks
// @route : UPDATE /api/goals/:id
// @access : Private after auth
const updateTask = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: `update goals ${req.params.id}` });
});

// @desc : DELETE tasks
// @route : DELETE /api/goals/:id
// @access : Private after auth
const deleteTask = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: `delete goals ${req.params.id}` });
});

module.exports = {
  getTask,
  setTask,
  updateTask,
  deleteTask,
};
