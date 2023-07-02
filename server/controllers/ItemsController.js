const Items = require("../Models/itemsModel");

exports.postProducts = async (req, res, next) => {
  console.log(req.body)
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const quantity = req.body.quantity;
  try {
    await Items.create({
      title: title,
      imageUrl: imageUrl,
      price: price,
      quantity : quantity
    });
    res.status(200).json({ message: "product added succesfully" });
  } catch (err) {
    console.log(err)
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
