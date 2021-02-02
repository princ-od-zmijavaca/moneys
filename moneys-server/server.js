const server = require("./app");
const database = require("./database");
require("dotenv").config({ path: "/config.env" });
const PORT = process.env.PORT || 8001;

database.on("error", () => console.log("DB connecction error"));
database.once("open", () => {
  server.listen(PORT, () => {
    console.log("Server started...");
    console.log(PORT);
  });
});
