const authResolver = require("../resolvers/auth");
const transactionResolver = require("../resolvers/transactions");

const ROOTRESOLVER = {
  ...authResolver,
  ...transactionResolver,
};

module.exports = ROOTRESOLVER;
