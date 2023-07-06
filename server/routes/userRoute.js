const express = require("express");

const router = express.Router();

const userAuth = require("../middleware/userAuth");

const userController = require("../controllers/userController");

router.post("/signup", userController.userSignup);

router.post("/login", userController.getLoginDetails);

router.post("/change-password", userAuth.userAuthorization,userController.changePassword);

module.exports = router;
