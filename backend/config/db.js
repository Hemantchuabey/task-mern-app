const moongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await moongoose.connect(process.env.MONGO_URL);
    console.log(`Mongo DB connected!!! ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
