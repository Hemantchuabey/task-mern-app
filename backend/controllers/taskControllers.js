const asyncHandler = require("express-async-handler");
const Task = require("../Model/taskModel");

// @desc : GET tasks
// @route : GET /api/goals
// @access : Private after auth
const getTask = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
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
  const task = await Task.create({
    text: req.body.text,
    user: req.user.id,
  });
  // console.log(req.body);
  return res.status(200).json(task);
});

// @desc : UPDATE tasks
// @route : UPDATE /api/goals/:id
// @access : Private after auth
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("Task not found !!");
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.status(200).json(updateTask);
});

// @desc : DELETE tasks
// @route : DELETE /api/goals/:id
// @access : Private after auth
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("Task Not Found !!!");
  }

  const deletedTask = await Task.findByIdAndRemove(req.params.id);
  return res.status(200).json(deletedTask);
});

module.exports = {
  getTask,
  setTask,
  updateTask,
  deleteTask,
};
