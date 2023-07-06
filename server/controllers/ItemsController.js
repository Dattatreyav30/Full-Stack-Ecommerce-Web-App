const Items = require("../Models/itemsModel");

exports.postProducts = async (req, res, next) => {
  const { title, imageUrl, price, quantity } = req.body;
  try {
    await Items.create({
      title: title,
      imageUrl: imageUrl,
      price: price,
      quantity: quantity,
    });
    res.tatus(200).json({ message: "product added succesfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error While Adding Product" });
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Items.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return res.status(200).json({ products: products });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getProductDetails = async (req, res, next) => {
  try {
    let productId = req.params.id;
    const product = await Items.findOne({
      where: { id: productId },
    });
    res.status(200).json({ product: product });
  } catch (err) {
    res.status(500).json({ message: "error occured while fetching data" });
  }
};
