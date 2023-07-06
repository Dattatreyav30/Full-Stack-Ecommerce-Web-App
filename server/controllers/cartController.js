const Cart = require("../Models/cartModel");

exports.addItemTocart = async (req, res, next) => {
  try {
    const { id, title, imageUrl, quantity, price } = req.body;
    console.log(req.body);

    const existingCart = await Cart.findOne({
      where: {
        userId: req.user.id,
        id: id,
      },
    });
    if (existingCart) {
      return await Cart.update(
        {
          quantity: existingCart.quantity + 1,
        },
        { where: { userId: req.user.id, id: id } }
      );
    }
    await Cart.create({
      id: id,
      title: title,
      imageUrl: imageUrl,
      quantity: quantity,
      price: price,
      userId: req.user.id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

exports.removeIemFromCart = async (req, res, next) => {
  try {
    const id = req.params.id;
    const cartItem = await Cart.findByPk(id);
    if (!cartItem) {
      throw new Error("item not found");
    }
    await Cart.destroy({ where: { id: id } });
    res.status(200).json({ message: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.fetchCartProducts = async (req, res, next) => {
  try {
    const cartProducts = await Cart.findAll({
      where: {
        userId: req.user.id,
      },
    });
    res.status(200).json({ products: cartProducts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
