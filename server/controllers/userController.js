const User = require("../Models/userModal");
const bcrypt = require("bcrypt");

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
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
