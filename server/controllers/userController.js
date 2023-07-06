const User = require("../Models/userModal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecretKey = process.env.JWT_SECRET_KEY;

const generateAccessToken = (id) => {
  return jwt.sign({ userId: id }, jwtSecretKey);
};

exports.userSignup = async (req, res, next) => {
  try {
    const { email, password, mobile } = req.body;
    console.log(req.body);

    const usedEmail = await User.findOne({
      where: { email: email },
    });
    if (usedEmail) {
      throw new Error("email is already registred");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      email: email,
      passWord: hashedPassword,
      mobile: mobile,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getLoginDetails = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userDetails = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!userDetails) {
      throw new Error("User not found");
    }

    const match = await bcrypt.compare(password, userDetails.passWord);
    if (!match) {
      throw new Error("Password is incorrect");
    }
    res.status(200).json({
      message: "User logged in succesfully",
      userId: generateAccessToken(userDetails.id),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.changePassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const hash = await bcrypt.hash(password, 5);
    const user = await User.findByPk(req.user.id);
    if (!user) {
      res.status(401).json({ message: "usernot found" });
    }
    await user.update({
      passWord: hash,
    });
    res.status(200).json({ message: "password updated succesfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
