const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { sendResponse } = require("../helpers/responseHandler");
const saltRounds = 10;

const secretKey = process.env.AUTH_KEY;

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return sendResponse(res, 400, null, "Login failed");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign({ userId: user._id }, secretKey, {
        expiresIn: "7d",
      });
      res.cookie("token", token);
      return sendResponse(res, 200, token);
    } else {
      return sendResponse(res, 400, null, "Login failed");
    }
  } catch (error) {
    console.error(error);
    return sendResponse(res, 500);
  }
};

module.exports.register = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user) {
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = new User({
        email,
        password: hashedPassword,
      });

      await newUser.save();
      return sendResponse(res, 200);
    } else {
      return sendResponse(res, 400, null, "User already exist");
    }
  } catch (error) {
    console.error(error);
    return sendResponse(res, 500);
  }
};
