const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");

  //Missing header point
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split(" ")[1]; // Bearer <token>

  //Missing token or token empty
  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }

  try {
    decodedToken = jwt.verify(token, "rodotica");
    console.log(decodedToken);
  } catch (error) {
    //Verification failed
    req.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    //No token, token failed
    req.isAuth = false;
    return next();
  }

  //Granting ....
  req.isAuth = true;
  req.userId = decodedToken.userId;
  next();
};
