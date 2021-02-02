require("dotenv").config({ path: "config.env" });
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

module.exports = database;
