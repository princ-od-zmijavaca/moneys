const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type User {
    _id: ID!
    email: String!
    password: String
    createdTransactions: [Transaction!]
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

input UserInput {
    email: String!
    password: String!
}

type Transaction {
  _id: ID!
  title: String!
  price: Float!
  creator: User!
}

input TransactionInput {
  title: String!
  price: Float!
}

type RootQuery {
  transactions: [Transaction!]!
  login(email: String!, password: String!): AuthData!
}

type RootMutation {
  createTransaction(transactionInput: TransactionInput): Transaction
  createUser(userInput: UserInput): User
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);
