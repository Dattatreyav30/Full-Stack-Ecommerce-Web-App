const jwt = require("jsonwebtoken");

const User = require("../Models/userModal");

require("dotenv").config();

const jwtSecretKey = process.env.JWT_SECRET_KEY;

const userAuthorization = async (req, res, next) => {
  try {
    const token = await req.headers.authorization;
    const auth = jwt.verify(token, jwtSecretKey);
    const user = await User.findByPk(auth.userId);
    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = {
  userAuthorization,
};
