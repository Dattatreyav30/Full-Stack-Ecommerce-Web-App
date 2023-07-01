import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    
  const [items, setItems] = useState([]);

  const mappingFunction = (prvItems, existingItem) => {
    const updatedItems = prvItems.map((ele) => {
      if (ele.id === existingItem.id) {
        return { ...ele, quantity: ele.quantity + 1 };
      }
      return ele;
    });
    return updatedItems;
  };

  const addItemHandler = (item) => {
    const existingItem = items.find((ele) => ele.id === item.id);
    if (existingItem) {
      setItems((prevItems) => {
        return mappingFunction(prevItems, existingItem);
      });
    } else {
      setItems((prevItems) => [{ ...item, quantity: 1 }, ...prevItems]);
    }
  };

  const updateQtyHandler = (item, qty) => {
    const filiteredItems = items.filter((ele) => {
      return item.id !== ele.id;
    });
    return setItems(filiteredItems, ...items);
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
