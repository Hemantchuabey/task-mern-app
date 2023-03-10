const express = require("express");
const color = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/taskRoutes"));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// mongodb://localhost:27017
