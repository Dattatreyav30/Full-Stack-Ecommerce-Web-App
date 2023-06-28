import { Fragment } from "react";
import Button from "../../UI/Button";
import "./CartElements.css";

const cartItems = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];
const CartElements = () => {
  return (
    <Fragment>
      <h3>ITEM</h3>
      <h3>PRICE</h3>
      <h3>QUANTITY</h3>
      {cartItems.map((item) => {
        return (
          <div>
            <img alt="item" src={item.imageUrl} />
            <h4>{item.price * item.quantity}$</h4>
            <h4>{item.quantity}</h4>
            <Button value="Remove item" />
          </div>
        );
      })}
    </Fragment>
  );
};

export default CartElements;
