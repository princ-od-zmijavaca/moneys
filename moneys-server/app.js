const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const isAuth = require("./middleware/is-auth");
var cors = require("cors");

const myGRAPHQLSCHEMA = require("./graphql/schema/index");
const myGQLRESOLVERS = require("./graphql/resolvers/index");

const app = express();

app.use(express.json());

app.use(cors());

//DO NOT EXECUTE JUST PASS
app.use(isAuth);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: myGRAPHQLSCHEMA,
    rootValue: myGQLRESOLVERS,
    graphiql: true,
  })
);

module.exports = app;
