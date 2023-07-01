import React from "react";

const CartContext = React.createContext({
  items: [],
  addItem: () => {},
  updateQty: () => {},
  totalAmount: 0,
});

export default CartContext;
