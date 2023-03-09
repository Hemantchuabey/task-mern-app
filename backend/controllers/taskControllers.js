// @desc : GET tasks
// @route : GET /api/goals
// @access : Private after auth
const getTask = (req, res) => {
  res.status(200).json({ message: "get goals" });
};

// @desc : SET tasks
// @route : SET /api/goals
// @access : Private after auth
const setTask = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please include Text field!!");
  }
  // console.log(req.body);
  return res.status(200).json({ message: "set goals" });
};

// @desc : UPDATE tasks
// @route : UPDATE /api/goals/:id
// @access : Private after auth
const updateTask = (req, res) => {
  res.status(200).json({ message: `update goals ${req.params.id}` });
};

// @desc : DELETE tasks
// @route : DELETE /api/goals/:id
// @access : Private after auth
const deleteTask = (req, res) => {
  res.status(200).json({ message: `delete goals ${req.params.id}` });
};

module.exports = {
  getTask,
  setTask,
  updateTask,
  deleteTask,
};
