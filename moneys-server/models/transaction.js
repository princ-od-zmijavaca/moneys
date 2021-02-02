const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  title: {
    type: String,
    required: [true, "transaction must have a title"],
  },
  price: {
    type: Number,
    required: [true, "transacction must have a price"],
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
