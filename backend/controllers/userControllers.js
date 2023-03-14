const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../Model/userModel");

// @desc : Register User
// @route : POST register user /api/users/
// @access : Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all the required field!!!");
  }
  //   to check if use exist

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists !!!");
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  // generate the salt to hash the password
  const hashedPassword = await bcrypt.hash(password, salt);
  // create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    return res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error(`User already exists!!`);
  }
  res.json({ message: `Register User` });
});
// @desc : Authenticate User
// @route : POST  /api/users/login
// @access : Public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: `Login User` });
});
// @desc : Get User data
// @route : GET users /api/users/me
// @access : Public

const getUser = asyncHandler(async (req, res) => {
  res.json({ message: `User Data!!` });
});

module.exports = { registerUser, loginUser, getUser };
