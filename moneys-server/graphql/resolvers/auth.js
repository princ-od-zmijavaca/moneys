const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");

module.exports = {
  login: async ({ email, password }) => {
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("User does not exist");
    }

    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      //inccorect password
      throw new Error("invalid credentials");
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, "rodotica", {
      expiresIn: "1h",
    });

    return { userId: user.id, token: token, tokenExpiration: 1 };
  },
  createUser: async (args) => {
    try {
      const existingUser = await User.findOne({
        email: args.userInput.email,
      });

      if (!existingUser) {
        const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
        const user = new User({
          email: args.userInput.email,
          password: hashedPassword,
        });

        const result = await user.save();
        return { ...result._doc, password: null };
      } else {
        throw new Error("credentials in use");
      }
    } catch (error) {
      throw error;
    }
  },
};
