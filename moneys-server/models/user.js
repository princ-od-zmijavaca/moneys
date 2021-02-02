const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "user must have email"],
  },
  password: {
    type: String,
    required: [true, "user must have password"],
  },
  createdTransactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Transaction",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
