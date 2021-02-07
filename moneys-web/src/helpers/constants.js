const loginParams = (email, password) => {
  return `query{
        login(email:"${email}",password:"${password}"){
          userId
          token
          tokenExpiration
        }
      }`;
};

const registerParams = (email, password) => {
  return `mutation{
    createUser(userInput:{email:"${email}",password:"${password}"}){
      _id
      email
      password
    }
  }`;
};

module.exports = {
  GRAPHQL_API: "http://localhost:8000/graphql",
  LOG_IN_QUERY: loginParams,
  REGISTER_QUERY: registerParams,
};
