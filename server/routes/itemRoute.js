const express = require("express");

const router = express.Router();

const itemsController = require("../controllers/ItemsController");

router.get("/", itemsController.getProducts);

router.post('/Add-product',itemsController.postProducts); 

module.exports = router;
