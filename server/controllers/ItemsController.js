const Items = require("../Models/itemsModel");

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
