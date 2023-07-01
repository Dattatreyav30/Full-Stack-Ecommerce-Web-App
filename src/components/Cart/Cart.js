import { Fragment, useContext, useState } from "react";
import CartContext from "../Store/CartContext/cart-context";
import "./Cart.css";
import CartElements from "./CartElements/CartElements";

const Cart = () => {
  const [isValid, setIsValid] = useState(false);

  const cartCtx = useContext(CartContext)

  const onClickEventHandler = () => {
    setIsValid(!isValid);
  };
  return (
    <Fragment>
      <button className="CartButton" onClick={onClickEventHandler}>
        Cart - {cartCtx.items.length}
      </button>
      {isValid && <CartElements  onClose = {onClickEventHandler}/>}
    </Fragment>
  );
};

export default Cart;
