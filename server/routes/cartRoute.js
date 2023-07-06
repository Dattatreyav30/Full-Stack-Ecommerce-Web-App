const express = require("express");

const router = express.Router();

const cartController = require("../controllers/cartController");

const userAuth = require("../middleware/userAuth");

router.post(
  "/add-item",
  userAuth.userAuthorization,
  cartController.addItemTocart
);

router.delete(
  "/remove-item/:id",
  userAuth.userAuthorization,
  cartController.removeIemFromCart
);

module.exports = router;
