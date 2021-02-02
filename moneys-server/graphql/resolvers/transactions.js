const Transaction = require("../../models/transaction");
const User = require("../../models/user");
const { transformTransaction } = require("../resolvers/merge");

module.exports = {
  transactions: async () => {
    const transactions = await Transaction.find();
    return transactions.map((transaction) => {
      return transformTransaction(transaction);
    });
  },
  createTransaction: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("unauthenticated");
    }

    const transaction = new Transaction({
      title: args.transactionInput.title,
      price: +args.transactionInput.price,
      creator: req.userId,
    });

    let createdTransaction;
    try {
      const result = await transaction.save();
      createdTransaction = transformTransaction(result);

      const creator = await User.findById(req.userId);
      creator.createdTransactions.push(transaction);

      await creator.save();

      return createdTransaction;
    } catch (error) {
      throw error;
    }
  },
};
