const Items = require("../Models/itemsModel");

exports.getProducts = async (req, res, next) => {
  const products = await Items.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] }
  });
  return res.status(200).json({ products: products });
};
