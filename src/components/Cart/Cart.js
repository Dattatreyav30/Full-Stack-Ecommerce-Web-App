import { Fragment, useState } from "react";
import "./Cart.css";
import CartElements from "./CartElements/CartElements";

const Cart = () => {
  const [isValid, setIsValid] = useState(false);

  const onClickEventHandler = () => {
    setIsValid(!isValid);
  };
  return (
    <Fragment>
      <button className="CartButton" onClick={onClickEventHandler}>
        Cart
      </button>
      {isValid && <CartElements />}
    </Fragment>
  );
};

export default Cart;
