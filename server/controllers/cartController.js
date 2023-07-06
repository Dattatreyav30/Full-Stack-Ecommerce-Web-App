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
          quantity: quantity + 1,
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
