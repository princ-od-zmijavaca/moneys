import axios from "axios";

import Constants from "./constants";

const Login = async (email, password) => {
  try {
    const queryResult = await axios.post(Constants.GRAPHQL_API, {
      query: Constants.LOG_IN_QUERY(email, password),
    });
    return queryResult;
  } catch (error) {
    if (error.response) {
      console.log("RES ERROR DATA", error.response.data.errors[0].message);
    } else if (error.request) {
      console.log("REQUEST ERROR", error.request);
    } else {
      console.log("UNDEF LOGIN ERROR @ HTTP Helper");
    }
  }
};

const Register = async (email, password) => {
  try {
    const queryResult = await axios.post(Constants.GRAPHQL_API, {
      query: Constants.REGISTER_QUERY(email, password),
    });
    return queryResult;
  } catch (error) {
    if (error.response) {
      console.log("RES ERROR DATA", error.response.data.errors[0].message);
    } else if (error.request) {
      console.log("REQUEST ERROR", error.request);
    } else {
      console.log("UNDEF ERROR @ HTTP Helper");
    }
  }
};

export { Login, Register };
