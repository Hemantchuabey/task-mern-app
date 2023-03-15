const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../Model/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get the token from header
      token = req.headers.authorization.split(" ")[1];
      //   verify token
      const decoded = jwt.verify(token, process.env.JWT_SECERT);
      // GET user from token
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (err) {
      console.log(err);
      res.status(401);
      throw new Error("Not Authoerized !!!");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error(`Not Autherized, no token !!`);
  }
});

module.exports = { protect };
