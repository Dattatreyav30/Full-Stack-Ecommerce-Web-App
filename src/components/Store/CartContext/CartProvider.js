import { useState } from "react";
import CartContext from "./cart-context";

const updateQtyHandler = (item, qty) => {};

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    const existingItem = items.find((ele) => ele.id === item.id);
    if (existingItem) {
      setItems((prevItems) => {
        return prevItems.map((ele) => {
          return { ...ele, quantity: ele.quantity + 1 };
        });
      });
    } else {
      return setItems([item, ...items]);
    }
  };

  const cartContext = {
    items: items,
    addItem: addItemHandler,
    updateQty: updateQtyHandler,
    totalAmount: 0,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
