// @desc : Register User
// @route : POST register user /api/users/
// @access : Public

const registerUser = (req, res) => {
  res.json({ message: `Register User` });
};
// @desc : Authenticate User
// @route : POST  /api/users/login
// @access : Public

const loginUser = (req, res) => {
  res.json({ message: `Login User` });
};
// @desc : Get User data
// @route : GET users /api/users/me
// @access : Public

const getUser = (req, res) => {
  res.json({ message: `User Data!!` });
};

module.exports = { registerUser, loginUser, getUser };
