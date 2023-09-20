import { useEffect, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, [items.length]);

  const fetchData = async () => {
    try {
      const response = await fetch("/cart/cart-items", {
        headers: {
          authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const fetchData = await response.json();
        setItems(fetchData.products);
      } else {
        throw new Error("Failed to fetch cart items");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const mappingFunction = (prevItems, existingItem) => {
    const updatedItems = prevItems.map((ele) => {
      if (ele.id === existingItem.id) {
        return { ...ele, quantity: ele.quantity + 1 };
      }
      return ele;
    });
    return updatedItems;
  };

  const addItemHandler = async (item) => {
    const existingItem = items.find((ele) => ele.id === item.id);
    if (existingItem) {
      setItems((prevItems) => {
        return mappingFunction(prevItems, existingItem);
      });
    } else {
      setItems((prevItems) => [{ ...item, quantity: 1 }, ...prevItems]);
    }

    try {
      await fetch("http://localhost:5000/cart/add-item", {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateQtyHandler = async (item) => {
    const filteredItems = items.filter((ele) => {
      return item.id !== ele.id;
    });
    setItems(filteredItems);

    try {
      await fetch(`http://localhost:5000/cart/remove-item/${item.id}`, {
        method: "DELETE",
        headers: {
          authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log(err);
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
