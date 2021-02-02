const Transaction = require("../../models/transaction");
const User = require("../../models/user");

const transformTransaction = (transaction) => {
  return {
    ...transaction._doc,
    creator: user.bind(this, transaction.creator),
  };
};

const transactions = async (transactionIDs) => {
  try {
    const transactions = await Transaction.find({
      _id: { $in: transactionIDs },
    });
    return transactions.map((transaction) => {
      return transformTransaction(transaction);
    });
  } catch (error) {
    throw error;
  }
};

const user = async (userID) => {
  try {
    const user = await User.findById(userID);
    return {
      ...user._doc,
      createdTransactions: transactions.bind(
        this,
        user._doc.createdTransactions
      ),
    };
  } catch (error) {
    throw error;
  }
};

exports.user = user;
exports.transactions = transactions;
exports.transformTransaction = transformTransaction;
//Add single transaction
