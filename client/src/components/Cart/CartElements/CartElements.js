import Button from "../../UI/Button";
import "./CartElements.css";

import CartContext from "../../Store/CartContext/cart-context";
import { useContext } from "react";

const CartElements = () => {
  const cartCtx = useContext(CartContext);

  const onClickRemoveItemHandler = (item, qty) => {
    cartCtx.updateQty(item);
  };
  return (
    <div className="cart-elements">
      <div className="cart-headings">
        <h3>ITEMS</h3>
        <h3>PRICE</h3>
        <h3>QUANTITY</h3>
      </div>
      {cartCtx.items.map((item) => {
        return (
          <table className="cart-table">
            <tr key={Math.random()}>
              <td className="table-data">
                <img
                  className="cart-list-image"
                  alt="item"
                  src={item.imageUrl}
                />
              </td>
              <td className="cart-element-title">{item.title}</td>
              <td>Price - {item.price * item.quantity}$</td>
              <td>Qty - {item.quantity}</td>
              <td>
                <Button
                  value="Remove item"
                  onClick={() => onClickRemoveItemHandler(item, item.quantity)}
                />
              </td>
            </tr>
          </table>
        );
      })}
    </div>
  );
};

export default CartElements;
